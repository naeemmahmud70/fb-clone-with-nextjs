import React from "react";
import Link from "next/link";
import Modal from "react-modal";
import { useForm } from "react-hook-form";
import styles from "../styles/registration.module.css";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "452px",
    border: 0,
  },
};
Modal.setAppElement("body");

const Registration = ({ modalIsOpen, closeModal }) => {
  const router = useRouter();
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    Cookies.set("loggedin", JSON.stringify(data));
    router.push("/profile");
    reset();
  };
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <div className={styles.registration_form}>
        <div>
          <div className={styles.sign_up_form_header}>
            <h1 id={styles.sign_up}>Sign Up</h1>
            <p className="text-secondary">Its quick and easy.</p>
          </div>
        </div>
        <div className="p-3">
          <form onSubmit={handleSubmit(onSubmit)} action="">
            <div className="row">
              <div className="col-md-6 form-group bg">
                <input
                  className="form-control"
                  type="text"
                  name="fullName"
                  id=""
                  placeholder="Full name"
                  required
                  {...register("fullName")}
                />
              </div>
              <div className="col-md-6 form-group">
                <input
                  className="form-control"
                  type="text"
                  name="surName"
                  id=""
                  placeholder="Surname"
                  required
                  {...register("surName")}
                />
              </div>
            </div>
            <div className="form-group py-2">
              <input
                className="form-control"
                type="text"
                name="mobileOremail"
                id=""
                placeholder="Mobile number or email address"
                required
                {...register("mobileOrEmail")}
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                type="password"
                name="newPassword"
                id=""
                placeholder="New password"
                required
                {...register("newPassword")}
              />
            </div>

            {/* Dath of birth inputs */}
            <div className="row">
              <p className="mt-2">Date of birth</p>
              <div className={`col-sm-4 form-group ${styles.margin_decrease}`}>
                <select
                  className="form-select"
                  aria-label="Day of month"
                  {...register("dayOfDOB")}
                  required
                >
                  <option selected>Day</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>
              <div className={`col-sm-4 form-group ${styles.margin_decrease}`}>
                <select
                  className="form-select"
                  aria-label="Month of ODB"
                  {...register("monthOfDOB")}
                  required
                >
                  <option selected>Month</option>
                  <option value="january">Jan</option>
                  <option value="february">Fab</option>
                  <option value="march">Mar</option>
                </select>
              </div>
              <div className={`col-sm-4 form-group ${styles.margin_decrease}`}>
                <select
                  className="form-select"
                  aria-label="Year of DOB"
                  required
                  {...register("yearOfDOB")}
                >
                  <option selected>Year</option>
                  <option value="2000">2000</option>
                  <option value="2001">2001</option>
                  <option value="2003">2002</option>
                </select>
              </div>
            </div>
            {/* Gender Select inputs */}
            <div className="row">
              <p className="mt-2">Select Gender</p>
              <div
                className={`col-md-4 form-group ${styles.input_radio} d-flex align-items-center justify-content-end ${styles.margin_decrease}`}
              >
                <label
                  className="form-check-label mx-2"
                  htmlFor="flexRadioDefault1"
                >
                  Female
                </label>
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  value="female"
                  id="flexRadioDefault1"
                  {...register("gender")}
                  required
                />
              </div>
              <div
                className={`col-md-4 form-group ${styles.input_radio} d-flex align-items-center justify-content-end ${styles.margin_decrease}`}
              >
                <label
                  className="form-check-label mx-2"
                  htmlFor="flexRadioDefault1"
                >
                  Male
                </label>
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  value="male"
                  id="flexRadioDefault1"
                  {...register("gender")}
                />
              </div>
              <div
                className={`col-md-4 form-group ${styles.input_radio} d-flex align-items-center justify-content-end ${styles.margin_decrease}`}
              >
                <label
                  className="form-check-label mx-2"
                  htmlFor="flexRadioDefault1"
                >
                  Custom
                </label>
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  value="custom"
                  id="flexRadioDefault1"
                  {...register("gender")}
                />
              </div>
            </div>
            {/* Form footer text */}
            <div className="mt-3">
              <p className="gray-text-color">
                People who use our service may have uploaded your contact
                information to Facebook.{" "}
                <Link href="/learnMore">
                  <span>Learn more</span>
                </Link>
                .
              </p>
              <p className={styles.gray_text_color}>
                By clicking Sign Up, you agree to our{" "}
                <Link href="/privacyPolicy">
                  <span>Terms, Privacy Policy</span>
                </Link>{" "}
                and{" "}
                <Link href="/cookiesPolicy">
                  <span>Cookies Policy</span>
                </Link>
                . You may receive SMS notifications from us and can opt out at
                any time.
              </p>
            </div>
            <div className="text-center ">
              <button className={styles.sign_up_btn}>Sign Up</button>
            </div>
          </form>
        </div>
      </div>
    </Modal>
  );
};

export default Registration;
