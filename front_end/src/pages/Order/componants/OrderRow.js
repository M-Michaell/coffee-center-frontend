export default function OrderRow({ count, product, quantity}) {
  return (
    <tr className="justify-content-center">
      <th scope="row">{parseInt(count)+1}</th>
      <td>{product.name}</td>
      <td>{product.desc}</td>
      <td>{quantity}</td>
      <td>{product.price}</td>
      <td>{product.discount_percentage}</td>
      <td><img src={product.image} width={30} alt="" /></td>
    </tr>
  );
}
