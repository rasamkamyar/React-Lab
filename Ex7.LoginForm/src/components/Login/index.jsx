import style from "./index.module.css";

function Login() {
  return (
    <div className={style.container}>
      <div className={style.rightContainer}>
        <h1>مشخصات فردی</h1>
        <input
          className={style.input}
          type="text"
          placeholder="نام و نام خانوادگی به فارسی"
        />
        <input
          className={style.input}
          type="text"
          placeholder="نام و نام خانوادگی به انگلیسی"
        />
        <input className={style.input} type="email" placeholder="ایمیل" />
        <select
          className={style.input}
          style={{ padding: "15px", width: "434px" }}
        >
          <option value="">1370</option>
        </select>
        <button
          style={{
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
        <p style={{ marginTop: "0", fontSize: "18px" }}>
          قدم به قدم مشاورتان در مسیر مهاجرت تحصیلی در کنارتان <br /> و راهنمای
          شما می باشد.
        </p>
        <img src="./src/assets/pic login.jpg" alt="" />
      </div>
    </div>
  );
}

export default Login;
