import {useState} from "react";
import Row from "../row/row";
import {StarshipList} from "../sw-components/item-list";
import StarshipDetails from "../sw-components/starship-details";





const StarshipPage = () => {
    const [itemId, setItemId] = useState(null)

    return (

        <Row left={<StarshipList onItemSelected={ id => {setItemId(id)}}/>}
             right = {<StarshipDetails itemId = {itemId}/>}/>
    )

}

export default StarshipPage;