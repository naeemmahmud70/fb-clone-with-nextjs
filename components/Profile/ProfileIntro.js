import React from "react";
import styles from "../../styles/profileIntro.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHomeAlt,
  faLocation,
  faHeart,
  faStopwatch,
} from "@fortawesome/free-solid-svg-icons";

const ProfileIntro = () => {
  return (
    <div id={styles.profile_intro_bg} className="mt-3 p-3">
      <div>
        <h4 className="text-white fw-bold">Intro</h4>
        <p className="text-white text-center">
          Dont wait for the perfect moment⏱️. Take the moment and make it
          perfect.Dont wait for the perfect moment⏱️. Take the moment and make
          it perfect.
        </p>
        <div>
          <button className={`${styles.edit_bio_btn} w-100`}>Edit bio</button>
        </div>
      </div>
      <div className="mt-3">
        <h6 className={styles.details_text_color}>
          <span>
            <FontAwesomeIcon
              className={`${styles.search_icon} px-3`}
              icon={faLocation}
            />
          </span>
          Lives Brahmanbaria, Dhaka, Bangladesh
        </h6>
        <h6 className={styles.details_text_color}>
          <span>
            <FontAwesomeIcon
              className={`${styles.search_icon} px-3`}
              icon={faHomeAlt}
            />
          </span>
          From Brahmanbaria, Dhaka, Bangladesh
        </h6>
        <h6 className={styles.details_text_color}>
          <span>
            <FontAwesomeIcon
              className={`${styles.search_icon} px-3`}
              icon={faHeart}
            />
          </span>
          Single
        </h6>
        <h6 className={styles.details_text_color}>
          <span>
            <FontAwesomeIcon
              className={`${styles.search_icon} px-3`}
              icon={faStopwatch}
            />
          </span>
          Joined August 2022
        </h6>
      </div>
    </div>
  );
};

export default ProfileIntro;
