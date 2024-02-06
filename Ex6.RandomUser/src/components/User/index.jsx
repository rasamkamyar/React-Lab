import React, { useState } from "react";
import "./index.css";

function User(props) {
  const [isShown, setIsShown] = useState(false);

  function showMore() {
    setIsShown((preState) => !preState);
  }

  return (
    <div className="cardContainer">
      <div className={`card ${isShown && "showCard"}`}>
        <img src={props.picture} className="cardImage" />
        <h1 className="cardName">
          {props.title} {props.first} {props.last}
        </h1>
        <p>
          <span style={{ fontWeight: "700" }}>Gender :</span> {props.gender}
          <span style={{ marginLeft: "20px", fontWeight: "700" }}>Age : </span>
          {props.age}
        </p>
        <button className="cardButton" onClick={showMore}>
          {isShown ? "HIDE MORE" : "SHOW MORE"}
        </button>
        {isShown && (
          <p style={{ fontSize: "12px" }}>
            <span style={{ fontWeight: "700" }}>Email : </span>
            {props.email}
          </p>
        )}
        {isShown && (
          <p style={{ fontSize: "12px" }}>
            <span style={{ fontWeight: "700" }}>Phone : </span>
            {props.phone}
          </p>
        )}
        {isShown && (
          <button className="moreInfoButton" onClick={showMore}>
            MORE INFO
          </button>
        )}
      </div>
    </div>
  );
}

export default User;
