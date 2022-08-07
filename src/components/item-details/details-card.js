import React from "react";

const DetailsCard = ({data, children, onButtonClick}) => {
    const {name, imageUrl, id} = data
    return (
        <div className="item-details card">
            <img className="item-image"
                 src={imageUrl}
                 alt="item"/>

            <div className="card-body">
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                    {
                        React.Children.map(children, (child) => {
                            return React.cloneElement(child, { data });
                        })
                    }
                </ul>
                <button type="button"
                        className="btn btn-primary"
                        onClick={() => onButtonClick(id)}>
                    See details
                </button>

            </div>
        </div>
    )
}

export default DetailsCard;