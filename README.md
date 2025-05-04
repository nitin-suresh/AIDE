<<<<<<< HEAD
# AIDE - AI-Powered IDE

A modern, Electron-based IDE built with React and TypeScript, featuring AI assistance powered by OpenAI. AIDE stands for "AI IDE" - an intelligent development environment that helps you write better code.
=======
# AIDE: A(n) IDE ; or AI IDE

A modern, Electron-based IDE built with React and TypeScript.
>>>>>>> ca32958e4f9a663a8f495c3d59c23b2a0a2450b6

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)
- OpenAI API key

## Installation

1. Clone the repository:
```bash
git clone https://github.com/nitin-suresh/AIDE.git
cd AIDE
```

2. Install dependencies:
```bash
# Install root dependencies
npm install

# Install renderer dependencies (this should happen automatically during npm install)
cd src/renderer && npm install
```

3. Set up your OpenAI API key:
```bash
export OPENAI_API_KEY='your-api-key-here'
```

## Development

To run the application in development mode:

```bash
npm run dev
```

This will start:
- The Electron process
- The React development server (on port 3000)

## Features

- Modern, dark-themed UI
- File explorer with tree view
- Monaco-based code editor with TypeScript support
- Material UI components for consistent design
- AI Assistant powered by OpenAI GPT-3.5
  - Code suggestions and completions
  - Natural language code explanations
  - Code generation from descriptions

## Project Structure

```
AIDE/
├── main.js              # Electron main process
├── package.json         # Main package.json
└── src/
    └── renderer/        # React application
        ├── src/
        │   ├── components/
        │   │   ├── Editor.tsx
        │   │   ├── Sidebar.tsx
        │   │   ├── TopBar.tsx
        │   │   └── AIAssistant.tsx
        │   ├── types/
        │   │   └── index.ts
        │   └── App.tsx
        └── package.json # Renderer package.json
```

## Key Components

### TopBar
- Main application menu
- File operations (Open, Save)
- Settings access

### Sidebar
- File explorer with tree view
- Shows folder and file structure
- Interactive navigation

### Editor
- Monaco-based code editor
- TypeScript support
- Syntax highlighting
- Code completion
- Dark theme

### AI Assistant
- Chat interface for code-related queries
- Code generation and suggestions
- Natural language code explanations
- One-click code insertion into editor

## Building for Production

To build the application for production:

```bash
npm run build
```

## Security

- API keys are managed through environment variables
- No sensitive data is stored in the codebase
- `.gitignore` is configured to prevent accidental commits of sensitive data

## Contributing

<<<<<<< HEAD
Feel free to submit issues and enhancement requests! 
=======
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details. 
>>>>>>> ca32958e4f9a663a8f495c3d59c23b2a0a2450b6
