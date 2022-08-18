import React, { useState } from "react";
import styles from "../styles/login.module.css";
import { useForm } from "react-hook-form";
import Registration from "../components/Registration";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

const Login = () => {
  const router = useRouter();
  // Functions for modal
  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  const loggedInUser = Cookies.get("loggedin");
  // const user = JSON.parse(loggedInUser);
  // console.log(user);

  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    if (loggedInUser) {
      Cookies.set("loggedin", JSON.stringify(data));
      router.push("/profile");
    } else {
      alert("Please SignIn first");
    }
    reset();
  };

  return (
    <div
      className={`container ${styles.loginSection} d-flex align-items-center}`}
    >
      <div className="row w-100">
        <div className="col-md-7 d-flex align-items-center">
          <div>
            <h1 id={styles.facebook}>Facebook</h1>
            <h2 id={styles.about_acebook}>
              Facebook helps you connect and share with the people in your life.
            </h2>
          </div>
        </div>

        <div className="col-md-5 d-flex align-items-center">
          <div>
            <div>
              <div className={styles.login_form}>
                <form onSubmit={handleSubmit(onSubmit)} action="">
                  <div className="form-group">
                    <input
                      name="mobileOrEmail"
                      placeholder="Email adress or phone number"
                      className="form-control login-input"
                      type="text"
                      required
                      {...register("mobileOrEmail")}
                    />
                  </div>
                  <div className="form-group mt-3">
                    <input
                      name="password"
                      placeholder="passsword"
                      className="form-control login-input"
                      type="password"
                      required
                      {...register("password")}
                    />
                  </div>
                  <div className="mt-3">
                    <button
                      type="submit"
                      className={`${styles.login_btn} w-100 fw-bold`}
                    >
                      Login
                    </button>
                  </div>
                </form>
                <p className="text-primary text-center mt-3">
                  Forgotten password?
                </p>
                <hr />

                <div>
                  <div className="d-flex justify-content-center">
                    <button
                      type="button"
                      onClick={openModal}
                      className={`${styles.create_btn} text-white fw-bold p-2`}
                    >
                      Create New Account
                    </button>
                    <Registration
                      modalIsOpen={modalIsOpen}
                      closeModal={closeModal}
                    ></Registration>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <p className="text-center mt-4">
                <strong>Create a page</strong> for a celebraty, brands or
                buisiness.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
