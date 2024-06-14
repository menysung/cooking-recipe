const { createContext } = require("react");

//context 객체 만들기
export const ThemeContext = createContext();

//provider component
export function ThemeProvider({ children }) {
  return (
    <ThemeContext.Provider value={{ color: "lightblue" }}>
      {children}
    </ThemeContext.Provider>
  );
}
