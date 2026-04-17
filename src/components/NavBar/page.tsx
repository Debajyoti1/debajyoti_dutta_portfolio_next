"use client";
import React from "react";
import { useEffect, useState } from "react";

import styles from "./page.module.scss";

const NavBar = () => {
  const [fixed, setFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setFixed(true);
      } else {
        setFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`${styles.navMain} ${fixed ? styles.fixed : ""}`}>
     <div>
        <div>Debajyoti Dutta</div>
        <div>Links</div>
        <div>Resume Download</div>
     </div>
    </div>
  );
};

export default NavBar;
