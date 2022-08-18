import React from "react";
import Image from "next/image";
import styles from "../../styles/profileHeader.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCameraAlt,
  faCirclePlus,
  faPenAlt,
} from "@fortawesome/free-solid-svg-icons";
import ProfileNavigationVar from "./ProfileNavigationVar";

const ProfileHeader = () => {
  return (
    <div className={styles.profile_header_bg}>
      <div className="container">
        <div className="pt-2">
          <div>
            <Image
              className="rounded"
              height="500"
              width="1400"
              src="/cover.jpg"
              alt=""
            />
            <div className="d-flex justify-content-end">
              <button className={styles.cover_photo_btn}>
                <span>
                  <FontAwesomeIcon className="px-1" icon={faCameraAlt} />
                </span>{" "}
                Edit cover photo
              </button>
            </div>
          </div>
          <div
            className={`${styles.profile_picture_div} d-flex justify-content-between mx-3`}
          >
            <div className="d-flex mx-5">
              <div className={styles.profile_blue_border}>
                <Image
                  height="250"
                  width="250"
                  className={styles.profile_picture_img}
                  src="/defaultProfilePhoto.jpg"
                  alt=""
                />
              </div>
              <div className="d-flex align-items-center mx-4">
                <div>
                  <div>
                    <h2 className="text-white">Naeem Miah</h2>
                    <h5 className="text-white">1.1k friends</h5>
                  </div>
                  <div>
                    <Image
                      height="40"
                      width="40"
                      className={styles.friends_picture}
                      src="/defaultProfilePhoto.jpg"
                      alt=""
                    />
                    <Image
                      height="40"
                      width="40"
                      className={styles.friends_picture}
                      src="/defaultProfilePhoto.jpg"
                      alt=""
                    />
                    <Image
                      height="40"
                      width="40"
                      className={styles.friends_picture}
                      src="/defaultProfilePhoto.jpg"
                      alt=""
                    />
                    <Image
                      height="40"
                      width="40"
                      className={styles.friends_picture}
                      src="/defaultProfilePhoto.jpg"
                      alt=""
                    />
                    <Image
                      height="40"
                      width="40"
                      className={styles.friends_picture}
                      src="/defaultProfilePhoto.jpg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="d-flex align-items-center">
              <div className="mt-5">
                <button className={`${styles.add_story_btn} mx-3`}>
                  <span>
                    <FontAwesomeIcon className="px-1" icon={faCirclePlus} />
                  </span>{" "}
                  Add to story
                </button>
                <button className={styles.edit_profile_btn}>
                  <span>
                    <FontAwesomeIcon className="px-1" icon={faPenAlt} />
                  </span>{" "}
                  Edit profile
                </button>
              </div>
            </div>
          </div>
        </div>
        <ProfileNavigationVar></ProfileNavigationVar>
      </div>
      <div className="my-5"></div>
    </div>
  );
};

export default ProfileHeader;
