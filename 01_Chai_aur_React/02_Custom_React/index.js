const customRender = (reactElement, container)=>{
  /* 
    // jo bhi reactElement ka type hoga wo dynamically domElement banega
    const domElement = document.createElement(reactElement.type)

    // Children Text ko react element ka text banate hai.
    domElement.innerHTML = reactElement.children

    // Attribute set karte hai props leke reactElement ka
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)

    // container jo root se select kiya hai add karte hai
    container.appendChild(domElement)


    ye sab theek hai par agar attributes badhte to problem hoti isliye loop based logic likhenge
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