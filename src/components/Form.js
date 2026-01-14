import { useState } from "react";

function Form() {
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    gender: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <div className="card">
      <h3>User Details Form</h3>

      <input
        name="name"
        placeholder="Enter Name"
        value={data.name}
        onChange={handleChange}
      />

      <input
        name="email"
        placeholder="Enter Email"
        value={data.email}
        onChange={handleChange}
      />

      <input
        name="phone"
        placeholder="Enter Phone Number"
        value={data.phone}
        onChange={handleChange}
      />

      <select name="gender" value={data.gender} onChange={handleChange}>
        <option value="">Select Gender</option>
        <option>Male</option>
        <option>Female</option>
        <option>Other</option>
      </select>
    </div>
  );
}

export default Form;
