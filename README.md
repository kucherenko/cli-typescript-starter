# CLI TypeScript Starter

A comprehensive starter template for building command-line applications (CLI) in TypeScript, powered by Node.js. This template is designed to get you up and running with a robust development setup, including argument parsing, environment configuration, logging, testing frameworks, code formatting, and linting. Created by Andrey Kucherenko.

## Features

This template incorporates several key tools and libraries to enhance your CLI development experience:

- **[Yargs](https://github.com/yargs/yargs):** A powerful library for parsing command-line arguments.
- **[Dotenv](https://github.com/motdotla/dotenv):** Loads environment variables from a `.env` file into `process.env`, making it easy to manage application configuration.
- **[PicoColors](https://github.com/alexeyraspopov/picocolors):** Lightweight and fast library for styling terminal text.
- **[Signale](https://github.com/klaussinani/signale):** Highly configurable logging utility, designed to be simple, but powerful.
- **[Jest](https://jestjs.io/):** A delightful JavaScript Testing Framework with a focus on simplicity.
- **[TS-Node](https://typestrong.org/ts-node/):** TypeScript execution and REPL for Node.js.
- **[TSUP](https://tsup.egoist.sh/):** The simplest and fastest way to bundle your TypeScript libraries.
- **[Prettier](https://prettier.io/):** An opinionated code formatter that supports many languages and integrates with most editors.
- **[ESLint](https://eslint.org/):** A pluggable and configurable linter tool for identifying and reporting on patterns in JavaScript and TypeScript.

## Prerequisites

Before you begin, ensure you have installed [Node.js](https://nodejs.org/) and [pnpm](https://pnpm.io/) on your system.

## Getting Started

To start using this CLI TypeScript starter, follow these steps:

### 1. Clone the repository

```sh
npx degit kucherenko/cli-typescript-starter my-project
```

### 2. Install dependencies

Navigate to your project directory and install the necessary dependencies:

```sh
cd my-project && pnpm install
```

### 3. Configure the package

Update the `package.json` to reflect your project's details:

- Rename the package:
    ```json
    "name": "my-project",
    ```
- Set the command name:
    ```json
    "bin": {
      "my-project": "./bin/run"
    }
    ```

### 4. Set up environment variables

Create a `.env` file in the root directory and configure your environment variables as needed.

## Usage

This starter comes with several predefined scripts to help with development:

- `pnpm build` - Build the project using `tsup`.
- `pnpm build:watch` - Automatically rebuild the project on file changes.
- `pnpm compile` - Compile TypeScript files using `tsc`.
- `pnpm clean` - Remove compiled code from the `dist/` directory.
- `pnpm format` - Check files for code style issues using Prettier.
- `pnpm format:fix` - Automatically fix code formatting issues with Prettier.
- `pnpm lint` - Check code for style issues with ESLint.
- `pnpm lint:fix` - Automatically fix code style issues with ESLint.
- `pnpm start [command]` - Run the CLI application using `ts-node`.
- `pnpm start:node [command]` - Run the CLI application from the `dist/` directory.
- `pnpm test` - Run unit tests.
- `pnpm test:watch` - Run tests and watch for file changes.

## Development

To contribute to this project or customize it for your needs, consider the following guidelines:

1. **Code Styling:** Follow the predefined code style, using Prettier for formatting and ESLint for linting, to ensure consistency.
2. **Testing:** Write unit tests for new features or bug fixes using Jest. Make sure to run tests before pushing any changes.
3. **Environment Variables:** Use the `.env` file for local development. For production, ensure you configure the environment variables in your deployment environment.

## Contributing

Contributions are welcome! If you'd like to improve this CLI TypeScript starter, please follow the standard fork-and-pull request workflow. Make sure your contributions adhere to the project's coding standards, include tests if applicable, and are properly formatted and linted.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Author

**Andrey Kucherenko**

- GitHub: [@kucherenko](https://github.com/kucherenko)

---

Happy Coding!
