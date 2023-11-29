export default function TotalPrice({ price, price_before, address, phone }) {
  const discount = price - price_before;
  return (
    <div className="px-5 mx-5">
      <div className=" d-flex flex-row justify-content-end ">
        <table className="table" style={{width:'fit-content'}}>
          {address === "from store" ? (
            <>
                <tr className="text-start">
                <th scope="row" className="<fs-5 fw-bolder" style={{width:"100px"}}>
                Address
                </th>
                <td colspan="2">From Store</td>
                </tr>
                <tr className="d-flex flex-row ">
                  <th scope="row" className="<fs-5 fw-bolder">Price</th>
                  <td>{price} $</td>
                </tr>
            </>
          ) : (
            <>
              <tr className="text-start">
                <th scope="row" className="<fw-bolder" style={{width:"150px",fontSize:'24px'}}>
                Address
                </th>
                <td colspan="2">{address}</td>
              </tr>

              <tr className="text-start">
                <th scope="row" className="<fw-bolder" style={{fontSize:'24px'}} >Phone</th>
                <td colspan="2" >{phone}</td>
              </tr>

              <tr className="text-start ">
                <th scope="row" className="<fw-bolder" style={{fontSize:'24px'}}>Price</th>
                <td className="text-decoration-line-through">{price_before} $</td>
                <td className="fw-bolder fs-5">{price} $</td>
              </tr>
            </>
          )}
        </table>
      </div>
    </div>
  );
}
