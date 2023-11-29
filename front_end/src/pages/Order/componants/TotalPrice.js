import "./TrackOrder.css";
export default function TotalPrice({ price, price_before, address, phone }) {
  const discount = price - price_before;

  return (
    <div className="">
      <div className="d-flex flex-row justify-content-end">
        <table className="table " style={{ width: "fit-content" }}>
          {address === "from store" ? (
            <tbody>
              <tr className="text-start">
                <th scope="row" className="fw-bolder p-2" style={{ fontSize: "14px" }}>
                  Address
                </th>
                <td colSpan="2" className="p-2 text-start" style={{ fontSize: "14px" }}>
                  From Store
                </td>
              </tr>

              <tr className="text-start">
                <th scope="row" className="fw-bolder p-2" style={{ fontSize: "14px" }}>
                  Total Price
                </th>
                <td colSpan="2" className="p-2 text-start" style={{ fontSize: "14px" }}>
                  {price} $
                </td>
              </tr>
            </tbody>
          ) : (
            <tbody>
              <tr className="text-start">
                <th scope="row" className="fw-bolder p-2" style={{ fontSize: "14px" }}>
                  Address
                </th>
                <td colSpan="2" className="p-2 text-start" style={{ fontSize: "14px" }}>
                  {address}
                </td>
              </tr>

              <tr className="text-start">
                <th scope="row" className="fw-bolder p-2" style={{ fontSize: "14px" }}>
                  Phone
                </th>
                <td colSpan="2" className="p-2 text-start" style={{ fontSize: "14px" }}>
                  {phone}
                </td>
              </tr>

              <tr className="text-start">
                <th scope="row" className="fw-bolder p-2" style={{ fontSize: "14px" }}>
                  Total Price
                </th>
                <td className="text-decoration-line-through p-2" style={{ fontSize: "14px" }}>
                  {price_before} $
                </td>
                <td className="p-2 text-start" style={{ fontSize: "14px" }}>
                  {price} $
                </td>
              </tr>
            </tbody>
          )}
        </table>
      </div>
    </div>
  );
}
