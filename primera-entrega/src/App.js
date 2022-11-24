import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import "./App.css";

const App = () => {
  

  return (
    <div className="container">
      <Navbar />
      <ItemListContainer greeting={"Hannah Martin - Elegant and Fashion Women's Watches"}/>
    </div>
  )
}

export default App;