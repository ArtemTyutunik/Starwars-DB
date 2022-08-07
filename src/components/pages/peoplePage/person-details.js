import ItemDetails, {Record} from "../../item-details/item-details";
import withApiService from "../../hoc/withApiService";
import {getPerson} from "../../../api";


 const PersonDetails = ({getData, itemId, onButtonClick}) => {

    return (
        <ItemDetails getData= {getData} itemId={itemId} onButtonClick = {onButtonClick}>
            <Record field= "birthYear" label = "Birth year: "/>
            <Record field= "height" label = "Height: "/>
            <Record field= "mass" label = "Mass: "/>
            <Record field= "gender" label = "Gender: "/>
        </ItemDetails>
    )


}


const mapDetailsToProps = () => ({
    getData: getPerson
})

export default withApiService(mapDetailsToProps)(PersonDetails);