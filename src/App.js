import {  BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useContext } from "react";
import Header from './components/header/Header';
import List from './pages/list/List';
import Details from './pages/details/Details';
import FetchContext from "./context/fetchContext";
import axios from "axios";

import "./app.scss";


function App() {
  const [items, setItems] = useState();
  
  return (
    <FetchContext.Provider value={{items, setItems}}>
      <div className="App">
        <BrowserRouter>
          <Header/>
          <Routes>
            <Route path="/" element = {<List/>}/>
            <Route path="/:id" element = {<Details/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </FetchContext.Provider>
  );
}

export default App;
