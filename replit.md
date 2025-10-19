# Light Project - React + Vite

## Overview
This is a minimal React + Vite application that provides a starter template with Hot Module Replacement (HMR) and ESLint configuration.

## Project Structure
- `src/` - React application source code
  - `App.jsx` - Main application component with counter example
  - `main.jsx` - Application entry point
  - `index.css` - Global styles
  - `assets/` - Static assets (logos, images)
- `public/` - Public assets served directly
- `vite.config.js` - Vite configuration
- `eslint.config.js` - ESLint configuration

## Tech Stack
- **React** 19.1.1 - UI library
- **Vite** 7.1.10 - Build tool and dev server
- **ESLint** - Code linting

## Development
The development server runs on port 5000 and is configured to work with Replit's proxy environment.

### Commands
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Replit Configuration
- **Server**: Configured to bind to 0.0.0.0:5000 for Replit environment
- **HMR**: Hot Module Replacement configured to work with Replit's proxy
- **Deployment**: Configured as autoscale deployment with Vite preview server

## Recent Changes
- **2025-10-19**: Initial import and Replit environment setup
  - Configured Vite server to work with Replit proxy (0.0.0.0:5000)
  - Set up HMR with proper websocket configuration
  - Configured deployment settings for production
