import React from "react";

const DetailsCard = ({data, children}) => {
    const {name, imageUrl} = data
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
            </div>
        </div>
    )
}

export default DetailsCard;