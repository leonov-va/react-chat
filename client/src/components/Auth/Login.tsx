import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../store";
import { login } from "../../store/reducers/auth";
import "./Auth.scss";
import LoginImg from "../../assets/images/login.svg";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const submitForm = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
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
          <form className="auth__form" onSubmit={submitForm}>
            <label className="auth__item">
              <span className="auth__subtitle">Email:</span>
              <input
                className="auth__input"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <label className="auth__item">
              <span className="auth__subtitle">Password:</span>
              <input
                className="auth__input"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <button className="auth__button">Login</button>
          </form>
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
