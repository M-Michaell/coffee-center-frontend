import React from 'react';
import { Link } from 'react-router-dom';
import { useUserData } from '../../../apis/profile';

const UsersComponent = () => {
  const { detailsData } = useUserData();
  const users = detailsData?.Users || [];

  return (
    <div>
      <h2 className='text-light'>User List</h2>
      {users.map((user) => (
        <div key={user.id} className='card w-100 mb-5 bg-transparent' style={{ boxShadow: '0 0 5px var(--orange)' }}>
          <div className='card-body text-light w-100 fs-5 text-start'>
            {/* Create a link to the UserDetailsComponent for each user */}
            {user.id && (
              <Link to={`/admin/user/${user.id}`} className="text-light">
                {user.username}
              </Link>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default UsersComponent;