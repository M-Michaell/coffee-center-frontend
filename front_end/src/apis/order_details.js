import axios from 'axios';

export const OrderDetailsApi = (orderID) => {
  return axios.create({
    baseURL: `http://127.0.0.1:8000/order/orders/${orderID}/`,
    withCredentials: true,
  });
};



export const UserOrdersApi = (userID,startDate,endDate) => {
  
  return axios.create({
    baseURL: `http://127.0.0.1:8000/order/user/orders/${userID}/`,
    withCredentials: true,
    params: {
      startDate: startDate,
      endDate: endDate,
    },
  });
};
