import React from "react";
import { useState } from "react";
const Loading = ({ fetchDetail }) => {
  const [text, setText] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (event) => {
    if (text.length === 0 || password.length === 0) return;
    event.preventDefault();
    fetchDetail(text);
  };
  return (
    <>
      <div className="loading">
        <form>
          <div className="single-customer">
            <label htmlFor="uname">
              <b>Username</b>
              <input
                type="text"
                // placeholder="Enter Username"
                name="uname"
                value={text}
                onChange={(e) => {
                  setText(e.target.value);
                  // console.log(e.target.value);
                }}
                required
              />
            </label>
          </div>
          <div className="single-customer">
            <label htmlFor="psw">
              <b>Password</b>
              <input
                type="password"
                name="psw"
                onChange={(e) => {
                  setPassword(e.target.value);
                  // console.log(e.target.value);
                }}
                required
              />
            </label>
          </div>

          <button onClick={handleSubmit} type="submit" className="btn">
            Login
          </button>
        </form>
      </div>
    </>
  );
};

export default Loading;
