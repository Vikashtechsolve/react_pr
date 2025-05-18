const Main = () => {
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "40px 20px",
    backgroundColor: "#f1f5f9", // light gray-blue
    minHeight: "80vh",
    fontFamily: "Segoe UI, sans-serif",
  };

  const cardStyle = {
    backgroundColor: "white",
    padding: "30px",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
    width: "100%",
    maxWidth: "600px",
    textAlign: "center",
  };

  const headingStyle = {
    fontSize: "28px",
    color: "#0f172a", // dark blue-gray
    marginBottom: "20px",
  };

  const textStyle = {
    fontSize: "16px",
    color: "#334155", // slate gray
    lineHeight: "1.5",
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h2 style={headingStyle}>I am the Main Component</h2>
        <p style={textStyle}>
          This is the main content area. You can add your core application logic or data display here.
          It's styled to feel clean, modern, and user-friendly.
        </p>
      </div>
    </div>
  );
};

export default Main;
