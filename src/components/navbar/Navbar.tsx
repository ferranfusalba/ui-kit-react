import { Link } from "@tanstack/react-router";
import { StyledNavbar } from "./Navbar.styles";

const Navbar = () => {
  return (
    <StyledNavbar>
      <Link to="/" className="[&.active]:font-bold">
        Home
      </Link>
      <Link to="/about" className="[&.active]:font-bold">
        About
      </Link>
      <Link to="/button" className="[&.active]:font-bold">
        Button
      </Link>
      <Link to="/dropdown" className="[&.active]:font-bold">
        Dropdown
      </Link>
      <p>{import.meta.env.MODE}</p>
    </StyledNavbar>
  );
};
export default Navbar;
