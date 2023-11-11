import OrderRow from "./OrderRow";
import TotalPrice from "./TotalPrice";

export default function OrderProducts({order_items}) {
  

  return (
    <div>
        <div>

          <table className="table table-striped table-dark">
            <thead>
              <tr>
                <th scope="col" className="orange fs-5" style={{width:'10px'}}>#</th>
                <th scope="col" className="orange fs-5">image</th>
                <th scope="col" className="orange fs-5">Name</th>
                <th scope="col" className="orange fs-5">Quantity</th>
                <th scope="col" className="orange fs-5">Unit Price</th>
                <th scope="col" className="orange fs-5">Total Price</th>
                
              </tr>
            </thead>
            <tbody>
              {Object.entries(order_items).map(([key, value]) => (
                <OrderRow
                  count={key}
                  product={value.product_details}
                  quantity={value.quantity}
                />
              ))}
            </tbody>
          </table>
          
        </div>

    </div>
  );
}
