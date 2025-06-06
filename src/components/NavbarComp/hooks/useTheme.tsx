import { RootState } from "./store/reduxStore";
import { useDispatch, useSelector } from "react-redux";
import React from "react";
import { toggleTheme } from "./store/themeSlice";

const useTheme = () => {
  const theme = useSelector((state: RootState) => state.theme.theme); // Obtener el tema desde Redux
  const dispatch = useDispatch();
  const handleToggleTheme = () => dispatch(toggleTheme());

  React.useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return { theme, handleToggleTheme };
};

export default useTheme;
