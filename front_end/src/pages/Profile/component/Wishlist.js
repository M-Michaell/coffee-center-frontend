import React from 'react';
import { useSelector } from 'react-redux';
import Card from '../../../general_components/Card/Card';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeartCircleXmark } from '@fortawesome/free-solid-svg-icons';

export default function WishlistComponent() {
  const wishlist = useSelector((state) => state.wishlist.products);
  
  return (
    <div className="text-light text-center">
      <h1 className="text-start fw-bold">Your Exceptional Coffees</h1>
      {wishlist.length === 0 ? (
        <div
          className="d-flex flex-column align-items-center justify-content-center"
          style={{ height: '50vh' }}
        >
          <FontAwesomeIcon
            icon={faHeartCircleXmark}
            size="7x"
            className="empty-wishlist-icon mb-4 text-danger"
            style={{ marginBottom: "20px" }}
          />
          <p className='fs-4'>
            Explore our curated selection and save your favorite coffees{' '}
            <Link to="/">here</Link>.
          </p>
          <p>
            Start building your wishlist by tapping on the heart icon next to the
            items you love.
          </p>
        </div>
      ) : (
        <div className="row row-cols-1 row-cols-md-3 g-4 d-flex justify-content-center">
{wishlist.map(product => {
  return (
    <div key={product.id} className="col-12 col-sm-6 col-md-4 p-2">
      <Card item={product} />
    </div>
  );
})}
        </div>
      )}
    </div>
  );
}
