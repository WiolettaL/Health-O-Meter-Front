import React from "react";
import { BrowserRouter } from "react-router-dom";

import Main from "./Main/Main";
import Footer from "./Footer/Footer";

import "./App.scss";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
      <Main/>
      <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
