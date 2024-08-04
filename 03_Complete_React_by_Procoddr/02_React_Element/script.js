// // Create Element with VanillaJS DOM Element

const p = document.createElement('p')

p.innerText = "Hello JS"
document.querySelector("#domJs").append(p);


// --------------------------------------------
// Create Element with React Object

let h2 = React.createElement('h2', {className: 'sub-heading'}, 'Hello React!')

// Create Root with ReactDOM Object
const root = ReactDOM.createRoot(document.querySelector('#root'))

// Render it in website
root.render(h2)


// Let's make container
const div = React.createElement(
  "div",
  { className: "container", id: "main" },
  React.createElement(
    "img",
    {
        src: './React-Symbol.png',
        width: '20%'
    }
  ),
  React.createElement(
    "section",
    {},
    React.createElement(
      "h2",
      {},
      "The library for web and native user interfaces"
    ),
    React.createElement(
      "a",
      {
        href: "https://react.dev/",
        target: '_blank'
      },
      "See Docs"
    )
  ),
  
  React.createElement('form', {
    id: 'myForm'
  }, 
      React.createElement('input', {
        type: 'email',
        placeholder: 'Enter Email'
      }),
      React.createElement('input', {
        type: 'password',
        placeholder: 'Enter Password'
      }),
      React.createElement('input', {
        type: 'submit'
      })
  )
);

const reactClone = ReactDOM.createRoot(document.querySelector('#reactClone'))

reactClone.render(div)
