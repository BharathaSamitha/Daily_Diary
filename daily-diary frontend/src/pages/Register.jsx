import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";
import api from "../api/api";

const Register = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/users/register", form);
      setMessage(res.data.message || "Account created successfully!");
      setTimeout(() => navigate("/login"), 1500);
    } catch (err) {
      setMessage(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="register-page">
      <div className="form-container">
        <div className="text-center mb-8">
          <h1 className="main-title">Daily Diary</h1>
          <p className="subtitle">Start your journey with us.</p>
        </div>

        <div className="form-box">
          <h2 className="form-heading">Create Your Account</h2>

          <form className="register-form" onSubmit={handleSubmit}>
            <label>
              <p>Name</p>
              <input
                type="text"
                placeholder="Enter your name"
                className="input-field"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
              />
            </label>

            <label>
              <p>Email</p>
              <input
                type="email"
                placeholder="Enter your email"
                className="input-field"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
              />
            </label>

            <label>
              <p>Password</p>
              <input
                type="password"
                placeholder="Enter your password"
                className="input-field"
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                required
              />
            </label>

            <button type="submit" className="btn-primary">
              Create Account
            </button>
          </form>

          <p className="login-text">
            Already have an account?
            <Link to="/login" className="login-link">
              {" "}
              Log in
            </Link>
          </p>

          {message && <p className="response-msg">{message}</p>}
        </div>
      </div>
    </div>
  );
};

export default Register;
