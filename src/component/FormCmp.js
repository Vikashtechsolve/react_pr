const FormCmp = () => {
  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "80vh",
    backgroundColor: "#f1f5f9", // light slate background
    fontFamily: "Arial, sans-serif",
  };

  const formStyle = {
    backgroundColor: "white",
    padding: "30px",
    borderRadius: "12px",
    boxShadow: "0 6px 18px rgba(0, 0, 0, 0.1)",
    width: "100%",
    maxWidth: "500px",
  };

  const headingStyle = {
    fontSize: "24px",
    color: "#1e293b",
    marginBottom: "20px",
    textAlign: "center",
  };

  const labelStyle = {
    display: "block",
    marginBottom: "6px",
    fontWeight: "bold",
    color: "#334155",
  };

  const inputStyle = {
    width: "100%",
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid #cbd5e1",
    marginBottom: "15px",
    fontSize: "14px",
  };

  const buttonStyle = {
    width: "100%",
    padding: "10px",
    borderRadius: "8px",
    backgroundColor: "#3b82f6", // blue
    color: "white",
    fontSize: "16px",
    fontWeight: "bold",
    border: "none",
    cursor: "pointer",
  };

  return (
    <div style={containerStyle}>
      <form style={formStyle}>
        <h2 style={headingStyle}>Contact Form</h2>

        <label style={labelStyle} htmlFor="name">Name</label>
        <input style={inputStyle} type="text" id="name" placeholder="Enter your name" />

        <label style={labelStyle} htmlFor="email">Email</label>
        <input style={inputStyle} type="email" id="email" placeholder="Enter your email" />

        <label style={labelStyle} htmlFor="message">Message</label>
        <textarea
          style={{ ...inputStyle, height: "100px", resize: "none" }}
          id="message"
          placeholder="Your message"
        />

        <button style={buttonStyle} type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormCmp;
