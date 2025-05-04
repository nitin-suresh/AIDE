# AIDE: A(n) IDE ; or AI IDE

A modern, Electron-based IDE built with React and TypeScript.

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

## Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd cursor-clone
```

2. Install dependencies:
```bash
# Install root dependencies
npm install

# Install renderer dependencies (this should happen automatically during npm install)
cd src/renderer && npm install
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

## Project Structure

```
cursor-clone/
├── main.js              # Electron main process
├── package.json         # Main package.json
└── src/
    └── renderer/        # React application
        ├── src/
        │   ├── components/
        │   │   ├── Editor.tsx
        │   │   ├── Sidebar.tsx
        │   │   └── TopBar.tsx
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

## Building for Production

To build the application for production:

```bash
npm run build
```

## Troubleshooting

1. If you see `ERR_FILE_NOT_FOUND` during development:
   - This is normal on first run
   - Wait for the React development server to start
   - The application will automatically connect to `localhost:3000`

2. If dependencies are missing:
   - Run `npm install` in the root directory
   - Run `npm install` in the `src/renderer` directory

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details. 
