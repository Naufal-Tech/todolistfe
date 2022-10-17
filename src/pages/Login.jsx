import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import { login, reset } from "../features/auth/authSlice";
import Loading from "../components/Loading";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const { user, isError, isLoading, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (user) {
      navigate("/");
    }

    if (isSuccess) {
      toast.success("Login successful");
      navigate("/");
    }
    dispatch(reset());
  }, [user, isError, isSuccess, navigate, message, dispatch]);

  const onChange = (e) => {
    setFormData((oldState) => ({
      ...oldState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      return toast.error("Please add all fields!");
    }

    const userData = {
      email,
      password,
    };

    dispatch(login(userData));
  };

  return (
    <>
      {isLoading && <Loading />}
      <div className="register-login">
        <h1>Login</h1>
        <div className="form">
          <form onSubmit={onSubmit}>
            <div className="form-group">
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={onChange}
                placeholder="email..."
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                name="password"
                id="password"
                value={password}
                onChange={onChange}
                placeholder="password..."
              />
            </div>
            <div className="form-group">
              <button type="submit">Confirm</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
