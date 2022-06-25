import {LOAD_PLANET, SHOW_LOADER, SHOW_ERROR_MESSAGE} from "../types";

export const loadPlanetActionCreator = (planetData) => ({
    type: LOAD_PLANET,
    payload: planetData
})

export const showLoaderActionCreator = () => ({
    type: SHOW_LOADER
})


export const showErrorMessageActionCreator = () => ({
    type: SHOW_ERROR_MESSAGE
})

