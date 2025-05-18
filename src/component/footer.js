const Footer = () => {
  const footerStyle = {
    backgroundColor: "#1e293b", // dark slate
    color: "#ffffff",
    textAlign: "center",
    padding: "20px 10px",
    fontFamily: "Arial, sans-serif",
    fontSize: "14px",
    marginTop: "auto",
  };

  const linkContainerStyle = {
    marginTop: "10px",
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    flexWrap: "wrap",
  };

  const linkStyle = {
    color: "#94a3b8", // light gray
    textDecoration: "none",
    fontWeight: "500",
  };

  const hoverStyle = {
    color: "#38bdf8", // light blue
  };

  return (
    <footer style={footerStyle}>
      <div>© {new Date().getFullYear()} My Company. All rights reserved.</div>
      <div style={linkContainerStyle}>
        {["Privacy Policy", "Terms of Service", "Contact"].map((item, index) => (
          <a
            key={index}
            href="#"
            style={linkStyle}
            onMouseOver={(e) => (e.target.style.color = hoverStyle.color)}
            onMouseOut={(e) => (e.target.style.color = linkStyle.color)}
          >
            {item}
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
