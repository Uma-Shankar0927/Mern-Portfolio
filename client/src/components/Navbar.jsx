import React, { useState } from "react";
import { Link } from "react-router-dom";
import Menu from "./Menu";
import { motion, easeIn, easeInOut } from "framer-motion";

const Navbar = () => {
  const [textmenu, setTextmenu] = useState("menu");
  const [clicked, setClicked] = useState(false);

  const togglemenu = () => {
    if (textmenu === "menu") setTextmenu("close");
    else setTextmenu("menu");
    setClicked(!clicked);
  };
  return (
    <>
      <Menu
        clicked={clicked}
        setClicked={setClicked}
        setTextmenu={setTextmenu}
      />
      <div className="nav-main">
        <motion.div
          className="logo"
          initial={{ opacity: 0 ,scale:0}}
          animate={{ opacity: 1 ,scale:1}}
          transition={{
            duration: 0.4,
            delay: 0.1,
            ease: easeInOut,
          }}
        >
          <Link to="/">Uma</Link>
        </motion.div>
        <div className="menu">
          <motion.div
            className="menu-btn"
            onClick={togglemenu}
            initial={{ opacity: 0 ,scale:0}}
            animate={{ opacity: 1 ,scale:1}}
            transition={{
              duration: 0.4,
              delay: 0.1,
              ease: easeInOut,
            }}
          >
            {textmenu}
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
