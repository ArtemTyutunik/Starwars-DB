import ItemDetails, {Record} from "../../item-details/item-details";
import withApiService from "../../hoc/withApiService";
import {getPlanet} from "../../../api";


const PlanetDetails = ({getData, itemId, onButtonClick}) => {

    return (
        <ItemDetails getData= {getData} itemId={itemId} onButtonClick={onButtonClick}>
            <Record field= "name" label = "Name: "/>
            <Record field='population' label= 'Population: '/>
            <Record field='climate' label= 'Climate: '/>
            <Record field='diameter' label= 'Diameter: '/>
        </ItemDetails>
    )


}


const mapDetailsToProps = () => ({
    getData: getPlanet
})

export default withApiService(mapDetailsToProps)(PlanetDetails);