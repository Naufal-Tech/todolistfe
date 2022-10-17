import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { reset, logout } from "../features/auth/authSlice";

import {
  RiLoginBoxLine,
  RiLogoutBoxRLine,
  RiUserAddLine,
} from "react-icons/ri";

const Header = () => {
  const { user } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlerLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };

  return (
    <header className="header">
      <div className="logo">
        <Link to={user ? "/" : "/login"}>
          <span>My</span> List
        </Link>
      </div>
      {user ? (
        <div className="menu-logout">
          <button className="btn-logout" onClick={handlerLogout}>
            <i>
              <RiLogoutBoxRLine />
            </i>
            Logout
          </button>
        </div>
      ) : (
        <div className="menu">
          <ul>
            <li>
              <Link to="/login">
                <i>
                  <RiLoginBoxLine />
                </i>
                Login
              </Link>
            </li>
            <li>
              <Link to="/register">
                <i>
                  <RiUserAddLine />
                </i>
                Register
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
