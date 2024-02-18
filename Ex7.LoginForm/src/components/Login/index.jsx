import { useRef, useState } from "react";
import style from "./index.module.css";
import photo from "/public/image.svg";

function Login() {
  const [errorPersian, setErrorPersian] = useState("");
  const [errorEnglish, setErrorEnglish] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorYear, setErrorYear] = useState("");
  const inputPresianRef = useRef(null);
  const inputEnglishRef = useRef(null);
  const inputEmailRef = useRef(null);
  const inputYearRef = useRef(null);
  let inputPersianValue;
  let inputEnglishValue;
  let inputEmailValue;
  let inputYearValue;
  const startYear = 1350;
  const endYear = 1380;
  const yearsPerid = Array.from(
    { length: endYear - startYear + 1 },
    (_, index) => startYear + index
  );
  function handlePersianInput() {
    inputPersianValue = inputPresianRef.current.value;
    const persianAlphabet = /^[\u0600-\u06FF\s]+$/;

    if (persianAlphabet.test(inputPersianValue)) {
      setErrorPersian("");
    } else {
      setErrorPersian("لطفا کیبورد خود را در حالت فارسی قرار دهید.");
    }
    if (inputPresianRef.current.value === "") {
      setErrorPersian("نام و نام خانوادگی به فارسی  نمیتواند خالی باشد.");
    }
  }

  function handleEnglishInput() {
    inputEnglishValue = inputEnglishRef.current.value;
    const EnglishAlphabet = /^[a-zA-Z]+$/;
    if (EnglishAlphabet.test(inputEnglishValue)) {
      setErrorEnglish("");
    } else {
      setErrorEnglish("لطفا کیبورد خود را در حالت انگلیسی قرار دهید.");
    }
    if (inputEnglishRef.current.value === "") {
      setErrorEnglish("نام و نام خانوادگی به انگلیسی  نمیتواند خالی باشد.");
    }
  }

  function handleEmailInput() {
    inputEmailValue = inputEmailRef.current.value;
    const emailValidation = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (inputEmailValue !== "") {
      setErrorEmail("لطفا ایمیل خود را به درستی وارد کنید.");
    } else {
      setErrorEmail("وارد کردن ایمیل الزامی است.");
    }
    if (emailValidation.test(inputEmailValue)) {
      setErrorEmail("");
    }
  }
  function handleYearInput() {
    inputYearValue = inputYearRef.current.value;
    const yearValidate = /^(135[0-9]|136[0-9]|137[0-9]|138[0-9])$/;

    if (inputYearValue === "") {
      setErrorYear("وارد کردن سال تولد الزامی است.");
    } else {
      setErrorYear("");
    }

    if (!yearValidate.test(inputYearValue) && inputYearValue !== "") {
      setErrorYear("سال تولد صحیح نمی باشد.");
    }
  }

  function validateForm() {
    if (
      !inputPersianValue &&
      !inputEnglishValue &&
      !inputEmailValue &&
      !inputYearValue
    ) {
      setErrorPersian("نام و نام خانوادگی به فارسی  نمیتواند خالی باشد.");
      setErrorEnglish("نام و نام خانوادگی به انگلیسی  نمیتواند خالی باشد.");
      setErrorEmail("وارد کردن ایمیل الزامی است.");
      setErrorYear("وارد کردن سال تولد الزامی است.");
    }
  }

  return (
    <div className={style.container}>
      <div className={style.rightContainer}>
        <h1>مشخصات فردی</h1>
        <div className={style.nameInput}>
          <input
            ref={inputPresianRef}
            onChange={handlePersianInput}
            className={`${style.input}  ${errorPersian ? style.redBorder : ""}`}
            type="text"
            placeholder="نام و نام خانوادگی به فارسی"
          />
          {<p className={style.redText}>{errorPersian}</p>}
        </div>
        <div className={style.nameInput}>
          <input
            ref={inputEnglishRef}
            onChange={handleEnglishInput}
            className={`${style.input}  ${errorEnglish ? style.redBorder : ""}`}
            type="text"
            placeholder="نام و نام خانوادگی به انگلیسی"
          />
          {<p className={style.redText}>{errorEnglish}</p>}
        </div>
        <div className={style.nameInput}>
          <input
            onChange={handleEmailInput}
            ref={inputEmailRef}
            className={`${style.input}  ${errorEmail ? style.redBorder : ""}`}
            type="email"
            placeholder="ایمیل"
          />
          {<p className={style.redText}>{errorEmail}</p>}
        </div>
        <div className={style.nameInput}>
          <input
            onChange={handleYearInput}
            ref={inputYearRef}
            className={`${style.input}  ${errorYear ? style.redBorder : ""}`}
            list="options"
            name="option"
          />
          <datalist id="options">
            {yearsPerid.map((item) => {
              return (
                <option
                  style={{ cursor: "pointer" }} // DOES NOT WORK
                  value={item}
                  key={item}
                >
                  {item}
                </option>
              );
            })}
          </datalist>

          {<p className={style.redText}>{errorYear}</p>}
        </div>
        <button
          onClick={validateForm}
          style={{
            cursor: "pointer",
            padding: "15px",
            width: "434px",
            backgroundColor: "rgb(13,13,90)",
            color: "white",
            borderRadius: "10px",
          }}
        >
          ثبت درخواست
        </button>
      </div>
      <div className={style.leftContainer}>
        <h1 style={{ marginBottom: "0" }}>مشاوره اختصاصی برای شما</h1>
        <p style={{ margin: "0 auto 12px", fontSize: "18px", color: "grey" }}>
          قدم به قدم مشاورتان در مسیر مهاجرت تحصیلی در کنارتان <br /> و راهنمای
          شما می باشد.
        </p>
        <img src={photo} alt="" />
      </div>
    </div>
  );
}

export default Login;

// {/* <label
//   className={`${inputYearRef.current.value !== "" ? style.customLabel : ""} `}
//   style={{
//     position: "absolute",
//     top: "13px",
//     right: "20px",
//     opacity: "0.7",
//   }}
//   htmlFor="option"
// >
//   سال تولد
// </label> */}
