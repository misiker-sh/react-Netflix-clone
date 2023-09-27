import React, { useEffect, useState } from "react";
import "./Nav.css";
function Nav()  {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll",null);
    };
  }, []);

  return (
    <div className={`nav ${show && "nav__black"} `}>
      <img
        className="nav__logo"
        src="https://raw.githubusercontent.com/sidmulajkar/netflix-clone-using-react/873679348373a5668113f1021a0fca296eca5af6/src/logo.svg"
        alt=""
      />
      <img
        className="nav__avatar"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt=""
      />
    </div>
  );
};

export default Nav;
