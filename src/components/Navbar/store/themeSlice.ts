import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  theme: localStorage.getItem("theme") || "light-mode",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      const newTheme = state.theme === "light-mode" ? "dark-mode" : "light-mode";
      state.theme = newTheme;
      localStorage.setItem("theme", newTheme); 
    },
    setTheme: (state, action) => {
      const newTheme = action.payload;
      state.theme = newTheme;
      localStorage.setItem("theme", newTheme); // Guardar el nuevo tema en localStorage
    },
  },
});

export const { toggleTheme, setTheme } = themeSlice.actions;
export default themeSlice;
