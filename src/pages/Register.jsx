import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { register, reset } from "../features/auth/authSlice";

import Loading from "../components/Loading";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    password: "",
    password2: "",
  });

  const { name, password, password2 } = formData;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user, isLoading, isSuccess, isError, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess) {
      toast.success("Registration Successful");
      navigate("/");
    }

    if (user) {
      navigate("/");
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const onChange = (e) => {
    setFormData((oldState) => ({
      ...oldState,
      [e.target.name]: e.target.value,
    }));
  };



  const onSubmit = (e) => {
    e.preventDefault();

    if (!name || !password || !password2) {
      return toast.error("Please add all fields!");
    }

    if (password !== password2) {
      return toast.error("Passwords do not match!");
    }

    const userData = {
      name,
      password,
    };

    dispatch(register(userData));
  };

  
  return (
    <>
      {isLoading && <Loading />}
      <div className="register-login">
      <img src="../favicon.png" alt="binar" style={{height: "50px", width: "50px"}} className="binar"/>
        <h1>Register</h1>
        <div className="form">
          <form onSubmit={onSubmit}>
            <div className="form-group">
              <input
                type="text"
                maxLength={4}
                name="name"
                id="name"
                pattern="^[0-9]*$"
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
              <input
                type="password"
                name="password2"
                id="password2"
                value={password2}
                onChange={onChange}
                placeholder="confirm password..."
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

export default Register;
