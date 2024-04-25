import '../navbar/navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="https://via.placeholder.com/100" alt="logo" />
      </div>
      <div className="nav-links">
        <a href="#about">About</a>
      </div>
    </nav>
  );
};

export default Navbar;
