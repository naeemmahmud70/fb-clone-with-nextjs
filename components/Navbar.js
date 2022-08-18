import React from "react";
import styles from "../styles/navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faHomeAlt,
  faTvAlt,
  faHouseFloodWater,
  faUsersRectangle,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <nav
      className={`row navbar navbar-expand-lg navbar-light ${styles.navbar_bg} sticky-top t-0 px-2`}
    >
      <div className="container-fluid">
        <div className="d-flex align-itms-center px-3">
          <div>
            <Image
              height="50"
              width="50"
              className={styles.icon_image_size}
              src="/facebook.png"
              alt=""
            />
          </div>
          <div>
            <form className={`${styles.navbar_input} d-flex mx-2 mt-1`}>
              <span>
                <FontAwesomeIcon
                  className={`${styles.search_icon} px-3`}
                  icon={faSearch}
                />
              </span>
              <input
                className={`form-control me-2 border-0 ${styles.search_input}`}
                type="search"
                placeholder="Search facebook"
                aria-label="Search"
              ></input>
            </form>
          </div>
        </div>
        <button
          className="navbar-toggler toggler bg-light"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse " id="navbarNav">
          <ul className="navbar-nav mx-auto w-50 d-flex justify-content-between">
            <li className={styles.nav_item}>
              <Link href="/home">
                <FontAwesomeIcon className={styles.nav_icon} icon={faHomeAlt} />
              </Link>
            </li>
            <li className={styles.nav_item}>
              {" "}
              <Link href="/home">
                <FontAwesomeIcon className={styles.nav_icon} icon={faTvAlt} />
              </Link>
            </li>
            <li className={styles.nav_item}>
              {" "}
              <Link href="/home">
                <FontAwesomeIcon
                  className={styles.nav_icon}
                  icon={faHouseFloodWater}
                />
              </Link>
            </li>
            <li className={styles.nav_item}>
              {" "}
              <Link href="/home">
                <FontAwesomeIcon
                  className={styles.nav_icon}
                  icon={faUsersRectangle}
                />
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <Link href="/profile">
            <Image
              height="50"
              width="50"
              className={styles.icon_image_size}
              src="/defaultProfilePhoto.jpg"
              alt=""
            />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
