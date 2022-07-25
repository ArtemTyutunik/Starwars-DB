
import {useState} from "react";
import Row from "../row/row";
import {PlanetList} from "../sw-components/item-list";
import PlanetDetails from "../sw-components/planet-details";




const PlanetPage = () => {
    const [itemId, setItemId] = useState(null)

    return (

        <Row left={<PlanetList onItemSelected={ id => {setItemId(id)}}/>}
             right = {<PlanetDetails itemId = {itemId}/>}/>
    )

}

export default PlanetPage;