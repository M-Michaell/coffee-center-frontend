import axios from 'axios';

export const OrderDetailsApi = (orderID,userID='admin') => {
  return axios.create({
    baseURL: `http://127.0.0.1:8000/order/orders/${orderID}/`,
    params:{
      'userID':userID
    },
    withCredentials: true,

  });
};



export const UserOrdersApi = (userID,startDate,endDate,admin=false) => {
  
  return axios.create({
    baseURL: `http://127.0.0.1:8000/order/user/orders/${userID}/`,
    withCredentials: true,
    params: {
      startDate: startDate,
      endDate: endDate,
      admin:admin,
    },
  });
};




export const AdminSetOrderTracingApi = () => {
  const setOrderTracing = (orderID, tracingState) => {
    return axios.post('http://127.0.0.1:8000/order/tracing/', {
      orderID: orderID,
      tracingState: tracingState,
    }, {
      withCredentials: true,
    });
  };

  return { setOrderTracing };
};
