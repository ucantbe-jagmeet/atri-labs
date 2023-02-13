import React from "react";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Menu from "./components/Menu";
import About from "./components/About";
import BrowseMenu from "./components/BrowseMenu";
import Speciality from "./components/Speciality";
import Reviews from "./components/Reviews";
function App() {
  return (
    <>
      <Nav />
      <Home />
      <Menu />
      <About />
      <BrowseMenu />
      <Speciality />
      <Reviews />
    </>
  );
}

export default App;
