import { useState } from "react";
import "./index.css";

function Login() {
  const [showConfirm, setShowConfirm] = useState(false);

  function handleLogin() {
    setShowConfirm(!showConfirm);
  }

  return (
    <div className="loginContainer">
      {!showConfirm ? (
        <div className="loginPage">
          <input
            type="text"
            placeholder="Enter phone"
            style={{ padding: "20px", width: "300px", borderRadius: "5px" }}
          />
          <button
            style={{ cursor: "pointer", width: "200px" }}
            onClick={handleLogin}
          >
            Enter phone
          </button>
        </div>
      ) : (
        <div className="confirmPage">
          <input
            type="text"
            placeholder="Enter code"
            style={{ padding: "20px", width: "200px", borderRadius: "5px" }}
          />
          <button style={{ cursor: "pointer" }} onClick={handleLogin}>
            confirmation
          </button>
          <p style={{ fontSize: "20px", fontWeight: "600", padding: "0" }}>
            Conunter :{" "}
          </p>
        </div>
      )}
    </div>
  );
}

export default Login;
