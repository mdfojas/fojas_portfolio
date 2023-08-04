import React from "react";
import { Link } from "react-scroll";

const NavLinks = ({ link, className, title, update, nav, setNav }) => {
  const updateNav = () => {
    if(update){
      setNav(!nav)
    }
  }

  return (
    <li className={className}>
      <Link to={link} smooth duration={500} onClick={updateNav} >
        {title}
      </Link>
    </li>
  );
};

export default NavLinks;
