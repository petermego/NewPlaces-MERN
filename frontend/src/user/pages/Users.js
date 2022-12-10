import React from 'react';

import UsersList from '../components/UsersList';

const Users = () => {
  const USERS = [
    {
      id: 'u1',
      name: 'Peter Maged',
      image:
        'https://scontent.fcai1-2.fna.fbcdn.net/v/t39.30808-6/254972568_3001730393427824_634815383121216689_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeE5dCB1arIri70LF9awb-ADbzOdV9Z6Rt9vM51X1npG3_XhiHqhJ78zlzcnhVc7Df9pqDJAZ63aKGIj8xy3TGCm&_nc_ohc=IB8-dGjPp3AAX_gkncQ&tn=3i-0xTBT-Ndu2pmm&_nc_ht=scontent.fcai1-2.fna&oh=00_AfBMxvOAa4qew10JlukLGpqWWNAAlS9xI2cLZParppE-ew&oe=639A0C44',
      places: 3
    }
  ];

  return <UsersList items={USERS} />;
};

export default Users;
