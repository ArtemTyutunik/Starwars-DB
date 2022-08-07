import React from "react";

import Header from "../header";

import './App.css';
import RandomPlanet from "../random-planet";
import { Routes ,Route } from 'react-router-dom';
import Home from "../pages/home/home";
import PeoplePage from "../pages/peoplePage/people-page";
import PersonDetails from "../pages/peoplePage/person-details";
import PlanetPage from "../pages/planetPage/planet-page";
import StarshipPage from "../pages/starshipsPage/starship-page";
import PlanetDetails from "../pages/planetPage/planet-details";
import StarshipDetails from "../pages/starshipsPage/starship-details";

function App() {

  return (
    <div className="App app-container">
      <Header/>
      <RandomPlanet/>

        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path= '/people' element = {<PeoplePage/>} />
            <Route path= '/people/:id' element = {<PersonDetails/>} />
            <Route path= '/planets/:id' element = {<PlanetDetails/>} />
            <Route path= '/starships/:id' element = {<StarshipDetails/>}/>
            <Route path='/planets' element = {<PlanetPage/>}/>
            <Route path='/starships' element = {<StarshipPage/>}/>
        </Routes>
    </div>
  );
}

export default App;
