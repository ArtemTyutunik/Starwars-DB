import React, {useEffect, useState} from "react";

import './item-details.css'
import DetailsCard from "./details-card";

export const Record = ({data, field, label}) => {

    return (
        <li className="list-group-item">
            <span className="term">{label}</span>
            <span>{ data[field] }</span>
        </li>
    )
}

const ItemDetails = ({children, itemId, getData}) => {
    const [data, setData] = useState(null)

    useEffect(() =>{
        updatePerson();
    },[itemId])

    const updatePerson = () => {
        if (!itemId) {
            return;
        }
        getData(itemId)
            .then(data => setData(data))

    }

    if(!data){
        return <span>Select item</span>
    }

    return <DetailsCard children={children} data={data}/>
}

export default ItemDetails;

