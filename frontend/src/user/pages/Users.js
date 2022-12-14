import React from 'react';

import UsersList from '../components/UsersList';

const Users = () => {
  const USERS = [
    {
      id: 'u1',
      name: 'Peter Bakhoum',
      image:
        'https://scontent.fcai1-2.fna.fbcdn.net/v/t39.30808-1/254972568_3001730393427824_634815383121216689_n.jpg?stp=dst-jpg_p240x240&_nc_cat=104&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeE5dCB1arIri70LF9awb-ADbzOdV9Z6Rt9vM51X1npG3_XhiHqhJ78zlzcnhVc7Df9pqDJAZ63aKGIj8xy3TGCm&_nc_ohc=6ULijWWSrTcAX9tNH2T&tn=3i-0xTBT-Ndu2pmm&_nc_ht=scontent.fcai1-2.fna&oh=00_AfB9KM93hlA_uW0-N3du-xF4HvkQfiLY97suh7fvs_8eIA&oe=639D83C6',
      places: 3
    }
  ];

  return <UsersList items={USERS} />;
};

export default Users;
