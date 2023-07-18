import "./App.css";
import { useRef, useEffect, useState } from "react";
import Hookref from "./components/Hookref";

//Rerenderlar arası bir değişken tutmak
function App() {
  return (
    <div style={{ marginLeft: "100px", fontSize: "30px" }}>
      <Hookref />
    </div>
  );
}

export default App;
