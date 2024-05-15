import '../navbar/navbar.css'

const Navbar = (props) => {
  return (
    <nav className="navbar">
      <div className="logo">
        <a href={props.HomeLocation}><img src="/imgs/whiteStill.png" alt="logo"/></a>
      </div>
      <div className="nav-links">
        <a href={props.AboutLocation}>About</a>
      </div>
    </nav>
  );
};

export default Navbar;
