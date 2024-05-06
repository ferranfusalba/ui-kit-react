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
      <Link to="/dropdown-positions" className="[&.active]:font-bold">
        Dropdown (positions)
      </Link>
      <Link to="/dropdown-single-option" className="[&.active]:font-bold">
        Dropdown Single Option
      </Link>
      <Link to="/dropdown-select-option" className="[&.active]:font-bold">
        Dropdown Select Option
      </Link>
      <p>{import.meta.env.MODE}</p>
    </StyledNavbar>
  );
};
export default Navbar;
