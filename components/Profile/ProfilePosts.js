import React from "react";
import Image from "next/image";
import styles from "../../styles/profilePost.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faVideoCamera,
  faImages,
  faFlag,
  faFilter,
  faGear,
  faBars,
  faBox,
} from "@fortawesome/free-solid-svg-icons";

const ProfilePosts = () => {
  return (
    <div>
      <div className={`${styles.profile_posts_bg} mt-3 p-3`}>
        <div className="d-flex align-items-center">
          <div className={styles.image_width}>
            <Image
              height="50"
              width="50"
              className={styles.border_round_picture}
              src="/defaultProfilePhoto.jpg"
              alt=""
            />
          </div>
          <div className={styles.input_width}>
            <input
              type="upload"
              disabled
              className={`${styles.upload_input} w-100`}
              placeholder="What's on your mind?"
            />
          </div>
        </div>

        <div className={`d-flex justify-content-evenly ${styles.top_border}`}>
          <div>
            <button className={`${styles.posts_btn} text-center mt-2`}>
              {" "}
              <span>
                <FontAwesomeIcon className="px-1" icon={faVideoCamera} />
              </span>
              Live Video
            </button>
          </div>
          <div>
            <button className={`${styles.posts_btn} text-center mt-2`}>
              <span>
                <FontAwesomeIcon className="px-1" icon={faImages} />
              </span>{" "}
              Photo/Video
            </button>
          </div>
          <div>
            <button className={`${styles.posts_btn} text-center mt-2`}>
              <span>
                <FontAwesomeIcon className="px-1" icon={faFlag} />
              </span>{" "}
              Life Event
            </button>
          </div>
        </div>
      </div>
      <div className={`${styles.profile_posts_bg} mt-3 p-3`}>
        <div className="d-flex justify-content-between align-item-center">
          <div>
            <h4 className="text-white fw-bold">Posts</h4>
          </div>
          <div>
            <button className={styles.edit_profile_btn}>
              <FontAwesomeIcon className="px-1" icon={faFilter} />
              Filters
            </button>
            <button className={`${styles.edit_profile_btn} mx-2`}>
              <FontAwesomeIcon className="px-1" icon={faGear} />
              Manage posts
            </button>
          </div>
        </div>
        <div className={`d-flex justify-content-evenly ${styles.top_border}`}>
          <div>
            <button className={`${styles.posts_btn} text-center mt-2`}>
              <FontAwesomeIcon className="px-1" icon={faBars} />
              List view
            </button>
          </div>
          <div>
            <button className={`${styles.posts_btn} text-center mt-2`}>
              <FontAwesomeIcon className="px-1" icon={faBox} />
              Grid view
            </button>
          </div>
        </div>
      </div>
      <div>
        <p className="text-center text-secondary">No posts avaibale</p>
      </div>
    </div>
  );
};

export default ProfilePosts;
