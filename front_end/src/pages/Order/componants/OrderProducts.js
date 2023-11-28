import OrderRow from "./OrderRow";
import TotalPrice from "./TotalPrice";

export default function OrderProducts({ order_items }) {
  return (
    <div>
      <div>
        <table className="table table-striped table-dark">
          <thead>
            <tr>
              <th scope="col" className="orange fs-5" style={{ width: "10px" }}>
                #
              </th>
              <th scope="col" className="orange fs-5">
                image
              </th>
              <th scope="col" className="orange fs-5">
                Name
              </th>
              <th scope="col" className="orange fs-5">
                Quantity
              </th>
              <th scope="col" className="orange fs-5">
                Unit Price
              </th>
              <th scope="col" className="orange fs-5">
                Total Price
              </th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(order_items).map(([key, value]) => (
              <OrderRow
                key={value.product_details.id}
                count={key}
                product={value.product_details}
                quantity={value.quantity}
                price={value.productStaticPrice}
                discount={value.productStaticDiscount}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
