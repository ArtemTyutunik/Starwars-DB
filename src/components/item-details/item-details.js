import React, {useEffect, useState} from "react";

import './item-details.css'
import DetailsCard from "./details-card";
import ErrorIndicator from "../error-indicator";
import Spinner from "../spinner";

export const Record = ({data, field, label}) => {

    return (
        <li className="list-group-item">
            <span className="term">{label}</span>
            <span>{ data[field] }</span>
        </li>
    )
}

const ItemDetails = ({children, itemId, getData, onButtonClick}) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false)

    useEffect(() =>{
        updatePerson();
    },[itemId])

    const updatePerson = () => {
        if (!itemId) {
            return;
        }
        setIsLoading(true)
        getData(itemId)
            .then(data => itemUpdated(data))
            .catch(() => setIsError(true))
    }


    const itemUpdated =  data => {
        setIsLoading(false)
        setData(data)
    }

    if(!data){
        return <span>Select item</span>
    }


    const showErrorMessage = isError?   <ErrorIndicator/> : null;
    const showLoading = isLoading? <Spinner/>: null;
    const showContent = !(isLoading || isError)?
        <DetailsCard children={children} data={data}  onButtonClick = {onButtonClick}/>: null
    return (
        <>
            {showErrorMessage}
            {showLoading}
            {showContent}
        </>
    )
}

export default ItemDetails;

