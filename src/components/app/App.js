import { Routes ,Route } from 'react-router-dom';

import Header from "../header";
import RandomPlanet from "../random-planet";
import {
    Home,
    PeoplePage,
    PlanetPage,
    StarshipPage,
    PersonDetails,
    PlanetDetails,
    StarshipDetails} from "../pages/";

import './App.css';


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
