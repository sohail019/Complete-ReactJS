# Custom React

## Source Code

### HTML
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Custom React App</title>
</head>
<body>
    
    <div id="root"></div>
    <script type="module" src="./index.js"></script>
</body>
</html>
```

### JavaScript
```javascript
const customRender = (reactElement, container)=>{
  /* 
    const domElement = document.createElement(reactElement.type)

    domElement.innerHTML = reactElement.children

    domElement.setAttribute('href', reactElement.props.href)

    domElement.setAttribute('target', reactElement.props.target)

    container.appendChild(domElement)
    */

    // Version 2 More Modular

    const domElement = document.createElement(reactElement.type)

    domElement.innerHTML = reactElement.children

    for (const prop in reactElement.props) {
        // if(prop === "children") continue

        domElement.setAttribute(prop, reactElement.props[prop])
        }

    container.appendChild(domElement)
    }


const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank',
        
    },
    children: 'Click me to visit Google'
}

const root = document.querySelector("#root")

customRender(reactElement, root)
```

<!-- Explaination -->

## Code Explaination
---
### `customRender` function
```javascript
const customRender = (reactElement, container)=> {
```
**Purpose:** 
- This function takes two arguments: a `reactElement` object and a `container` DOM node.
- It renders the `reactElement` into the specified `container`.

---
```javascript
const domElement = document.createElement(reactElement.type);
```
- Here, a new DOM element is created based on the `type` property of the `reactElement`.
- This mimics how React elements are turned into actual DOM elements (e.g an `<a>` tag in this case.)

---
```javascript
domElement.innerHTML = reactElement.children;
```
- The inner content of the DOM element is set using the `children` property of the `reactElement` object.
- This property holds the text or other elements to be rendered inside the current element.

---
```javascript
for(const prop in reactElement.props){
    domElement.setAttribute(prop, reactElement.props[prop]);
}
```
- A `for...in` loop iterates over the `props` object of the `reactElement`.
- For each property in `props`, the `setAttribute` method is used to add attribute to the `domElement`.
- This ensure that all specified properties, like `href` and `target` are set on the DOM element.

---
```javascript
container.appendChild(domElement)
```
- This newly created and configured `domElement` is appended to the `container` node, making it part of the actual DOM and visible in the browser.

----
----

### `reactElement` Object.

```javascript
const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit Google'
}
```

- **type:** Specifies the type of DOM element to create. In this case, it's an 'a' tag, which is an anchor link.
- **props:** An object containing the attributes to be set on the element. Here, `href` specifies the URL the link should navigate to, and `target` determines how the link opens (e.g., `_blank` opens it in a new tab).
- **children:** The text content or nested elements inside the element. Here, it's the text "Click me to visit Google".

---
---

### `root` Element and Invocation

```javascript
const root = document.querySelector("#root");
```
- The `root` variable holds a reference to the DOM element with the ID of "root". 
- This is where the `reactElement` will be rendered

```javascript
customerRender(reactElement, root)
```
- The `customRender` function is called with the `reactElement` and the `root` as arguments. This triggers the rendering process, adding the constructed DOM element to the page.
