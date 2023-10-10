import React from "react";
import { BrowserRouter as Router, Routes, Route, RouterProvider } from "react-router-dom";
import Nav from "./nav/Nav.js";
import About from "./about/About"

const App = () => {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={About}>

        </Route>
      </Routes>
    </>
  );
}

export default App;
