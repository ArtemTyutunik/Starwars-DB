import {useState} from "react";
import {useNavigate} from "react-router-dom";
import Row from "../../row/row";
import {PeopleList} from "../../sw-components/item-list";
import PersonDetails from "./person-details";





const PeoplePage = () => {
    const [itemId, setItemId] = useState(null)
    const navigate = useNavigate()
    return (
        <Row left={<PeopleList onItemSelected={ id => {setItemId(id)}}/>}
             right = {<PersonDetails itemId = {itemId} onButtonClick = {id => navigate(id)}/>}/>
    )

}

export default PeoplePage;