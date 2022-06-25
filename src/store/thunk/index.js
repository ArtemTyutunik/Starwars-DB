import {loadPlanetActionCreator, showErrorMessageActionCreator, showLoaderActionCreator} from "../actions";
import {getPlanet} from "../../api";


export const getPlanetThunkCreator = (id) => (dispatch) => {
    dispatch(showLoaderActionCreator());

    getPlanet(id)
        .then(
            data => dispatch(loadPlanetActionCreator(data)),
            () => dispatch(showErrorMessageActionCreator())
        )
}