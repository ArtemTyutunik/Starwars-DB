import ItemDetails, {Record} from "../item-details/item-details";
import withApiService from "../hoc/withApiService";
import {getPlanet} from "../../api";


const PlanetDetails = ({getData, itemId}) => {

    return (
        <ItemDetails getData= {getData} itemId={itemId}>
            <Record field= "name" label = "Name: "/>
        </ItemDetails>
    )


}


const mapDetailsToProps = () => ({
    getData: getPlanet
})

export default withApiService(mapDetailsToProps)(PlanetDetails);