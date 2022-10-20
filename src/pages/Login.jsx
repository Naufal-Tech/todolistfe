import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import { login, reset } from "../features/auth/authSlice";
import Loading from "../components/Loading";

const Login = () => {
  const [formData, setFormData] = useState({
    name: "",
    password: "",
  });

  const { name, password } = formData;

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

    if (!name || !password) {
      return toast.error("Please add all fields!");
    }

    const userData = {
      name,
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
                type="text"
                name="name"
                id="name"
                pattern="^[0-9]*$"
                maxLength={4}
                value={name}
                onChange={onChange}
                placeholder="userid..."
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
