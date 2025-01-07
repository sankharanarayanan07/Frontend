import { useState, useEffect } from "react"
import {useNavigate } from 'react-router-dom'
import { useParams } from "react-router-dom";
import axios from "axios";

const UpdateUser = () => {
    const {id} = useParams('');
    const[name, setName] = useState('');
    const[email, setEmail] = useState('');
    const[address,setAdderss] = useState('');
    //const[error,setError] =useState(null)
    const navigate = useNavigate();

    useEffect(()=> {
        axios.put(`https://backenddemomern-u9uu.onrender.com/api/user/update/${id}`)
        .then(result=>{

            setName(result.data.name);
            setEmail(result.data.email);
            setAdderss(result.data.address);
        })
        .catch((err)=>{console.log(err)})
    },[])

    const updateuser = (e) => {
        e.preventDefault();
        axios.put(`https://backenddemomern-u9uu.onrender.com0/api/user/update/${id}`,{name,email,address})
        .then (response=>{
            
            navigate('/');
        })
        .catch((err) => {
            console.log(err);
        });  
    }

  return (
    
    <div >
      <center>
      <form onSubmit={updateuser} >
      
      <h1 >Update User</h1>
      <label >Name:</label>
      <input type="text" value={name}onChange={(e) => setName(e.target.value)}/>
      <br /><br />
      <label >Email:</label>
      <input type="text" value={email}onChange={(e) => setEmail(e.target.value)}/>
      <br /><br />
      <label >Address:</label>
      <input type="text" value={address}onChange={(e) => setAdderss(e.target.value)}/>
      <br /><br />
      <button type="submit" >Submit</button>

    </form>
      </center>

    </div>
  );
}

export default UpdateUser;  