import { NavLink } from "react-router-dom";

export const Footer = ({getActiveColor}) => {
  return (
    <footer className="section-footer">
      <div className="footer-container container">
        <div className="content_1">
          <img src="./images/logo.png" alt="logo" />
          <p>Welcome to SohailFlix , your ultimate destination for movies!</p>
          <img src="https://i.postimg.cc/Nj9dgJ98/cards.png" alt="cards" />
        </div>
        <div className="content_2 footer">
          <h4>Menu</h4>
          <NavLink to="/" style={getActiveColor}>
            Home
          </NavLink>
          <NavLink to="/about" style={getActiveColor}>
            About
          </NavLink>
          <NavLink to="/movies" style={getActiveColor}>
            Movies
          </NavLink>
          <NavLink to="/contact" style={getActiveColor}>
            Contact
          </NavLink>
        </div>
        <div className="content_3">
          <h4>Experience</h4>
          <NavLink to="./contact.html">Contact Us</NavLink>
          <NavLink to="" target="_blank">
            Payment Method
          </NavLink>
          <NavLink to="" target="_blank">
            Delivery
          </NavLink>
          <NavLink to="" target="_blank">
            Return and Exchange
          </NavLink>
        </div>
        <div className="content_4">
          <h4>NEWSLETTER</h4>
          <p>
            Be the first to know about new
            <br />
            arrivals, sales & promos!
          </p>
          <div className="f-mail">
            <input type="email" placeholder="Your Email" />
            <i className="bx bx-envelope"></i>
          </div>
          <hr />
        </div>
      </div>
      <div className="f-design">
        <div className="f-design-txt">
          <p>Design and Code by Sohail Shaikh</p>
        </div>
      </div>
    </footer>
  );
};
