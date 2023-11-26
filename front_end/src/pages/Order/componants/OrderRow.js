import { useNavigate } from "react-router-dom";

export default function OrderRow({ count, product, quantity,price,discount}) {
  const priceWithDiscount = parseInt(price-price*discount/100)
  const totalPriceWithDiscount = priceWithDiscount*quantity

  const navigate = useNavigate()
  const handelProductDetails = function(event){
    navigate(`/product/details/${event.target.id}`);

  }
  return (
    <tr className="justify-content-center">
      <th scope="row" className="orange fs-5">{parseInt(count)+1}</th>
      <td>
        <a href={product.image} target="_blank">
          <img src={product.image} height={50} alt="" />
        </a>
      </td>
      <td><a onClick={handelProductDetails} id={product.id}>{product.name}</a></td>
      <td>{quantity}</td>
      <td><span className="px-2 text-decoration-line-through text-secondary">{price}</span>{priceWithDiscount}</td>
      <td><span className="px-2 text-decoration-line-through text-secondary">{price*quantity}</span>{totalPriceWithDiscount}</td>
      
    </tr>
  );
}
