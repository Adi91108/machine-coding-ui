// import { createContext, useContext, useEffect, useState } from "react";

// const ThemeContext = createContext();

// export const useTheme = () => {
//   return useContext(ThemeContext);
// };

// export const ThemeProvider = ({ children }) => {
//   const [isDark, setIsDark] = useState(true);

//   const handleThemeChange = () => {
//     setIsDark((prev) => !prev);
//   };

//   const theme = isDark ? "light" : "dark";

//   useEffect(() => {
//     const isDark = localStorage.getItem(theme) === theme;
//     setIsDark(isDark);
//     document.body.className = theme;
//   }, [isDark]);

//   return (
//     <ThemeContext.Provider value={{ isDark, theme, handleThemeChange }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };

import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const useTheme = () => {
  return useContext(ThemeContext);
};

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);

  const handleThemeChange = () => {
    const newIsDark = !isDark;
    localStorage.setItem("theme", JSON.stringify(newIsDark));
    setIsDark(newIsDark);
    document.body.className = newIsDark ? "dark" : "light";
  };

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    const initialIsDark = storedTheme ? JSON.parse(storedTheme) : true;
    setIsDark(initialIsDark);
    document.body.className = initialIsDark ? "dark" : "light";
  }, []);

  const theme = isDark ? "dark" : "light";

  return (
    <ThemeContext.Provider value={{ isDark, theme, handleThemeChange }}>
      {children}
    </ThemeContext.Provider>
  );
};

