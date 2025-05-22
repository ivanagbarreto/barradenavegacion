import { RootState } from "./store/reduxStore";
import { useDispatch, useSelector } from "react-redux";
import React from "react";
import { toggleTheme } from "./store/themeSlice";

const useTheme = () => {
  const theme = useSelector((state: RootState) => state.theme.theme); // Obtener el tema desde Redux
  const dispatch = useDispatch();
  const handleToggleTheme = () => dispatch(toggleTheme());

  React.useEffect(() => {
    const root = document.getElementById("root");

    if (theme) {
      document.body.classList.add("theme-transition");
      document.body.classList.add(theme);
      root?.classList.add("theme-transition");
      root?.classList.add(theme);
    }

    const timeout = setTimeout(() => {
      document.body.classList.remove("theme-transition");
      root?.classList.remove("theme-transition");
    }, 500);

    return () => {
      document.body.classList.remove(theme);
      root?.classList.remove(theme);
      clearTimeout(timeout);
    };
  }, [theme]);

  return { theme, handleToggleTheme };
};

export default useTheme;