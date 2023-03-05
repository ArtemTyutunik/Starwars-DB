import {useCallback, useEffect, useState} from "react";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";

export const withData = (View) => (props) => {
        const [isLoading, setIsLoading] = useState(true);
        const [isError, setIsError] = useState(false);
        const [data, setData]  = useState(null)

        useEffect(() => {
            updateItem()
        }, [props.getData])

        const updateItem = useCallback(() => {
            props.getData()
                .then( data => {
                    setIsLoading(false)
                    setIsError(false)
                    setData(data)
                })
        }, [props.getData])

       if (isLoading) {
           return <Spinner/>
       }

       if (isError) {
           return <ErrorIndicator/>
       }

       if (!(isLoading || isError)){
               return  <View  {...props} data = {data}/>
       }
}
