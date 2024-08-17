import { useTheme } from "../hooks/useTheme";

export const Header = () => {
  const [isDark, setIsDark] = useTheme()

  // if(isDark) {
  //   document.body.classList.add("dark");
  // } else {
  //   document.body.classList.remove("dark");
  // }
  //! it is not good approach because we are directly manipulating dom and in react we don't do that

  //* We can give class dynamically for dark/light mode

  return (
    <>
      <header className={`header-container ${isDark ? "dark" : ""}`}>
        <div className="header-content">
          <h2 className="title">
            <a href="/">
              Countries API Project <span>By Sohail</span>
            </a>
          </h2>
          <p
            className="theme-changer"
            onClick={() => {
              setIsDark(!isDark);
              localStorage.setItem("isDarkMode", !isDark);
            }}
          >
            <i className={`fa-regular fa-${isDark ? "sun" : "moon"}`} />
            &nbsp;&nbsp;{`${isDark ? "Light" : "Dark"} Mode`}
          </p>
        </div>
      </header>
    </>
  );
};
