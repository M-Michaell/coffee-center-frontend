export default function TotalPrice({price}){
    return(
        <div className="pe-5">
            <div className="d-flex flex-row justify-content-end">
                <h3>Total Price: </h3>
                <h3>{price}</h3>
            </div>
        </div>
    )
} 