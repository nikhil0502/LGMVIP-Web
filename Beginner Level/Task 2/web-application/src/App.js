import "./App.css";
import Header from "./MyComponents/Header";
import { Footer } from "./MyComponents/Footer";
import React from "react";
import { Users } from "./MyComponents/Users";

function App() {
  return (
    <>
      <Header />
      <Users />
      <Footer />
    </>
  );
}

export default App;
