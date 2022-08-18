import React from "react";
import Image from "next/image";
import styles from "../../styles/profilePost.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faVideoCamera,
  faImages,
  faFlag,
} from "@fortawesome/free-solid-svg-icons";

const UploadPost = () => {
  return (
    <div>
      <div className={`${styles.profile_posts_bg} mx-5 p-3`}>
        <div className="d-flex align-items-center">
          <div className={styles.image_width}>
            <Image
              height="50"
              width="50"
              className={`${styles.border_round_picture}`}
              src="/defaultProfilePhoto.jpg"
              alt=""
            />
          </div>
          <div className={styles.input_width}>
            <input
              type="upload"
              name=""
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
              Feeling/Activity
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadPost;
