const h2 = /*#__PURE__*/React.createElement("h2", null, "Hello JSX and Babel");
const container = /*#__PURE__*/React.createElement("div", {
  className: "container",
  id: "myContainer"
}, /*#__PURE__*/React.createElement("section", {
  style: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "100px"
  }
}, /*#__PURE__*/React.createElement("img", {
  src: "./Babel_Logo.png",
  alt: "Babel Logo",
  style: {
    width: "30%",
    backgroundColor: "lightsalmon",
    borderRadius: "30px"
  }
}), /*#__PURE__*/React.createElement("h1", {
  style: {
    fontSize: "50px"
  }
}, "Babel is a JavaScript compiler."), /*#__PURE__*/React.createElement("p", {
  style: {
    fontSize: "30px"
  }
}, "Use next generation JavaScript, today.")));
console.log(container);
const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(container);