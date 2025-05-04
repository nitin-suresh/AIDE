# AIDE - AI-Powered IDE

A modern, Electron-based IDE built with React and TypeScript, featuring AI assistance powered by OpenAI. AIDE stands for "AI IDE" - an intelligent development environment that helps you write better code.

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)
- OpenAI API key (for AI features)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/aide.git
cd aide
```

2. Install dependencies:
```bash
npm install
```

3. Set up your OpenAI API key:
```bash
export OPENAI_API_KEY='your-api-key-here'
```

## Usage

1. Build the React app:
```bash
cd src/renderer && npm run build && cd ../..
```

2. Start the application:
```bash
npm start
```

## Features

- Modern code editor with syntax highlighting
- AI-powered code assistance
- File management
- Real-time code suggestions
- Intelligent code completion

## Project Structure

```
aide/
├── electron/          # Electron main process files
├── src/
│   └── renderer/      # React application
│       ├── src/
│       │   ├── components/  # React components
│       │   └── utils/       # Utility functions
│       └── public/    # Static assets
└── package.json
```

## Security

- The OpenAI API key is stored as an environment variable
- No sensitive data is stored locally
- All API calls are made securely through Electron's IPC

## Contributing

Feel free to submit issues and enhancement requests!

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
