import styles from "./Nav.module.css";
import Link from "next/link";
import { useState, useEffect, useRef, useContext } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import React from 'react';

function Nav(props) { 
  const [showMobileNav, setShowMobileNav] = useState(false);
  let menuref = useRef();

  useEffect(() => {
    let handler = (event) => {
      if (
        showMobileNav &&
        menuref.current &&
        !menuref.current.contains(event.target)
      ) {
        setShowMobileNav(false);
      }
    };
    document.addEventListener("click", handler);
    return () => {
      document.removeEventListener("click", handler);
    };
  }, [showMobileNav]);

  function handleMenuClick() {
    if (!showMobileNav) {
      setShowMobileNav(true);
    } else {
      setShowMobileNav(false);
    }
  }
  return (
    <nav className={styles.navbarcont}>
      <div className={styles.navbar}>
        <div className={styles.leftside}>
          <Link href="/" passhref>
            <div className={styles.logo}>Julie Yudowitch Gardening Blog</div>
          </Link>
        </div>

        <div className={styles.rightsidecont}>
          <div className={styles.rightside}>
            <div
              className={styles.navbarlinks}
              onClick={handleMenuClick}
              id={showMobileNav ? styles.hidden : ""}
            >
              <div className={styles.hiddenMenu}>
                <div
                  className={styles.mobilemenuicon}
                  onClick={() => setShowMobileNav(!showMobileNav)}
                >
                  <AiOutlineClose color="rgb(198, 235, 248)" />
                </div>
              </div>
              <div>
                <Link
                  href="/"
                  ref={menuref}
                  passhref
                  className={styles.navlink}
                >
                  <p className={styles.navlinkname}>HOME</p>
                </Link>
              </div>
              <div>
                <Link
                  href="/login"
                  ref={menuref}
                  passhref
                  className={styles.navlink}
                >
                  <p className={styles.navlinkname}>LOG IN</p>
                </Link>
              </div>
              <div
                className={styles.mobilemenuicon}
                onClick={() => setShowMobileNav(!showMobileNav)}
              >
                <AiOutlineMenu color="rgb(198, 235, 248)" />
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
