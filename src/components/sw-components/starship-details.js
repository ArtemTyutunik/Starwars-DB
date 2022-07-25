import ItemDetails, {Record} from "../item-details/item-details";
import withApiService from "../hoc/withApiService";
import {getStarship} from "../../api";


const StarshipDetails = ({getData, itemId}) => {

    return (
        <ItemDetails getData= {getData} itemId={itemId}>
            <Record field= "name" label = "Name: "/>
        </ItemDetails>
    )


}


const mapDetailsToProps = () => ({
    getData: getStarship
})

export default withApiService(mapDetailsToProps)(StarshipDetails);