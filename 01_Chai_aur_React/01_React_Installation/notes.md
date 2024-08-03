# Intro to React

## What is React?
- React is a popular JavaScript library for building user interface, especially for single-page applications (SPA) where we want to create interactive web applications quickly and efficiently.
- It was developed by Facebook and is maintained by large community.

## History of ReactJS
- React began as an internal tool for dynamic Facebook components.
- Created in **2011** but remained private initially.
- React.js was open-sourced by **Jordan Walke** and **Tom Occhino** at *JSConfUS 2013*
- Released with the belief that its success at Facebook could benefit others.
- Initially faced criticism for combining JS and HTML in a single file.
- It slowly gained attraction when Khan Academy adopted. 

## Why use React?

**1. Component Based Architecture:**  \
React allows us to build complex UIs from small, isolated pieces of code called components.

**2. Reusable Components:** \
Components can be reused, making our code more modular and manageable.

**3. Virtual DOM** \
React uses a virtual DOM to efficiently update the user interface, improving performance.

**4. Strong Community Support** \
A large community and a wealth of resources make it easier to learn and troubleshoot issues.

## Setting up React Environment

### 1. create-react-app
- `create-react-app` is the most commonly used tool for bootstrapping a new React application. 
- It provides a standard configuration and a set of tools to get you started quickly.

**Steps**

1. *Install Node.js:* Make sure Node.js is installed on our system. We can download it from nodejs.org.

2. *Install Create React App:* Open your terminal and run:
```bash
npx create-react-app 01-basic
```
- This command creates a new directory named 01-basic with a React project setup.

3. *Navigate to the Project Folder:*
```bash
cd 01-basic
```

4. Start the Development Server:
```bash
npm run start
```
- This command starts the development server and opens the application in our default web browser.

*What `create-react-app` provides?
- Pre-configured tools (Webpack, Babel)
- Development Server with Hot Reloading.
- Default project structure and configuration.


### 2. Setting up with `Vite`
`Vite` is a modern build tool that is faster and more efficient than `create-react-app`. It uses native ES modules and offers faster build times.

**Steps**

1. *Install Vite:* Open your terminal and run:
```bash
npm create vite@latest 02_Vite --template-react
```
- This command creates a new directory named `02_vite` with a React project using Vite.

2. *Navigate to the Project Folder:*
```bash
cd 02_Vite
```

3. *Install Dependencies:*
```bash
npm install
```

4. Start the Development Server:
```bash
npm run start
```
- This command starts the Vite development server and opens the application in your default web browser.

*What `Vite` provides?
- Fast development server with hot module replacement.
- Modern build setup with minimal configuration.
- Faster build and start times.