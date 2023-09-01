# sample-example-polyfact-chat

This is a boilerplate project for creating a chat interface using the Polyfact SDK with React and styled components. It is configured and optimized using Vite and TypeScript.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Configuration](#configuration)
- [Using polyfact-cli](#using-polyfact-cli)
- [Scripts](#scripts)
- [Dependencies](#dependencies)
- [Stack](#stack)
- [Contributing](#contributing)
- [License](#license)

## Features

- Fully customizable chat UI with styled components.
- Seamless integration with Polyfact SDK for chat functionalities.
- Pre-configured themes for chat, header, and footer.
- Easy to adapt and extend based on your requirements.

## Prerequisites

- Node.js
- npm/yarn

## Installation

1. Clone the repository:
```bash
git clone https://github.com/kevin-btc/polyfact-chat-template.git
```

2. Navigate to the project directory:
```bash
cd polyfact-chat-template
```

3. Install dependencies:
```bash
npm install
```

## Usage

1. Start the development server:
```bash
npm run dev
```

2. Visit `http://localhost:3000` to view the chat interface.

## Configuration

All configurations related to the chat UI, header, and footer can be found in `src/config.ts`. You can adjust colors, bot name, logos, and other UI settings from here.

### Polyfact Configuration

To set up the chat to work with Polyfact:

1. Create a project at [Polyfact](https://app.polyfact.com).
2. Replace the project ID in `app.tsx` with your own.
3. Configure or use the provided system prompt IDs.

## Using polyfact-cli

You can also utilize the `polyfact-cli` to be guided through setting up the boilerplate:

1. Run the command:
```bash
npx polyfact
```

2. Select "chat" from the options.
3. Follow the on-screen instructions to set up your chat application.

## Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the application for production.
- `npm run preview`: Runs a local preview of the built production version.

## Dependencies

- Core: `react`, `react-dom`, `styled-components`
- Chat UI: `@polyfact/chat`, `polyfact`
- Icons: `phosphor-react`
- Dialog: `@radix-ui/react-dialog`
- Bundler: `vite`
- Types: `typescript`, `@types/react`, `@types/react-dom`

## Stack

- React
- TypeScript
- Vite
- styled-components

## Contributing

Contributions, issues, and feature requests are welcome. Feel free to check the [issues page](https://github.com/kevin-btc/polyfact-chat-template/issues) for any upcoming enhancements or bug fixes.

## License

This project is licensed under the MIT License. See `LICENSE` for more information.

---

If you find this project helpful, please consider giving it a ⭐ on GitHub!
