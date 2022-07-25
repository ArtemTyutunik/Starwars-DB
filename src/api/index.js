const _apiBase = 'https://swapi.dev/api';
const _imageBase = 'https://starwars-visualguide.com/assets/img';

const getResource = async (url) => {
    const res= await fetch(`${_apiBase}${url}`);

    if (!res.ok) {
        throw new Error(`Could not fetch ${url}` +
            `, received ${res.status}`)
    }

    return await res.json();

}

export const getPlanet = (id) => new Promise((resolve, reject) => {
    getResource(`/planets/${id}`)
        .then(data => resolve(_transformPlanet(data)))
        .catch(() => reject() )
})

export const getPerson = id => new Promise((resolve,reject) => {
    getResource(`/people/${id}`)
        .then(data => resolve(_transformPeople(data)))
        .catch(() => reject())
})


export const getStarship = id => new Promise((resolve,reject) => {
    getResource(`/starships/${id}`)
        .then(data => resolve(_transformStarship(data)))
        .catch(() => reject())
})

export const getAllPeople = () => new Promise((resolve, reject) => {
    getResource('/people')
        .then(data => resolve(data.results.map(_transformPeople)))
        .catch(() => reject())
})

export const getAllPlanets = () => new Promise((resolve, reject) => {
    getResource('/planets')
        .then(data => resolve(data.results.map(_transformPlanet)))
        .catch(() => reject())
})

export const getAllStarships = () => new Promise((resolve, reject) => {
    getResource('/starships')
        .then(data => resolve(data.results.map(_transformStarship)))
        .catch(()=>reject())
})



const _transformPeople = (data) => {
    const id = _extractId(data)
    return {
        id,
        name: data.name,
        height: data.height,
        mass: data.mass,
        hairColor: data.hair_color,
        skinColor: data.skin_color,
        eyeColor: data.eye_color,
        birthYear: data.birth_year,
        imageUrl: _getPersonImage(id),
        gender: data.gender
    }
}

const _transformPlanet = (data) => {
    const id = _extractId(data)
    return {
        id,
        name: data.name,
        population: data.population,
        rotationPeriod: data.rotation_period,
        diameter: data.diameter,
        climate: data.climate,
        gravity: data.gravity,
        terrain: data.terrain,
        imageUrl: _getPlanetImage(id)
    }
}

const _transformStarship = data => {
    const id = _extractId(data);
    return {
        id,
        name: data.name,
        population: data.population,
        rotationPeriod: data.rotation_period,
        diameter: data.diameter,
        climate: data.climate,
        gravity: data.gravity,
        terrain: data.terrain,
        imageUrl: _getStarshipImage(id)
    }
}

const _extractId = (item) => {
    const idRegExp = /\/([0-9]*)\/$/;
    return item.url.match(idRegExp)[1];
}




const _getPersonImage = (id) => `${_imageBase}/characters/${id}.jpg`;

const _getPlanetImage = (id) => `${_imageBase}/planets/${id}.jpg`;

const _getStarshipImage  = (id) => `${_imageBase}/starships/${id}.jpg`;