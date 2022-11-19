import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Modal from "react-modal";
import { useAppDispatch, useAppSelector } from "../../../../store";
import { logout, updateProfile } from "../../../../store/reducers/auth";
import AccountForm, {
  IValues,
} from "../../../Auth/components/AccountForm/AccountForm";
import "./Navbar.scss";

const Navbar = () => {
  const [showProfileOptions, setShowProfileOptions] = useState<boolean>();
  const [showProfileModal, setShowProfileModal] = useState<boolean>();
  const user = useAppSelector((state) => state.auth.user);
  const dispatch = useAppDispatch();

  const closeModal = () => setShowProfileModal(false);

  const handleSubmit = (values: any) => {
    const formData = new FormData();

    for (const key in values) {
      if (values[key]) {
        formData.append(key, values[key]);
      }
    }

    dispatch(updateProfile(formData)).then(() => setShowProfileModal(false));
  };

  return (
    <>
      <div className="navbar">
        <div className="navbar__logo">Chat.io</div>
        <div
          className="navbar__profile"
          onClick={() => setShowProfileOptions(!showProfileOptions)}
        >
          <img className="navbar__avatar" src={user?.avatar} alt="avatar" />
          <div className="navbar__fullname">
            {user?.firstName} {user?.lastName}
            <FontAwesomeIcon className="navbar__icon" icon="caret-down" />
            {showProfileOptions && (
              <div className="profile-options">
                <button
                  className="profile-options__button"
                  onClick={() => setShowProfileModal(true)}
                >
                  Update profile
                </button>
                <button
                  className="profile-options__button"
                  onClick={() => dispatch(logout())}
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      <Modal isOpen={showProfileModal} onRequestClose={closeModal}>
        <div className="modal">
          <div className="modal__header">Update profile</div>
          <div className="modal__body">
            <AccountForm onSubmit={handleSubmit} type="update" />
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Navbar;
