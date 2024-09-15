import { NavLink } from 'react-router-dom';

export const Header = ({getActiveColor}) => {
  
  return (
    <>
      <header className="section-navbar">
        <section className="top_txt">
          <div className="head container">
            <div className="head_txt">
              <p>Learning React Router</p>
            </div>
            <div className="sing_in_up">
              <NavLink to="# ">SIGN IN</NavLink>
              <NavLink to="# ">SIGN UP</NavLink>
            </div>
          </div>
        </section>

        <div className="container">
          <div className="navbar-brand">
            <NavLink to="/">
              <p>SohailFlix</p>
            </NavLink>
          </div>

          <nav className="navbar">
            <ul>
              <li className="nav-item">
                <NavLink
                  to="/"
                  // className={({isActive}) => isActive ? "nav-link" : "nav-link"}
                  style={getActiveColor}
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to='/about'
                  style={({isActive}) => {
                    return {
                      color: isActive ? "red" : "black"
                    }
                  }}
                >
                  about
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/movies"
                  style={getActiveColor}
                >
                  movies
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/contact"
                  style={getActiveColor}
                >
                  contact
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
