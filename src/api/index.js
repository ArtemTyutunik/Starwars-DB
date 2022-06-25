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

const _transformPlanet = (data) => ({
    id: _extractId(data),
    name: data.name,
    population: data.population,
    rotationPeriod: data.rotation_period,
    diameter: data.diameter,
    climate: data.climate,
    gravity: data.gravity,
    terrain: data.terrain
})

const _extractId = (item) => {
    const idRegExp = /\/([0-9]*)\/$/;
    return item.url.match(idRegExp)[1];
}