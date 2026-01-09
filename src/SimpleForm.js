import React, { useState } from "react";

function SimpleForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div style={{ marginTop: "40px" }}>
      <h2>Simple Form</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div style={{ marginTop: "10px" }}>
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <button style={{ marginTop: "10px" }} type="submit">
          Submit
        </button>
      </form>

      {submitted && (
        <div style={{ marginTop: "20px" }}>
          <p><b>Name:</b> {name}</p>
          <p><b>Email:</b> {email}</p>
        </div>
      )}
    </div>
  );
}

export default SimpleForm;
