
const withApiService = (mapMethodsToProps) => Wrapped => {
    const serviceProps = mapMethodsToProps();

    return props => {
        return (
            <Wrapped {...props} {...serviceProps}/>
        )
    }
}

export default withApiService;