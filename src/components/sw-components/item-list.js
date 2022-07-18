import compose from "../hoc/compose";
import {getAllPeople, getAllPlanets, getAllStarships} from "../../api";
import withApiService from "../hoc/withApiService";
import ListItems from "../list-items/list-items";
import {withData} from "../hoc/withData";


const mapPersonMethodsToProps = () => ({
    getData: getAllPeople
})

const mapPlanetMethodsToProps = () => ({
    getData: getAllPlanets
})

const mapStarshipMethodsToProps = () => ({
    getData: getAllStarships
})


export const PeopleList = compose(
        withApiService(mapPersonMethodsToProps),
        withData
)(ListItems)

export const PlanetList = compose(
    withApiService(mapPlanetMethodsToProps),
    withData
)(ListItems)

export const StarshipList = compose(
    withApiService(mapStarshipMethodsToProps),
    withData
)(ListItems)