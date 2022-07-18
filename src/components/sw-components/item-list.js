import compose from "../hoc/compose";
import {getAllPeople} from "../../api";
import withApiService from "../hoc/withApiService";
import ListItems from "../list-items/list-items";
import {withData} from "../hoc/withData";


const mapPersonMethodsToProps = () => ({
    getData: getAllPeople
})

export const PeopleList = compose(
        withApiService(mapPersonMethodsToProps),
        withData
)(ListItems)