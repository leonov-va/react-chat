import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../store";
import { register } from "../../store/reducers/auth";
import RegisterImg from "../../assets/images/register.svg";

const Register = () => {
  const [state, setState] = useState<any>({
    firstName: "",
    lastName: "",
    email: "",
    gender: "",
    password: "",
  });

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement & HTMLSelectElement>
  ) => {
    setState((prev: any) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const submitForm = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(register(state)).then(() => navigate("/"));
  };

  return (
    <div className="auth">
      <div className="auth__inner">
        <div className="auth__img">
          <img src={RegisterImg} alt="" />
        </div>
        <div className="auth__content">
          <h1 className="auth__title">Create an account</h1>
          <form className="auth__form" onSubmit={submitForm}>
            <label className="auth__item">
              <span className="auth__subtitle">First name:</span>
              <input
                className="auth__input"
                type="text"
                name="firstName"
                value={state.firstName}
                onChange={handleChange}
              />
            </label>
            <label className="auth__item">
              <span className="auth__subtitle">Last name:</span>
              <input
                className="auth__input"
                type="text"
                name="lastName"
                value={state.lastName}
                onChange={handleChange}
              />
            </label>
            <label className="auth__item">
              <span className="auth__subtitle">Email:</span>
              <input
                className="auth__input"
                type="text"
                name="email"
                value={state.email}
                onChange={handleChange}
              />
            </label>
            <label className="auth__item">
              <span className="auth__subtitle">Password:</span>
              <input
                className="auth__input"
                type="text"
                name="password"
                value={state.password}
                onChange={handleChange}
              />
            </label>
            <span className="auth__subtitle">Gender:</span>
            <select
              className="auth__select"
              name="gender"
              value={state.gender}
              onChange={handleChange}
            >
              <option value="" disabled>Select gender</option>
              <option value="male">male</option>
              <option value="female">female</option>
            </select>
            <button className="auth__button">Register</button>
          </form>
          <p className="auth__text">
            Already have an account?{" "}
            <Link className="auth__link" to="/login">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
