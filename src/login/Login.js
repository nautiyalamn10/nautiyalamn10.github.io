import "./login.css";
import { useState } from "react";

export default function Login({ fetchDetail }) {
  const [text, setText] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (event) => {
    if (text.length === 0 || password.length === 0) return;
    event.preventDefault();
    fetchDetail(text);
  };
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">CustomerBook</h3>
          <span className="loginDesc">Know more about your Customers.</span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input
              placeholder="Username"
              className="loginInput"
              value={text}
              onChange={(e) => {
                setText(e.target.value);
              }}
            />
            <input
              placeholder="Password"
              type="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              className="loginInput"
              required
            />
            <button
              className="loginButton"
              onClick={handleSubmit}
              type="submit"
            >
              Log In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
