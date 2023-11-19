import { PayPalButtons } from "@paypal/react-paypal-js"
import { useState } from "react"

const Checkout = ({order}) => {
    console.log('order: ',order)
    const product = {
        description: "Some Thing",
        price: order.payment_method.amount,
    }

    const [paidFor, setPaidFor] = useState(false);
    const [error,setError] = useState(false);
    const handleApprove = (orderId) => {
        console.log('handleApprove',order.id)
        setPaidFor(true);

        // if response is error 
        // setError 

    };

    if(paidFor){
        //display success and redirect to success page
        alert(order.id)
    }

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