import ReactDOM  from "react-dom/client";
import parcelLogo from "./src/parcel-logo.png"

console.log("Hello Parcel");

const container = (
  <div id="container">
    <img src={parcelLogo} alt="Parcel Logo" />
    <h1>
      The zero configuration build tool for the <span>React</span>
    </h1>
    <p>
      Parcel combines a great out-of-the-box development experience with a
      scalable architecture that can take your project from just getting started
      to massive production application.
    </p>
    <div className="buttons">
      <a href="https://parceljs.org/docs/" className="btn1">Get Started</a>
      <a href="https://github.com/parcel-bundler/parcel" className="btn2">Github</a>
    </div>
  </div>
);

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(container)