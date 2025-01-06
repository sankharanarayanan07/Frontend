import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const User = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("https://backenddemomern-u9uu.onrender.com//api/User/fetch")
      .then(result => {
        setUsers(result.data.users);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <center>
        <h1>User</h1>
        <Link to="/create">Create User</Link>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Address</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              users.map((user, index) => (
                <tr key={index}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.address}</td>
                  <td>
                    <Link to="/update"><button>Update</button></Link>
                    <button>Delete</button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </center>
    </div>
  );
}

export default User;
