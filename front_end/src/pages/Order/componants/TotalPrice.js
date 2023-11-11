export default function TotalPrice({price}){
    return(
        <div>
            <div className="d-flex flex-row">
                <h3>Total Price: </h3>
                <h3>{price}</h3>
            </div>
        </div>
    )
} 