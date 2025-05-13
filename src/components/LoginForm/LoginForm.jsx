import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/config";
import { useNavigate } from "react-router-dom";
import { Button } from "../Button/Button";
import "./LoginForm.css";

export const LoginForm = () => {
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState("");
  const [showPlaceholder, setShowPlaceholder] = useState(true);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (err) {
      setError("Invalid credentials. Please try again.");
      console.error(err);
    }
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Log in</h2>
      <div className="login-box">
        <form className="form-content" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Email</label>
            <input
              type="email"
              id="username"
              name="username"
              placeholder={showPlaceholder ? "email@example.com" : ""}
              onFocus={() => setShowPlaceholder(false)}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder={showPlaceholder ? "*************" : ""}
              onFocus={() => setShowPlaceholder(false)}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {error && <p style={{ color: "red" }}>{error}</p>}

          <div className="form-buttons">
            <Button type="submit" className="submit-btn active">Submit</Button>
            <Button type="button" className="cancel-btn">Cancel</Button>
          </div>
        </form>
      </div>
    </div>
  );
};
