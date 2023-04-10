import React from "react";
import classes from "./Navbar.module.css";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className={classes.nav}>
      <Link href="/" className={classes.brand}>
        HackBreeze
      </Link>
      <div className={classes.navigation_menu}>
        <ul>
          <li className={classes.nav_item}>
            <a href="#" className={classes.nav_link}>
              Events
            </a>
          </li>
          <li className={classes.nav_item}>
            <a href="#" className={classes.nav_link}>
              Compete
            </a>
          </li>
          <li className={classes.nav_item}>
            <a href="#" className={classes.nav_link}>
              Friends
            </a>
          </li>
          <div className={classes.vl}>
            <li className={classes.nav_item}>
              <a href="#" className={classes.nav_link1}>
                Contact us
              </a>
            </li>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
