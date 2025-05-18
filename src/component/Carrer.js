const Carrer = () => {
  const containerStyle = {
    padding: "40px 20px",
    backgroundColor: "#f8fafc", // very light gray
    minHeight: "80vh",
    fontFamily: "Arial, sans-serif",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const contentStyle = {
    backgroundColor: "white",
    padding: "30px",
    borderRadius: "12px",
    boxShadow: "0 6px 18px rgba(0, 0, 0, 0.1)",
    maxWidth: "700px",
    width: "100%",
  };

  const headingStyle = {
    fontSize: "28px",
    color: "#1e293b", // dark slate
    marginBottom: "20px",
  };

  const jobStyle = {
    backgroundColor: "#e2e8f0",
    padding: "15px",
    borderRadius: "8px",
    marginBottom: "15px",
    color: "#334155",
  };

  return (
    <div style={containerStyle}>
      <div style={contentStyle}>
        <h2 style={headingStyle}>Career Opportunities</h2>

        <div style={jobStyle}>
          <h4>Frontend Developer</h4>
          <p>Looking for someone with experience in React, Tailwind CSS, and UX design.</p>
        </div>

        <div style={jobStyle}>
          <h4>Backend Developer</h4>
          <p>Experience with Node.js, Express, and databases like MongoDB or PostgreSQL.</p>
        </div>

        <div style={jobStyle}>
          <h4>UI/UX Designer</h4>
          <p>Creative designer needed to create engaging user experiences across platforms.</p>
        </div>
      </div>
    </div>
  );
};

export default Carrer;
