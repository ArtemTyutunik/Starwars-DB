import {useNavigate} from "react-router-dom";

import Row from "../row/row";
import {PeopleList} from "../sw-components/item-list";
import PersonDetails from "../sw-components/person-details";
import {useState} from "react";



const PeoplePage = () => {
    const [itemId, setItemId] = useState(null)

    return (

        <Row left={<PeopleList onItemSelected={ id => {setItemId(id)}}/>}
             right = {<PersonDetails itemId = {itemId}/>}/>
    )

}

export default PeoplePage;