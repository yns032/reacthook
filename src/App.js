import "./App.css";
import { React, useRef, useEffect, useState } from "react";
import { createContext } from "react";

import Hookref from "./components/Hookref";
import Hookref2 from "./components/Hookref2";
import Hookreduce from "./components/Hookreduce";
import Context from "./components/Context";

//Rerenderlar arası bir değişken tutmak
const themes = {
  dark: {
    background: "#383838",
    color: "#fff",
  },
  light: {
    background: "#fff",
    color: "#000",
  },
};
//1.context oluştur
export const ThemeContext = React.createContext(themes.dark);
//2.provider oluştur
function App() {
  const [theme, setTheme] = useState(themes.dark);
  const toggleTheme = () => {
    if (theme === themes.dark) {
      setTheme(themes.light);
    } else {
      setTheme(themes.dark);
    }
  };
  return (
    <div style={{ marginLeft: "100px", fontSize: "30px" }}>
      {/* <Hookref />
      <Hookref2 />
      <Hookreduce /> 
      <Hookreduce />*/}
      <button onClick={toggleTheme}>
        {theme === themes.dark ? "Dark Theme" : "Light Theme"}
      </button>
      <ThemeContext.Provider value={themes.dark}>
        <Context />
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
