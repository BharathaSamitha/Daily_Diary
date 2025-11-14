import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import api from "../api/api";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/users/login", form);
      localStorage.setItem("token", res.data.token);
      setMessage("Login successful!");
      navigate("/dashboard");
    } catch (err) {
      setMessage(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <div className="login-header">
          <h1>Daily Diary</h1>
          <p className="subtitle">Welcome back, please login to your account.</p>
        </div>

        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="field-label">Email</label>
            <input
              className="field-input"
              type="email"
              placeholder="Enter your email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
          </div>

          <div className="form-group">
            <label className="field-label">Password</label>
            <div className="password-container">
              <input
                className="field-input password-input"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                required
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
              />
              <button
                type="button"
                className="visibility-btn"
                onClick={() => setShowPassword(!showPassword)}
              >
                <span className="material-symbols-outlined">
                  {showPassword ? "visibility" : "visibility_off"}
                </span>
              </button>
            </div>
          </div>

          <button type="submit" className="login-btn">
            Login
          </button>
          {message && <p className="msg">{message}</p>}
        </form>

        <p className="register-text">
          Don’t have an account?
          <Link to="/register" className="register-link">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
