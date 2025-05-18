import { Link } from "react-router";

const Header = () => {
  const headerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#1e293b", // dark slate blue
    padding: "10px 20px",
    color: "white",
    fontFamily: "Arial, sans-serif",
  };

  const navStyle = {
    display: "flex",
    gap: "20px",
  };

  const linkStyle = {
    color: "white",
    textDecoration: "none",
    fontSize: "16px",
    fontWeight: "bold",
    transition: "color 0.3s",
  };

  const linkHoverStyle = {
    color: "#38bdf8", // light blue
  };

  return (
    <div style={headerStyle}>
      <h2 style={{ margin: 0 }}>My Website</h2>
      <nav >
       <Link to="/">Home</Link> 
        <Link to="/about">About</Link>       
       <Link to="/career">Career</Link>       
       <Link to="/form">Contact</Link>       
      </nav>
    </div>
  );
};

export default Header;
