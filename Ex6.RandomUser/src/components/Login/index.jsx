import { useEffect, useRef, useState } from "react";
import "./index.css";

function Login() {
  const [showConfirm, setShowConfirm] = useState(false);
  const [value, setValue] = useState([]);
  const [error, setError] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [randomNumber, setRandomNumber] = useState(0);
  const loginInputRef = useRef(null);
  const confirmInputRef = useRef(null);

  function handleLogin() {
    setShowConfirm(!showConfirm);
    loginInputRef.current.value = "";
    const number = Math.floor(Math.random(randomNumber) * 899999 + 100000);
    console.log(number);
    setRandomNumber(number);
  }

  function confimation() {
    // console.log(confirmInputRef.current.value);
    if (randomNumber === +confirmInputRef.current.value) {
      alert("DONE!!!!!!!!");
    }
  }

  function handleInputChange(e) {
    setValue(e.target.value);
    const inputValue = e.target.value;
    const regex = /^09\d{9}$/;
    if (regex.test(inputValue)) {
      setError("");
    } else {
      setError("Please enter a valid phone number.");
    }
  }

  function backToEdit() {
    setShowConfirm(!showConfirm);
  }

  useEffect(() => {
    loginInputRef.current?.focus();
  });

  return (
    <div className="loginContainer">
      {!showConfirm ? (
        <div className="loginPage">
          <div>
            <input
              className={error ? "errorborder" : ""}
              onChange={handleInputChange}
              value={value}
              ref={loginInputRef}
              type="number"
              placeholder="Enter phone"
              style={{ padding: "20px", width: "300px", borderRadius: "5px" }}
            />
            {error !== "" && (
              <p style={{ margin: "5px", padding: "0" }}>{error}</p>
            )}
          </div>
          <button
            className={error ? "disabledButton" : ""}
            style={{ cursor: "pointer", width: "200px" }}
            onClick={handleLogin}
          >
            Enter phone
          </button>
        </div>
      ) : (
        <div className="confirmPage">
          <input
            ref={confirmInputRef}
            className="confirmInput"
            type="text"
            placeholder="Enter code"
            style={{ padding: "20px", width: "200px", borderRadius: "5px" }}
          />
          <button style={{ cursor: "pointer" }} onClick={confimation}>
            confirmation
          </button>
          <p style={{ fontSize: "20px", fontWeight: "600", padding: "0" }}>
            Conunter :{" "}
          </p>
          <button
            style={{
              position: "absolute",
              top: "7px",
              right: "7px",
              borderRadius: "15px",
              cursor: "pointer",
            }}
            onClick={backToEdit}
          >
            Back
          </button>
        </div>
      )}
    </div>
  );
}

export default Login;
