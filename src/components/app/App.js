import React from "react";

import Header from "../header";

import './App.css';
import RandomPlanet from "../random-planet";
import { Routes ,Route } from 'react-router-dom';
import Home from "../pages/home/home";
import PeoplePage from "../pages/people-page";
import PersonDetails from "../sw-components/person-details";

function App() {

  return (
    <div className="App">
      <Header/>
      <RandomPlanet/>

        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path= '/people' element = {<PeoplePage/>} />
            <Route path= '/people/:id' element = {<PersonDetails/>} />
        </Routes>
    </div>
  );
}

export default App;
