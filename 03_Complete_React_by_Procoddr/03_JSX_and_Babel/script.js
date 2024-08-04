const h2 = <h2>Hello JSX and Babel</h2>


const container = (
  <div className="container" id="myContainer">
    <section
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "100px",
      }}
    >
      <img
        src="./Babel_Logo.png"
        alt="Babel Logo"
        style={{
          width: "30%",
          backgroundColor: "lightsalmon",
          borderRadius: "30px",
        }}
      />
      <h1 style={{ fontSize: "50px" }}>Babel is a JavaScript compiler.</h1>
      <p style={{ fontSize: "30px" }}>Use next generation JavaScript, today.</p>
    </section>
  </div>
);

console.log(container)

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(container)