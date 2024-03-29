import './row.css'
const Row = ({left, right}) => {
    return (
        <div className="row mb2">
            <div className="col-md-6 left">
                {left}
            </div>
            <div className="col-md-6 right">
                {right}
            </div>
        </div>
    );
}


export default Row;