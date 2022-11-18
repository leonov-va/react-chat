import { Link, useNavigate } from "react-router-dom";
import RegisterImg from "../../assets/images/register.svg";
import { useAppDispatch } from "../../store";
import { register } from "../../store/reducers/auth";
import AccountForm, { IValues } from "./components/AccountForm/AccountForm";

const Register = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSubmit = (values: IValues) => {
    dispatch(register(values)).then(() => navigate("/"));
  };

  return (
    <div className="auth">
      <div className="auth__inner">
        <div className="auth__img">
          <img src={RegisterImg} alt="" />
        </div>
        <div className="auth__content">
          <h1 className="auth__title">Create an account</h1>
          <AccountForm onSubmit={handleSubmit} />
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
