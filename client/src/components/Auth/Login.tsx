import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../store";
import { login } from "../../store/reducers/auth";
import "./Auth.scss";
import LoginImg from "../../assets/images/login.svg";
import { Formik, Field, Form } from "formik";

interface IValues {
  email: string;
  password: string;
}

const initialValues: IValues = { email: "", password: "" };

const Login = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSubmit = ({ email, password }: IValues) => {
    dispatch(login({ email, password })).then(() => navigate("/"));
  };

  return (
    <div className="auth">
      <div className="auth__inner">
        <div className="auth__img">
          <img src={LoginImg} alt="" />
        </div>
        <div className="auth__content">
          <h1 className="auth__title">Login</h1>
          <Formik initialValues={initialValues} onSubmit={handleSubmit}>
            <Form className="auth__form">
              <div className="auth__item">
                <label className="auth__subtitle" htmlFor="email">
                  Email:
                </label>
                <Field
                  id="email"
                  className="auth__input"
                  name="email"
                  placeholder="Email"
                />
              </div>
              <div className="auth__item">
                <label className="auth__subtitle" htmlFor="password">
                  Password:
                </label>
                <Field
                  id="password"
                  className="auth__input"
                  type="password"
                  name="password"
                  placeholder="Password"
                />
              </div>
              <button className="auth__button" type="submit">
                Login
              </button>
            </Form>
          </Formik>
          <p className="auth__text">
            Don't have an account?{" "}
            <Link className="auth__link" to="/register">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
