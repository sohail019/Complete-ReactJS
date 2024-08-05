# Installation by Parcel

Parcel is a popular web application bundler known for its simplicity, speed, and zero-config approach. It helps developers bundle JavaScript, HTML, CSS, and other assets into optimized files for web deployment.

## What is Parcel?

### Definition:
Parcel is a web application bundler that takes care of bundling all our assets (JavaScript, CSS, HTML, images, etc.) into a single or multiple files that can be efficiently delivered to a browser.

### Features:

- **Zero Configuration:** Works out of the box without requiring configuration files.
- **Fast:** Utilizes multi-core processing to speed up the build process.
- **Built-in Development Server:** Includes a development server with hot module replacement (HMR).
- **Support for Modern JavaScript:** Automatically transpiles and polyfills code using Babel.
- **Automatic Code Splitting:** Splits code automatically for faster load times.
- **Tree Shaking:** Removes unused code from the final bundle.

### Why Do We Need Parcel?
- **Simplified Setup:** Parcel allows developers to get started quickly without needing to set up complex build configurations like those required by other bundlers (e.g., Webpack).
- **Automatic Optimizations:** It automatically optimizes our code for production, handling tasks like minification and code splitting.
- **Development Efficiency:** With features like HMR, developers can see changes in real-time without needing to reload the page manually.

### How to Install Parcel Using NPM
To use Parcel, we need to install it using npm (Node Package Manager). Here’s how:

1. **Initialize our Project** (if not already done):

```bash
npm init -y
```
- This creates a `package.json` file in our project directory.

2. Install Parcel:

```bash
npm install --save-dev parcel
```
- This installs Parcel as a development dependency.

### How to Use Parcel
1. **Set Up our Project Structure:** Create a simple HTML and JavaScript setup.

```plaintext
/project-root
├── /src
│   └── index.html
└── package.json
```

2. **Create an HTML Entry Point (`src/index.html`):**

```html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Parcel Example</title>
</head>
<body>
    <script src="index.js"></script>
</body>
</html>
```

3. **Add JavaScript (`src/index.js`):**

```javascript
console.log('Hello, Parcel!');
```

4. **Add Scripts to `package.json`:**

```json

{
  "scripts": {
    "start": "parcel src/index.html",
    "build": "parcel build src/index.html"
  },
  "devDependencies": {
    "parcel": "^2.0.0"
  }
}
```

5. **Start the Development Server:**

```bash
npm run start
```
This command starts the Parcel development server with HMR, serving our project on a local server (usually `http://localhost:1234`).

## How Does Parcel Work?

- **Automatic Detection:** Parcel automatically detects the entry file (like `index.html`) and figures out dependencies by analyzing `import` and `require` statements in our JavaScript files.
- **HMR (Hot Module Replacement):** When you save changes to our files, Parcel updates only the changed modules without a full-page reload. This is very useful during development as it provides instant feedback.
- **Optimizations:** Parcel performs optimizations like minification, dead code elimination (tree shaking), and asset optimization when you build for production.

## Does Parcel Convert Our Code?
- **Yes:** Parcel automatically converts modern JavaScript into browser-compatible versions using Babel. It also handles CSS pre-processing and image optimizations.

## How to Use the Build Command for Production-Ready Code

### 1. Run the Build Command:

```bash
npm run build
```
This command bundles and optimizes our application, outputting the files into a dist directory.

### 2. Production-Ready Code:

- **Minification:** JavaScript, CSS, and HTML are minified.
- **Tree Shaking:** Unused code is removed to reduce bundle size.
- **Asset Optimization:** Images and other assets are optimized.

By using Parcel, we can efficiently develop and deploy web applications with minimal setup and configuration. Its automatic optimizations and fast build times make it a great choice for modern web development.