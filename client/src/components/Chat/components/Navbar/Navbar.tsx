import { useAppSelector } from "../../../../store";
import "./Navbar.scss";

const Navbar = () => {
  const user = useAppSelector((state) => state.auth.user);
  return (
    <div className="navbar">
      <div className="navbar__logo">Chat.io</div>
      <div className="navbar__profile">
        <img className="navbar__avatar" src={user?.avatar} alt="avatar" />
        <div className="navbar__fullname">
          {user?.firstName} {user?.lastName}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
