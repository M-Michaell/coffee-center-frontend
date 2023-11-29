import { PayPalButtons } from "@paypal/react-paypal-js"
import { useState } from "react"
import { axiosInstance } from "../../apis/config";

const Checkout = ({order}) => {
    const [paid,setPaid] = useState(order.payment_method.status);

    const OrderPaid = (order_id) => {
        axiosInstance.post(`/order/paid/`, {'order_id':order_id})
          .then((response) => {
            window.location.reload()
          })
          .catch((error) => {
            console.error("API Error:", error);
    
          });
      }

    const product = {
        description: "Some Thing",
        price: order.payment_method.amount,
    }

    const [error,setError] = useState(false);
    const handleApprove = (orderId) => {

        OrderPaid(order.id)


    };


    if (error){
        alert(error)
    }

    return(
        <div className="m-4">
            <PayPalButtons style={{ 
                shape: "pill",
                disableMaxWidth: true,
            }} 
            onClick={(data,actions) => {
                const someError = false;

                if (someError){
                    setError('some error happened');
                    return actions.reject()
                }
                else{
                    return actions.resolve()
                }
            }}
            createOrder={(data,actions) => {
                return actions.order.create({
                    purchase_units: [
                        {
                            description: product.description,
                            amount: {
                                value: product.price
                            }
                        }
                    ]
                })
            }}

            onApprove={async (data,actions) => {
                const order = await actions.order.capture();
                handleApprove(data.orderID)
            }}

            onError={(err) => {
                console.log(err)
            }}

            onCancel={()=>{
                
            }}
            />
        </div>

    )
}

export default Checkout