import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { StyledNavbar } from "./Navbar.styles";
import ChevronLeft from "../../assets/icons/chevron--left.svg";
import ChevronRight from "../../assets/icons/chevron--right.svg";

const Navbar = () => {
  const [expanded, setExpanded] = useState(true);

  return (
    <StyledNavbar className={expanded ? "expanded" : ""}>
      <div>
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
        <Link to="/modal" className="[&.active]:font-bold">
          Modal
        </Link>
        <p>{import.meta.env.MODE}</p>
      </div>

      <div>
        <button onClick={() => setExpanded(!expanded)}>
          <img src={expanded ? ChevronLeft : ChevronRight} alt="" />
        </button>
      </div>
    </StyledNavbar>
  );
};
export default Navbar;
