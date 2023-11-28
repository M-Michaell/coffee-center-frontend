export default function TotalPrice({price,price_before}){
    const discount = price - price_before
    return(
        <div className="pe-5">
            <div className="d-flex flex-row justify-content-end">
                <h3>Total Price: </h3>
                {discount == 0 ? (
                <h3><span className="px-2 ">{price_before}</span>{price}</h3>

                ):(
                <h3><span className="px-2 text-decoration-line-through">{price_before}</span>{price}</h3>

                )}
            </div>
        </div>
    )
}   