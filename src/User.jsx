import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
// import './app.css'

const User = () => 
{
  const [user, setUser] = useState([]);

  useEffect(() => {
    axios.get("https://backenddemomern-u9uu.onrender.com/api/User/fetch")
      .then(result => {
        // console.log(result.data);
        setUser(result.data.users);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const deleteUser=(id)=>{
      axios.delete(`https://backenddemomern-u9uu.onrender.com/api/user/delete/${id}`)
      .then(result=>{
          console.log(result)
      })
      .catch(err=>{console.log(err)})
  }

  

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
              user.map((users) => (
                <tr key={users.id}>
                  <td>{users.name}</td>
                  <td>{users.email}</td>
                  <td>{users.address}</td>
                  <td>
                    <Link to={`/update/${users._id}`}><button>Update</button></Link>
                    <button onClick={() => deleteUser(users._id)}> Delete</button> {/* Corrected onClick */}
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
