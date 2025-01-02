import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const RegisterLoginForm = () => {
  const [regFormData, setRegFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [loginFormData, setLoginFormData] = useState({
    loginEmail: "",
    loginPassword: "",
  });
  const [forgotPasswordData, setForgotPasswordData] = useState({
    email: "",
  });
  const [isForgotPassword, setIsForgotPassword] = useState(false); // State to manage forgot password visibility

  const navigate = useNavigate();

  const [regErrors, setRegErrors] = useState({});
  const [loginErrors, setLoginErrors] = useState({});
  const [forgotPasswordError, setForgotPasswordError] = useState("");

  const handleRegChange = (e) => {
    setRegFormData({ ...regFormData, [e.target.name]: e.target.value });
  };
  const handleLoginChange = (e) => {
    setLoginFormData({ ...loginFormData, [e.target.name]: e.target.value });
  };
  const handleForgotPasswordChange = (e) => {
    setForgotPasswordData({
      ...forgotPasswordData,
      [e.target.name]: e.target.value,
    });
  };

  const validateRegForm = () => {
    let newErrors = {};
    if (!regFormData.firstName) newErrors.firstName = "First name is required";
    if (!regFormData.lastName) newErrors.lastName = "Last name is required";
    if (!regFormData.email) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(regFormData.email)
    ) {
      newErrors.email = "Invalid email format";
    }
    if (!regFormData.password) newErrors.password = "Password is required";
    if (regFormData.password.length < 6)
      newErrors.password = "Password must be at least 6 characters";
    if (!regFormData.confirmPassword)
      newErrors.confirmPassword = "Confirm password is required";
    if (regFormData.password !== regFormData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }
    setRegErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateLoginForm = () => {
    let newErrors = {};
    if (!loginFormData.loginEmail) {
      newErrors.loginEmail = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(loginFormData.loginEmail)
    ) {
      newErrors.loginEmail = "Invalid email format";
    }
    if (!loginFormData.loginPassword)
      newErrors.loginPassword = "Password is required";
    setLoginErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };


  const handleRegSubmit = async (e) => {
    e.preventDefault();
    if (validateRegForm()) {
        try {
            const response = await axios.post("http://localhost:4000/registerloginform", regFormData);
            alert(response.data.message);
            setRegFormData({
                firstName: "",
                lastName: "",
                email: "",
                password: "",
                confirmPassword: "",
            });
            setRegErrors({});
        } catch (error) {
            alert(error.response?.data?.error || "Registration failed.");
        }
    }
};

// LOGIN BUTTON

  // const handleLoginSubmit = (e) => {
  //   e.preventDefault();
  //   if (validateLoginForm()) {
  //     if (
  //       loginFormData.loginEmail === "e@e.com" &&
  //       loginFormData.loginPassword === "pass"
  //     ) {
  //       alert("Login successful!");
  //       navigate("/employeedashboard");
  //     } else if (
  //       loginFormData.loginEmail === "a@a.com" &&
  //       loginFormData.loginPassword === "pass"
  //     ) {
  //       alert("Login successful!");
  //       navigate("/managerdashboard");
  //     } else {
  //       alert("Invalid email or password.");
  //     }
  //   }
  // };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    if (validateLoginForm()) {
      try {
        const response = await axios.post("http://localhost:4000/login", {
          email: loginFormData.loginEmail,
          password: loginFormData.loginPassword,
        });
  
        alert(response.data.message);
  
        // Redirect based on userType
        switch (response.data.userType) {
          case "employee":
            navigate("/employeedashboard");
            break;
          case "manager":
          case "admin":
            navigate("/innovationmanagerdashboard");
            break;
          default:
            alert("User type not recognised");
        }
      } catch (error) {
        alert(error.response?.data?.error || "Login failed");
      }
    }
  };
  
  

  const handleForgotPasswordSubmit = (e) => {
    e.preventDefault();
    if (
      forgotPasswordData.email === "e@e.com" ||
      forgotPasswordData.email === "a@a.com"
    ) {
      alert("Password reset link sent to your email.");
      setIsForgotPassword(false); // Hide the forgot password form after submission
    } else {
      setForgotPasswordError("No account found with this email.");
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <h4 className="fw-bold">Register</h4>
            </div>
            <div className="card-body">
              <form onSubmit={handleRegSubmit}>
                <div className="mb-3">
                  <label className="form-label">First Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="firstName"
                    value={regFormData.firstName}
                    onChange={handleRegChange}
                  />
                  {regErrors.firstName && (
                    <div className="text-danger">{regErrors.firstName}</div>
                  )}
                </div>
                <div className="mb-3">
                  <label className="form-label">Last Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="lastName"
                    value={regFormData.lastName}
                    onChange={handleRegChange}
                  />
                  {regErrors.lastName && (
                    <div className="text-danger">{regErrors.lastName}</div>
                  )}
                </div>
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    value={regFormData.email}
                    onChange={handleRegChange}
                  />
                  {regErrors.email && (
                    <div className="text-danger">{regErrors.email}</div>
                  )}
                </div>
                <div className="mb-3">
                  <label className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    value={regFormData.password}
                    onChange={handleRegChange}
                  />
                  {regErrors.password && (
                    <div className="text-danger">{regErrors.password}</div>
                  )}
                </div>
                <div className="mb-3">
                  <label className="form-label">Confirm Password</label>
                  <input
                    type="password"
                    className="form-control"
                    name="confirmPassword"
                    value={regFormData.confirmPassword}
                    onChange={handleRegChange}
                  />
                  {regErrors.confirmPassword && (
                    <div className="text-danger">
                      {regErrors.confirmPassword}
                    </div>
                  )}
                </div>
                <button type="submit" className="btn customBtn">
                  Register
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <h4 className="fw-bold">Login</h4>
            </div>
            <div className="card-body">
              <form onSubmit={handleLoginSubmit}>
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    name="loginEmail"
                    value={loginFormData.loginEmail}
                    onChange={handleLoginChange}
                  />
                  {loginErrors.loginEmail && (
                    <div className="text-danger">{loginErrors.loginEmail}</div>
                  )}
                </div>
                <div className="mb-3">
                  <label className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    name="loginPassword"
                    value={loginFormData.loginPassword}
                    onChange={handleLoginChange}
                  />
                  {loginErrors.loginPassword && (
                    <div className="text-danger">
                      {loginErrors.loginPassword}
                    </div>
                  )}
                </div>
                <button type="submit" className="btn customBtn">
                  Login
                </button>
              </form>
              <div>
                <button
                  type="button"
                  className="btn btn-link mt-3"
                  onClick={() => setIsForgotPassword(true)}
                >
                  Forgot Password?
                </button>
              </div>

              {/* Forgot Password Form */}
              {isForgotPassword && (
                <div className="mt-3">
                  <h5>Reset Password</h5>
                  <form onSubmit={handleForgotPasswordSubmit}>
                    <div className="mb-3">
                      <label className="form-label">Email</label>
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        value={forgotPasswordData.email}
                        onChange={handleForgotPasswordChange}
                      />
                      {forgotPasswordError && (
                        <div className="text-danger">{forgotPasswordError}</div>
                      )}
                    </div>
                    <button type="submit" className="btn customBtn">
                      Reset Password
                    </button>
                    <button
                      type="button"
                      className="btn btn-secondary ms-2"
                      onClick={() => setIsForgotPassword(false)}
                    >
                      Cancel
                    </button>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterLoginForm;
