:: This is a starter script for the portfolio website
:: Run this script to install dependencies and start the development server

@echo off
echo ===== Jay Joshina Portfolio Website Setup =====
echo Installing dependencies...
npm install react react-dom typescript @types/react @types/react-dom styled-components @types/styled-components react-scroll @types/react-scroll react-icons

echo Setting up development server...
npm install -g serve

echo Building the project...
npx react-scripts build

echo Starting the server...
serve -s build

pause
