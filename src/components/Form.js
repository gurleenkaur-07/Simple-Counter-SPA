function Form() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted successfully!");
  };

  return (
    <div className="card">
      <h2>User Details Form</h2>

      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter Name" required />
        <input type="email" placeholder="Enter Email" required />
        <input type="tel" placeholder="Enter Phone Number" required />

        <select required>
          <option value="">Select Gender</option>
          <option>Male</option>
          <option>Female</option>
          <option>Other</option>
        </select>

        {/* SUBMIT BUTTON */}
        <div className="btn-group" style={{ marginTop: "15px" }}>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Form;
