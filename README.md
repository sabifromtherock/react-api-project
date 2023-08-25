# Hoppy - React Beer Explorer 🍻

Hoppy is a React application that allows you to explore a wide variety of beers from the [Punk API](https://punkapi.com/). Whether you're a beer enthusiast or just curious.

## Features

- **Browse Beers**: View a list of beers, with 10 beers displayed on the page at a time. <br/> [Home Page Screenshot](https://github.com/sabifromtherock/react-api-project/blob/main/public/homePage.png)

- **Beer Details**: Click on a beer to see more details about it, including its description, ABV (Alcohol by Volume), and more. <br/> [Beer Details Screenshot](https://github.com/sabifromtherock/react-api-project/blob/main/public/beerDetails.png)

- **Search by Name**: Easily search for beers by their names.
- **Filter by High ABV**: Filter beers by their Alcohol by Volume (ABV) to discover stronger options (ABV > 6%).
- **Filter by Classic Range**: Explore beers that were first brewed before 2010.
- **Filter by High Acidity**: Find beers with high acidity (pH < 4).

## Getting Started

To get started with Hoppy on your local machine, follow these steps:

1. Clone the repository:

   ```
   git clone https://github.com/sabifromtherock/react-api-project
   ```

2. Navigate to the project directory:

   ```
   cd react-api-project
   ```

3. Install dependencies:

   ```
   npm install
   ```

4. Start the development server:

   ```
   npm run dev
   ```

5. Open your web browser and navigate to `http://localhost:5173` (or the port specified by Vite).

## Available Scripts

- `npm run dev`: Start the development server.
- `npm run build`: Build the production-ready application.
- `npm run deploy`: Deploy the application using [gh-pages](https://www.npmjs.com/package/gh-pages).
- `npm run lint`: Lint your code using ESLint.
- `npm run preview`: Preview your application with Vite.
- `npm test`: Run tests using [Vitest](https://github.com/vitejs/vitest).

## Dependencies

Hoppy relies on the following dependencies:

- `react`: Core library for building user interfaces.
- `react-dom`: Provides DOM-specific methods for React.
- `react-router-dom`: Library for routing in React applications.
- `sass`: Stylesheet preprocessor for styling the application.
