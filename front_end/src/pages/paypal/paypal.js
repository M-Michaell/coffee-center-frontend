import { PayPalButtons } from "@paypal/react-paypal-js"
import { useState } from "react"
import { axiosInstance } from "../../apis/config";

const Checkout = ({order}) => {
    const [paid,setPaid] = useState(order.payment_method.status);

    const OrderPaid = (order_id) => {
        axiosInstance.post(`/order/paid/`, {'order_id':order_id})
          .then((response) => {
            console.log('success paid',response.data)
            window.location.reload()
          })
          .catch((error) => {
            console.error("API Error:", error);
    
          });
      }

    console.log('order: ',order)
    const product = {
        description: "Some Thing",
        price: order.payment_method.amount,
    }

    const [error,setError] = useState(false);
    const handleApprove = (orderId) => {
        console.log('handleApprove',order.id)
        alert(order.id)

        console.log('order id from paypal',orderId)
        OrderPaid(order.id)


        // if response is error 
        // setError 

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
                console.log('order', order);
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