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
          <div className={classes.nav_item}>
            <Link href="/events" className={classes.nav_link}>
              Events
            </Link>
          </div>

          <li className={classes.nav_item}>
            <Link href="/eventdata/eventdata" className={classes.nav_link}>
              Event_1
            </Link>
          </li>
          <li className={classes.nav_item}>
            <Link href="/team" className={classes.nav_link}>
              Team_1
            </Link>
          </li>
          <div className={classes.vl}>
            <li className={classes.nav_item}>
              <Link href="/about" className={classes.nav_link1}>
                Contact us
              </Link>
            </li>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
