import React, { useState, useEffect } from 'react';
import './First.css';
import axios from 'axios';

function First() {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({ name: '', email: '' });

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function handleSave(event) {
    event.preventDefault();
    if (newUser.name && newUser.email) {
      const updatedUsers = [...users, { id: users.length + 1, ...newUser }];
      setUsers(updatedUsers);
      setNewUser({ name: '', email: '' });
    }
  }

  function handleInputChange(event) {
    const { name, value } = event.target;
    setNewUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  }

  return (
    <div>
      <h1>Foydalanuvchilar ro'yxati</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>

      <form className="form container">
        <label className="name-label">Ism</label>
        <input
          type="text"
          name="name"
          placeholder="Enter name"
          value={newUser.name}
          onChange={handleInputChange}
        />
        <label>Email</label>
        <input
          type="text"
          name="email"
          placeholder="Enter email"
          value={newUser.email}
          onChange={handleInputChange}
        />
        <button onClick={handleSave} className="btn">
          Qoshish
        </button>
      </form>
    </div>
  );
}

export default First;
