import ItemDetails, {Record} from "../../item-details/item-details";
import withApiService from "../../hoc/withApiService";
import {getStarship} from "../../../api";


const StarshipDetails = ({getData, itemId, onButtonClick}) => {

    return (
        <ItemDetails getData= {getData} itemId={itemId} onButtonClick={onButtonClick}>
            <Record field= "name" label = "Name: "/>
            <Record field= "model" label = "Model: "/>
            <Record field= "length" label = "Length: "/>
            <Record field= "passengers" label = "Passengers: "/>
        </ItemDetails>
    )


}


const mapDetailsToProps = () => ({
    getData: getStarship
})

export default withApiService(mapDetailsToProps)(StarshipDetails);