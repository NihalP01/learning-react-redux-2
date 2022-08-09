import React from 'react';
import { useSelector } from 'react-redux';

const UserList = () => {
  const results = useSelector((state) => state.allUsers.users);

  const renderUsers = results.map((res) => {
    const { id, name, designation } = res;
    return (
      <div
        style={{
          width: '300px',
          padding: '6px',
          border: '1px solid grey',
          borderRadius: '6px',
          margin: '2px',
        }}
      >
        <div
          key={id}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
          }}
        >
          <div>
            Name: <b>{name}</b>
          </div>
          <div>Designation: {designation}</div>
        </div>
      </div>
    );
  });

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      {renderUsers}
    </div>
  );
};

export default UserList;
