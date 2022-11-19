import { Field, Form, Formik } from "formik";
import {
  ChangeEvent,
  ChangeEventHandler,
  FC,
  useEffect,
  useState,
} from "react";
import { useAppSelector } from "../../../../store";
import "./AccountForm.scss";

interface IAccountForm {
  type?: "update" | "register";
  onSubmit: (values: IValues) => void;
}

export interface IValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  gender: string;
  avatar?: File;
}

const AccountForm: FC<IAccountForm> = ({ type = "register", onSubmit }) => {
  const [initialValues, setInitialValues] = useState<IValues>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    gender: "",
    avatar: null,
  });
  const user = useAppSelector((state) => state.auth.user);

  useEffect(() => {
    if (user && type === "update") {
      setInitialValues({
        firstName: user?.firstName,
        lastName: user?.lastName,
        email: user?.email,
        password: "",
        gender: user?.gender,
      });
    }
  }, [user]);

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      enableReinitialize
    >
      {({ setFieldValue }) => (
        <Form className="account-form">
          <div className="account-form__item">
            <label className="account-form__subtitle" htmlFor="firstName">
              First name:
            </label>
            <Field
              id="firstName"
              className="account-form__input"
              name="firstName"
            />
          </div>
          <div className="account-form__item">
            <label className="account-form__subtitle" htmlFor="lastName">
              Last name:
            </label>
            <Field
              id="lastName"
              className="account-form__input"
              name="lastName"
            />
          </div>
          <div className="account-form__item">
            <label className="account-form__subtitle" htmlFor="email">
              Email:
            </label>
            <Field id="email" className="account-form__input" name="email" />
          </div>
          <div className="account-form__item">
            <label className="account-form__subtitle" htmlFor="password">
              Password:
            </label>
            <Field
              id="password"
              className="account-form__input"
              name="password"
              type="password"
            />
          </div>
          <div className="account-form__item">
            <label className="account-form__subtitle" htmlFor="gender">
              Gender:
            </label>
            <Field
              id="gender"
              className="account-form__select"
              as="select"
              name="gender"
            >
              <option value="" disabled>
                Select gender
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </Field>
          </div>
          {type === "update" && (
            <div className="account-form__item">
              <Field
                type="file"
                name="avatar"
                value=""
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setFieldValue("avatar", e.target.files[0])
                }
              />
            </div>
          )}
          <button className="account-form__button">
            {type === "update" ? "Update" : "Register"}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default AccountForm;
