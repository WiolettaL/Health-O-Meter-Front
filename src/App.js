import React from "react";
import { BrowserRouter } from "react-router-dom";

import Main from "./Main/Main";

import "./App.scss";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
      <Main/>
      </div>
    </BrowserRouter>
  );
}

export default App;
