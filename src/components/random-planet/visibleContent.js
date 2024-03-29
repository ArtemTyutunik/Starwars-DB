import './random-planet.css'

const VisibleContent = ({planet}) => {
    const { imageUrl,
        name,
        population,
        rotationPeriod,
        diameter,
        climate,
        gravity,
        terrain} = planet;

    return (
        <div className='random-planet-wrapper'>
            <img className="planet-image"
                 src={imageUrl}
                 alt="planet" />
            <div className={'random-planet-details'}>
                <h4>{name}</h4>
                <div className='d-flex flex-row'>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <span className="term">Population:</span>
                            <span>{population}</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Rotation Period:</span>
                            <span>{rotationPeriod}</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Diameter:</span>
                            <span>{diameter}</span>
                        </li>
                    </ul>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <span className="term">Climate:</span>
                            <span>{climate}</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Gravity:</span>
                            <span>{gravity}</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Terrain:</span>
                            <span>{terrain}</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default VisibleContent;