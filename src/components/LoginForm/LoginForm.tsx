import { FC, useState, FormEvent, ChangeEvent, useEffect } from "react";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../../firebase/config";
import { useNavigate } from "react-router-dom";
import { Button } from "../Button/Button";
import { useAppSelector } from "../../store/hooks";
import "./LoginForm.css";

interface ValidationErrors {
  email?: string;
  password?: string;
}

export const LoginForm: FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPlaceholder, setShowPlaceholder] = useState(true);
  const [error, setError] = useState("");
  const [validationErrors, setValidationErrors] = useState<ValidationErrors>({});
  const [shouldValidateEmail, setShouldValidateEmail] = useState(false);
  const navigate = useNavigate();
  const { user } = useAppSelector((state) => state.auth);

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  const validateEmail = (email: string): string | undefined => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) return "Email is required";
    if (!emailRegex.test(email)) return "Please enter a valid email address";
    return undefined;
  };

  const validatePassword = (password: string): string | undefined => {
    if (!password) return "Password is required";
    if (password.length < 8) return "Password must be at least 8 characters long";
    if (!/[A-Z]/.test(password)) return "Password must contain at least one uppercase letter";
    if (!/[a-z]/.test(password)) return "Password must contain at least one lowercase letter";
    if (!/[0-9]/.test(password)) return "Password must contain at least one number";
    return undefined;
  };

  const validateForm = (): boolean => {
    const emailError = validateEmail(email);
    const passwordError = validatePassword(password);
    
    setValidationErrors({
      email: emailError,
      password: passwordError
    });

    return !emailError && !passwordError;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setShouldValidateEmail(true);
    
    if (!validateForm()) {
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (err) {
      setError("Invalid credentials. Please try again.");
      console.error(err);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      setEmail("");
      setPassword("");
      setError("");
      setShowPlaceholder(true);
      setValidationErrors({});
      setShouldValidateEmail(false);
      navigate("/login");
    } catch (error) {
      console.error("Error signing out:", error);
      setError("Failed to sign out. Please try again.");
    }
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    if (shouldValidateEmail) {
      setValidationErrors(prev => ({
        ...prev,
        email: validateEmail(newEmail)
      }));
    }
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    setShouldValidateEmail(true);
    setValidationErrors(prev => ({
      ...prev,
      email: validateEmail(email),
      password: validatePassword(newPassword)
    }));
  };

  const isFormValid = !validationErrors.email && !validationErrors.password && email && password;

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
              value={email}
              placeholder={showPlaceholder ? "email@example.com" : ""}
              onFocus={() => setShowPlaceholder(false)}
              onChange={handleEmailChange}
              required
              className={validationErrors.email ? "error" : ""}
            />
            {validationErrors.email && (
              <span className="validation-error">{validationErrors.email}</span>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              placeholder={showPlaceholder ? "*************" : ""}
              onFocus={() => setShowPlaceholder(false)}
              onChange={handlePasswordChange}
              required
              className={validationErrors.password ? "error" : ""}
            />
            {validationErrors.password && (
              <span className="validation-error">{validationErrors.password}</span>
            )}
          </div>

          {error && <p className="error-message">{error}</p>}

          <div className="form-buttons">
            <Button 
              type="submit" 
              className={`submit-btn ${isFormValid ? 'active' : 'disabled'}`}
              disabled={!isFormValid}
            >
              Submit
            </Button>
            <Button type="button" className="cancel-btn" onClick={handleSignOut}>Sign Out</Button>
          </div>
        </form>
      </div>
    </div>
  );
}; 