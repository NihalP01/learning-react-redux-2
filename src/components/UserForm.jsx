import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../redux/actions/userAction';

const UserForm = () => {
  const existUser = useSelector((state) => state.allUsers.users);
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [designation, setDesignation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      setUser([...existUser, { id: Date.now(), name, designation }])
    );
    setName('');
    setDesignation('');
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        marginTop: '2rem',
      }}
    >
      <div
        style={{
          width: '390px',
          padding: '1rem 2rem 1rem 2rem',
          border: '1px solid skyblue',
          borderRadius: '8px',
        }}
      >
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-2">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              required
              placeholder="Enter name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Designation</Form.Label>
            <Form.Control
              type="text"
              required
              placeholder="Designation"
              value={designation}
              onChange={(e) => setDesignation(e.target.value)}
            />
          </Form.Group>

          <Button class="btn btn-primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default UserForm;
