export default function OrderRow({ count, product, quantity}) {
  return (
    <tr className="justify-content-center">
      <th scope="row" className="orange fs-5">{parseInt(count)+1}</th>
      <td>
        <a href={product.image} target="_blank">
          <img src={product.image} height={50} alt="" />
        </a>
      </td>
      <td>{product.name}</td>
      <td>{quantity}</td>
      <td>{product.price}</td>
      <td>{product.price*quantity}</td>
      
    </tr>
  );
}
