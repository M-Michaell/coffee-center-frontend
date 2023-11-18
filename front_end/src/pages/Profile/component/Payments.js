import React from 'react';
import { usePaymentData } from '../../../apis/profile';
import image from "../../../assets/images/saved-cards.svg";
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap styles
import { useNavigate } from 'react-router-dom';

export default function AddressesComponent() {
  const { paymentData } = usePaymentData();
  const navigate = useNavigate();

  const handlePaymentClick = () => {
    navigate('/addressform');
  }

  return (
    <div className="container" style={{ height: "90%" }}>
      {paymentData && paymentData.length === 0 ? (
        <>
        
        <div
            className="bg-image d-flex justify-content-end flex-column"
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: 'contain', // Use 'contain' to minimize the image
              backgroundPosition: 'center',
              height: '100%',
            }}
          >
          </div>
            <h3 className='fw-bold text-light'>
              <span style={{ bottom: "0" }}>No saved cards</span>
            </h3>
        </>

      ) : (
        <div className="welcome-address">Welcome payment</div>
      )}
<button type="button" className='btn btn-primary fw-bold m-3  d-inline-block' onClick={handlePaymentClick}>ADD a payment method</button>
    </div>
  );
}
