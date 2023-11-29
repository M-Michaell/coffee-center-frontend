import React, {useEffect, useState} from 'react';
import {useUserDataSpecific, useAddressDataSpecific} from '../../../apis/profile';
import {axiosInstance} from '../../../apis/config';
import AddressesComponent from '../../../pages/Profile/component/Addresses';
import {useParams} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCircleUser, faAddressBook} from '@fortawesome/free-regular-svg-icons';
import OrderProducts from '../../../pages/Order/componants/OrderProducts';
import TotalPrice from '../../../pages/Order/componants/TotalPrice';
import TrackOrder from '../../../pages/Order/componants/TrackOrder';
import OrderRow from '../../../pages/Order/componants/OrderRow';
import axios from "axios";
import {getOrderDetail, OrderDetailsApi} from "../../../apis/order_details";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";

const UserDetailsComponent = () => {
    const {id} = useParams();
    const [addressData, setAddressData] = useState(); // Define setAddressData here
    const {refetchAddresses} = useAddressDataSpecific(id); // Remove redundant declaration
    const [userDetails, setUserDetails] = useState(null);
    const [userOrders, setUserOrders] = useState([]);
    const orderDetailsInstance = getOrderDetail(id);

    const fetchData = async () => {
        if (!id) {
            return;
        }

        try {
            // Fetch user details
            const userDetailsResponse = await axiosInstance.get(`/accounts/api/${id}`);
            setUserDetails(userDetailsResponse.data.User);
            console.log('User details:', userDetailsResponse.data.User);

            // Fetch user addresses
            const addressDataResponse = await axiosInstance.get(`/accounts/api/address/${id}`
            );
            setAddressData(addressDataResponse.data.Users);
            console.log('User addresses:', addressDataResponse.data.Users);

            // Fetch user orders
            const userOrdersResponse = await orderDetailsInstance.get();
            setUserOrders(userOrdersResponse.data);
            console.log('User orders:', userOrdersResponse.data);

            refetchAddresses();
        } catch (error) {
            console.error('Error fetching data:', error.message, error.response);
        }
    };

    useEffect(() => {
        fetchData();
    }, [id]); // Include id in the dependency array

    if (!userDetails || !addressData) {
        return <p>Loading...</p>;
    }

    const {username, email, phone, first_name, last_name} = userDetails;

    return (
        <div>
            <div className='card w-100 bg-transparent text-start my-5 ps-5 '>
                <h2 className='text-light card-title'><FontAwesomeIcon icon={faCircleUser} style={{
                    color: "var(--orange)",
                    marginRight: "3px"
                }}/> User Details</h2>
                <div className='card-body text-light fs-5'>
                    <p>
                        <strong style={{color: "var(--orange)"}}>Username:</strong> {username}
                    </p>
                    <p>
                        <strong style={{color: "var(--orange)"}}>First name:</strong> {first_name}
                    </p>
                    <p>
                        <strong style={{color: "var(--orange)"}}>Last name:</strong> {last_name}
                    </p>
                    <p>
                        <strong style={{color: "var(--orange)"}}>Email:</strong> {email}
                    </p>
                    <p>
                        <strong style={{color: "var(--orange)"}}>Phone:</strong> {phone}
                    </p>
                </div>
            </div>

            <hr className='fs-4' style={{color: "var(--orange)"}}/>
            <div className='card w-100 bg-transparent text-start my-5 ps-5 '>
                <h2 className='text-light card-title'>
                    <FontAwesomeIcon icon={faAddressBook}
                                     style={{color: 'var(--orange)', marginRight: '3px'}}/> Addresses
                </h2>
                <div className='card-body text-light fs-5'>
                    {addressData.length > 0 ? (
                        addressData.map((address, index) => (
                            <div key={address.id}>
                                {/* Render address details */}
                                <p>
                                    <span style={{color: 'var(--orange)'}}>{index + 1}.</span>
                                    {` ${address.address_line1}, ${address.city}, ${address.postal_code}`}
                                </p>
                            </div>
                        ))
                    ) : (
                        <p>No addresses saved.</p>
                    )}
                </div>
            </div>

            <hr/>

            {
                userOrders.length > 0 ?
                    userOrders.map((order) => (
                        <div key={order.id} className="p-5 m-5" style={{border: '1px orange solid'}}>
                            <div className="mt-5">
                                {/* ... (previous code) */}
                                <h5 className='text-light text-start mb-3'>Order ID: {order.id}</h5>
                                {/* Replacing OrderProducts component structure */}
                                <div>
                                    <div>
                                        <table className="table table-striped table-dark">
                                            <thead>
                                            <tr>
                                                <th scope="col" className="orange fs-5" style={{width: '10px'}}>
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
                                            {Object.entries(order.order_items).map(([key, value]) => (
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
                                <div className='card bg-transparent w-100 text-start m-5'>
                                    <h5 className='text-light'>Order summary</h5>
                                    <hr className='text-light w-50'/>
                                    {/* Render other order details as needed */}
                                    <div className='card-body text-light'>
                                        <p><span style={{color: 'var(--orange)'}}>Created At: </span>{order.created_at}
                                        </p>
                                        <p><span
                                            style={{color: 'var(--orange)'}}>Paid: </span>{order.payment_method['provider']}
                                        </p>


                                    </div>
                                </div>
                                {/* Render other order details as needed */}
                                {order.payment_method && order.payment_method.amount && (
                                    <TotalPrice
                                        price={order.payment_method.amount}
                                        address={order.payment_method.address_to_send}
                                        phone={order.payment_method.address_phone}
                                        price_before={order.payment_method.total_price}
                                    />
                                )}
                            </div>
                        </div>
                    ))
                    :
                    <>
                        <RemoveShoppingCartIcon sx={{fontSize: 200}} className="my-5"/>
                        <div className="d-flex flex-column mt-5">
                            <h2>Orders List is Feeling a Bit Lonely</h2>
                        </div>
                    </>

            }
        </div>
    );

};

export default UserDetailsComponent;