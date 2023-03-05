import {useState} from "react";
import {useNavigate} from "react-router-dom";
import Row from "../../row/row";
import {StarshipList} from "../../sw-components/item-list";
import StarshipDetails from "./starship-details";

const StarshipPage = () => {
    const [itemId, setItemId] = useState(null)
    const navigate = useNavigate();
    return (

        <Row left={<StarshipList onItemSelected={ id => {setItemId(id)}}/>}
             right = {<StarshipDetails itemId = {itemId} onButtonClick = {id => navigate(id)} />}/>
    )

}

export default StarshipPage;