import { useEffect, useState } from "react";
import { axiosInstance } from "./config";

export function useUserData() {
  const [detailsData, setDetailsData] = useState();

  useEffect(() => {
    axiosInstance
      .get(`/accounts/api/`)
      .then((res) => {
        setDetailsData(res.data);
        
      })
      .catch((err) => console.log(err));
  }, []);

  return { detailsData };
}

export const useAddressData = (userId) => {
  const [addressData, setAddressData] = useState();

  const fetchData = async () => {
    try {
      const response = await axiosInstance.get(`/accounts/api/address/${userId}`);
      setAddressData(response.data.Users);
    } catch (error) {
      console.error('Error fetching address data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [userId]); // Now, the effect will run whenever userId changes

  const refetchAddresses = () => {
    fetchData();
  };

  return { addressData, refetchAddresses };
};

export const deleteAddress = async (userId, addressId) => {
  try {
    const response = await axiosInstance.delete(`/accounts/api/address/${userId}/${addressId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};


export function usePaymentData() {
  const [paymentData, setPaymentData] = useState();

  useEffect(() => {
    axiosInstance
      .get(`/accounts/api/payment`)
      .then((res) => {
        setPaymentData(res.data.Users);
       
      })
      .catch((err) => console.log(err));
  }, []); // Provide an empty dependency array to run the effect only once

  return { paymentData };
}




// export const deleteAddress = async (id) => {
//   try {
//     const response = await axiosInstance.delete(`/accounts/api/address/${id}`);
//     return response.data;
//   } catch (error) {
//     throw error;
//   }
// };



// specified hooks

export const useUserDataSpecific = (id) => {
  const [detailsData, setDetailsData] = useState();

  useEffect(() => {
    if (id) {
      axiosInstance
        .get(`/accounts/api/${id}`)
        .then((res) => {
          setDetailsData(res.data.User);
        })
        .catch((err) => console.log(err));
    }
  }, [id]);

  return { detailsData };
};

export const useAddressDataSpecific = (userId) => {
  const [addressData, setAddressData] = useState();

  const fetchData = async () => {
    try {
      const response = await axiosInstance.get(`/accounts/api/address/${userId}`);
      setAddressData(response.data.Users); // Update this line
    } catch (error) {
      console.error('Error fetching address data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [userId]);

  const refetchAddresses = () => {
    fetchData();
  };

  return { addressData, refetchAddresses };
};