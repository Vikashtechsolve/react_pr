const Abouts = () => {
  const containerStyle = {
    padding: "40px 20px",
    backgroundColor: "#e2e8f0", // soft slate-gray background
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
    textAlign: "left",
  };

  const headingStyle = {
    fontSize: "28px",
    color: "#1e293b", // dark slate
    marginBottom: "15px",
  };

  const paragraphStyle = {
    fontSize: "16px",
    color: "#475569", // muted gray
    lineHeight: "1.6",
  };

  return (
    <div style={containerStyle}>
      <div style={contentStyle}>
        <h2 style={headingStyle}>About Us</h2>
        <p style={paragraphStyle}>
          Welcome to our About page! We are committed to delivering high-quality experiences through clean code and thoughtful design. 
          Our goal is to make the web a better, more usable space for everyone.
        </p>
        <p style={paragraphStyle}>
          This section can include your mission, vision, team intro, or anything that gives users insight into who you are.
        </p>
      </div>
    </div>
  );
};

export default Abouts;
