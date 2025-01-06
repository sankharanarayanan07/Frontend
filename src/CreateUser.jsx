import React from "react";

const CreateUser = () => {
  return <div>
    <h1>Create User</h1>
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
};
export default CreateUser;