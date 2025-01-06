import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateUser=()=>{
  const[name, setName]=useState('');
  const[email,setEmail]=useState('');
  const[address,setAddress]=useState('');
  const navigate = useNavigate();

  const submit = (e)=>{
      e.preventDefault();
      axios.post('https://backenddemomern-u9uu.onrender.com/api/user/create', {name,email,address})
      .then(result=>{
          console.log(result.data);
          navigate('/');
      })
      .catch(err=>{console.log(err)})
  }
  
  

  return(
      <div>
        <center>
        <h1>CREATE USER</h1>
          <form onSubmit={submit}>
              <label>Name : </label>
              <input type='text' onChange={(e)=>setName(e.target.value)}></input>
              <br></br><br />
              <label>Email : </label>
              <input type='email' onChange={(e)=>setEmail(e.target.value)}></input><br></br><br />
              <label>Address : </label>
              <input type='text' onChange={(e)=>setAddress(e.target.value)}></input><br></br><br />
              <button type='submit'>Create</button>
          </form>
        </center>
          
      </div>
  )
}
export default CreateUser;