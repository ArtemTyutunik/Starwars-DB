
import {useState} from "react";
import Row from "../../row/row";
import {PlanetList} from "../../sw-components/item-list";
import PlanetDetails from "./planet-details";
import {useNavigate} from "react-router-dom";

const PlanetPage = () => {
    const [itemId, setItemId] = useState(null)
    const navigate = useNavigate();
    return (
        <Row left={<PlanetList onItemSelected={ id => {setItemId(id)}}/>}
             right = {<PlanetDetails itemId = {itemId} onButtonClick = {id => navigate(id)}/>}/>
    )
}

export default PlanetPage;