import React, { useEffect, useState } from 'react';
import { useUserDataSpecific, useAddressDataSpecific } from '../../../apis/profile';
import { axiosInstance } from '../../../apis/config';
import AddressesComponent from '../../../pages/Profile/component/Addresses';
import { useParams } from 'react-router-dom';

const UserDetailsComponent = () => {
  const { id } = useParams();
  const [addressData, setAddressData] = useState(); // Define setAddressData here
  const { refetchAddresses } = useAddressDataSpecific(id); // Remove redundant declaration
  const [userDetails, setUserDetails] = useState(null);

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
      const addressDataResponse = await axiosInstance.get(`/accounts/api/address/${id}`);
      setAddressData(addressDataResponse.data.Users);
      console.log('User addresses:', addressDataResponse.data.Users);
  
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
  
  const { username, email, phone } = userDetails;
  
  return (
    <div>
      <h2>User Details</h2>
      <p>
        <strong>Username:</strong> {username}
      </p>
      <p>
        <strong>Email:</strong> {email}
      </p>
      <p>
        <strong>Phone:</strong> {phone}
      </p>
  
      <hr />
  
      <h2>Addresses</h2>
      {addressData.map((address) => (
        <div key={address.id}>
          {/* Render address details */}
          <p>{address.address_line1}, {address.city}, {address.postal_code}</p>
        </div>
      ))}
  
      <button onClick={() => fetchData()}>Refetch Data</button>
  
      <hr />
  
      {/* ... rest of the component ... */}
    </div>
  );
  
};

export default UserDetailsComponent;
