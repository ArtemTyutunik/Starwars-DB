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
        model: data.model,
        passengers: data.passengers,
        length: data.length,
        crew: data.crew,
        MGLT: data.MGLT,
        consumables: data.consumables,
        imageUrl: _getStarshipImage(id)
    }
}

const _extractId = (item) => {
    const idRegExp = /\/([0-9]*)\/$/;
    return item.url.match(idRegExp)[1];
}

const createPlanetImageUrl = id => {
    switch (id){
        case '1': return 'https://upload.wikimedia.org/wikipedia/en/6/6d/Tatooine_%28fictional_desert_planet%29.jpg'
        case '20': return 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl60CYC2pstfUhNH6qY5K3UoxvNmd_uvq1VQ&usqp=CAU'
        default: return `${_imageBase}/planets/${id}.jpg`
    }
}

const createStarshipsImageUrl = id => {
    switch (id){
        case '2': return 'https://starforge.info/wp-content/uploads/2019/7/image-610.jpg';
        case '3': return 'https://cdn-3d.niceshops.com/upload/image/product/large/default/revell-model-set-imperial-star-destroyer-1-pc-311143-en.jpg'
        case '17': return 'https://cdna.artstation.com/p/assets/images/images/044/188/898/large/robert-bonchune-rebel-trnsprt-xwings-away-rb.jpg?1639339017'
        default: return  `${_imageBase}/starships/${id}.jpg`;
    }
}
const _getPersonImage = (id) => `${_imageBase}/characters/${id}.jpg`;

const _getPlanetImage = (id) => createPlanetImageUrl(id);

const _getStarshipImage  = (id) => createStarshipsImageUrl(id);