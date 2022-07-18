import ItemDetails, {Record} from "../item-details/item-details";
import withApiService from "../hoc/withApiService";
import {getPerson} from "../../api";


 const PersonDetails = ({getData, itemId}) => {

    return (
        <ItemDetails getData= {getData} itemId={itemId}>
            <Record field= "name" label = "Name: "/>
        </ItemDetails>
    )


}


const mapDetailsToProps = () => ({
    getData: getPerson
})

export default withApiService(mapDetailsToProps)(PersonDetails);