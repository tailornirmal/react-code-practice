import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext(null);

export const useTheme = () => {
  return useContext(ThemeContext);
};

export const UseContextHook = ({ children }) => {
  const [darkMode, setDarkMode] = useState(true);

  const toggleTheme = () => {
    setDarkMode((mode) => !mode);
  };

  useEffect(() => {
    const element = document.getElementsByTagName("body");
    console.log(element);

    element[0].style.backgroundColor = darkMode ? "black" : "white";
    element[0].style.color = darkMode ? "white" : "black";

    // document.documentElement.setAttribute(
    //   "data-theme",
    //   darkMode ? "dark" : "light"
    // );
  }, [darkMode]);

  return (
    <ThemeContext.Provider value={{ toggleTheme, darkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};
