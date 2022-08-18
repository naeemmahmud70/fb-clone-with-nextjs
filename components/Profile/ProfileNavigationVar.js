import React from "react";
import Link from "next/link";
import styles from "../../styles/profileNavigationVar.module.css";

const ProfileNavigationVar = () => {
  return (
    <div
      className={`d-flex justify-content-between ${styles.border_top} border-secondary`}
    >
      <div className="my-3">
        <Link href="/none">
          <span className={`${styles.nav_item} mx-3`}>Home</span>
        </Link>
        <Link href="/none">
          <span className={`${styles.nav_item} mx-3`}>About</span>
        </Link>
        <Link href="/none">
          <span className={`${styles.nav_item} mx-3`}>Friends</span>
        </Link>
        <Link href="/none">
          <span className={`${styles.nav_item} mx-3`}>Photos</span>
        </Link>
        <Link href="/none">
          <span className={`${styles.nav_item} mx-3`}>Videos</span>
        </Link>
        <Link href="/none">
          <span className={`${styles.nav_item} mx-3`}>Check In</span>
        </Link>
        <Link href="/none">
          <span className={`${styles.nav_item} mx-3`}>More</span>
        </Link>
      </div>
      <div className="my-3">
        <button className={styles.profile_navigation_more_btn}>...</button>
      </div>
    </div>
  );
};

export default ProfileNavigationVar;
