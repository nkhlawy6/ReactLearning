import { Link } from "react-router";
const Header = () => {
  const headerStyle = {
    whidth: "100%",
    padding: "10px",
    backgroundColor: "gray",
    height: "100px",
    borderRadius: "5px 5px 0 0",
  };
  const ulStyle = {
    listStyle: "none",
    display:'flex',
    justifyContent:'center',
    padding:'10px',
   

  };
  const liStyle={
    color:'white',
     margin:'10px',
     border:'1px solid white',
     padding:'5px'
     ,
     borderRadius:'3px',
     textAlign:'center',
     boxShadow:'1px 1px 3px 1px white'
  }
  return (
    <div style={headerStyle}>
      <ul style={ulStyle}>
        <Link to="/">
          <li style={liStyle}>Loan Form</li>
        </Link>
        <Link to="personData">
          <li style={liStyle}>Person Data</li>
        </Link>
        <Link to="listNames">
          <li style={liStyle}>List Names</li>
        </Link>
      </ul>
    </div>
  );
};

export default Header;
