import React from "react";
import { NavLink } from "react-router";
import "./NavbarComp.css";
// import useTheme from "./useTheme";
// import { RootState } from "./store/reduxStore";
import { useDispatch, useSelector } from "react-redux";
// import React from "react";
import { toggleTheme } from "./store/themeSlice";

const useTheme = () => {
  const theme = useSelector((state: any) => state.theme.theme); // Obtener el tema desde Redux
  const dispatch = useDispatch();
  const handleToggleTheme = () => dispatch(toggleTheme());

  React.useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return { theme, handleToggleTheme };
};

// export default useTheme;

const NavbarComp = () => {
  const { theme, handleToggleTheme } = useTheme();
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <NavLink to="/" className="navbar-logo">
          Frank GP Dev
        </NavLink>

        <div className="navbar-right">
          <div className="navbar-links">
            <NavLink to="/">Inicio</NavLink>
            <NavLink to="/services">Servicios</NavLink>
            <NavLink to="/about">Sobre Nosotros</NavLink>
            <NavLink to="/contact">Contacto</NavLink>
            <i
              onClick={handleToggleTheme}
              className={theme === "dark-mode" ? "fa-solid fa-sun" : "fa-solid fa-moon"}
            ></i>
          </div>
          <NavLink to="/login" className="login-button">
            Login
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default NavbarComp;
