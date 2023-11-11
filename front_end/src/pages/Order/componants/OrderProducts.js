import OrderRow from "./OrderRow";
import TotalPrice from "./TotalPrice";

export default function OrderProducts({order_items}) {
  

  return (
    <div>
        <div>

          <table className="table table-striped table-dark">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Description</th>
                <th scope="col">Quantity</th>
                <th scope="col">Price</th>
                <th scope="col">Discount</th>
                <th scope="col">image</th>
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
          <TotalPrice price={1000} />
        </div>

    </div>
  );
}
