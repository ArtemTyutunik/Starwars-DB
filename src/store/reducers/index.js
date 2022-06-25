import {LOAD_PLANET, SHOW_LOADER} from "../types";


const reducer = (state = {}, {type, payload}) => {
    switch (type) {
        case SHOW_LOADER:
            return {...state, isLoading: true}

        case LOAD_PLANET:
            return {...state, randomPlanet: payload, isError: false, isLoading: false}

        default:
            return state
    }
}

export default reducer;