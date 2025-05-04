const { app, BrowserWindow, ipcMain, dialog } = require('electron');
const path = require('path');
const fs = require('fs');
const OpenAI = require('openai');

// Initialize OpenAI
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.join(__dirname, 'electron', 'preload.js')
    }
  });

  // Load the built React app
  mainWindow.loadFile(path.join(__dirname, 'src/renderer/build/index.html'));
  
  // Open DevTools in development
  if (process.env.NODE_ENV === 'development') {
    mainWindow.webContents.openDevTools();
  }
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// IPC handlers
ipcMain.handle('show-save-dialog', async () => {
  try {
    const { filePath } = await dialog.showSaveDialog({
      title: 'Save File',
      defaultPath: path.join(app.getPath('documents'), 'untitled.txt'),
      filters: [
        { name: 'Text Files', extensions: ['txt'] },
        { name: 'All Files', extensions: ['*'] }
      ]
    });
    return filePath;
  } catch (error) {
    console.error('Error showing save dialog:', error);
    throw error;
  }
});

ipcMain.handle('show-open-dialog', async () => {
  try {
    const { filePaths } = await dialog.showOpenDialog({
      title: 'Open File',
      defaultPath: app.getPath('documents'),
      properties: ['openFile'],
      filters: [
        { name: 'Text Files', extensions: ['txt'] },
        { name: 'All Files', extensions: ['*'] }
      ]
    });
    return filePaths[0];
  } catch (error) {
    console.error('Error showing open dialog:', error);
    throw error;
  }
});

ipcMain.handle('read-file', async (event, filePath) => {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    return { success: true, content };
  } catch (error) {
    console.error('Error reading file:', error);
    return { success: false, error: error.message };
  }
});

ipcMain.handle('write-file', async (event, { filePath, content }) => {
  try {
    fs.writeFileSync(filePath, content, 'utf8');
    return { success: true };
  } catch (error) {
    console.error('Error writing file:', error);
    return { success: false, error: error.message };
  }
});

// AI completion handler
ipcMain.handle('ai-completion', async (event, { messages }) => {
  try {
    console.log('API Key present:', !!process.env.OPENAI_API_KEY);
    console.log('API Key starts with sk-:', process.env.OPENAI_API_KEY?.startsWith('sk-'));
    console.log('API Key length:', process.env.OPENAI_API_KEY?.length);

    if (!process.env.OPENAI_API_KEY) {
      throw new Error('OpenAI API key not found. Please set the OPENAI_API_KEY environment variable.');
    }

    if (!process.env.OPENAI_API_KEY.startsWith('sk-')) {
      throw new Error('Invalid OpenAI API key format. API keys should start with "sk-".');
    }

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: messages.map(msg => ({
        role: msg.role,
        content: msg.content
      })),
      temperature: 0.7,
      max_tokens: 1000,
    });

    return {
      content: completion.choices[0].message?.content,
    };
  } catch (error) {
    console.error('Error in AI completion:', error);
    if (error.response?.status === 401) {
      throw new Error('Invalid OpenAI API key. Please check your API key and try again.');
    }
    throw error;
  }
}); 