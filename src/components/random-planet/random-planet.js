import React, {useEffect, useState} from "react";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";
import VisibleContent from "./visibleContent";
import {getPlanet} from "../../api";

import './random-planet.css'



const RandomPlanet = () => {
    const [planet, setPlanet] = useState({});
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false);


    useEffect(()=> {
        updatePlanet();
        const interval = setInterval(updatePlanet, 45000);

        return () => clearInterval(interval)
    }, [])

    const updatePlanet = () => {
        const id  = Math.floor(Math.random() * 20)+1;
        getPlanet(id)
            .then( onPlanetLoaded,
                () => setIsError(true)
            )
    }

    const onPlanetLoaded = (planet) => {
        setPlanet(planet)
        setIsLoading(false)
    }


    const ErrorMessage = isError? <ErrorIndicator/>: null;
    const Loading = isLoading? <Spinner/>: null;
    const Content = !(isLoading || isError)? <VisibleContent planet = {planet}/>: null

    return (
        <div className="random-planet jumbotron rounded">
            {ErrorMessage}
            {Loading}
            {Content}
        </div>
    )


}




export default RandomPlanet;