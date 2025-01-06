import React from "react";

const UpdateUser = () => {  
    return <div>
        <h1>Update user</h1>
    <form>
      <label>Name :</label>
      <input type="text" />
      <br />
      <label>Email :</label>
      <input type="email" />
      <br />
      <label>Address :</label>
      <input type="text" />
      <br />
      <button>Submit</button>
    </form>
    </div>;
}   
export default UpdateUser;