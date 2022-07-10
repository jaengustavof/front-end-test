import {  BrowserRouter, Routes, Route } from "react-router-dom";

import Header from './components/header/Header';
import List from './pages/list/List';
import Details from './pages/details/Details';

import "./app.scss"

function App() {
  return (
    <div className="App">
     
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element = {<List/>}/>
          <Route path="/:id" element = {<Details/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
