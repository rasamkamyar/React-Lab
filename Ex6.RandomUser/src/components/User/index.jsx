import React, { useState } from "react";
import "./index.css";

function User(props) {
  const [isShown, setIsShown] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);

  function showMore() {
    setIsShown((preState) => !preState);
  }

  function flipCard() {
    setIsFlipped((preState) => !preState);
  }

  return (
    <div className={"cardContainer"}>
      <div
        className={`card ${isShown && "showCard"} ${isFlipped && "flipCard"} `}
      >
        <img src={props.picture} className="cardImage" />
        {!isFlipped && (
          <h1 className="cardName">
            {props.title} {props.first} {props.last}
          </h1>
        )}
        {!isFlipped && (
          <p>
            <span style={{ fontWeight: "700" }}>Gender :</span> {props.gender}
            <span style={{ marginLeft: "20px", fontWeight: "700" }}>
              Age :{" "}
            </span>
            {props.age}
          </p>
        )}
        {!isFlipped && (
          <button className="cardButton" onClick={showMore}>
            {isShown ? "HIDE MORE" : "SHOW MORE"}
          </button>
        )}
        {!isFlipped && isShown && (
          <p style={{ fontSize: "12px" }}>
            <span style={{ fontWeight: "700" }}>Email : </span>
            {props.email}
          </p>
        )}
        {!isFlipped && isShown && (
          <p style={{ fontSize: "12px" }}>
            <span style={{ fontWeight: "700" }}>Phone : </span>
            {props.phone}
          </p>
        )}
        {!isFlipped && isShown && (
          <button className="moreInfoButton" onClick={flipCard}>
            MORE INFO
          </button>
        )}
        {isFlipped && (
          <p className="flipCard">
            <span style={{ fontWeight: "700" }}> Address : </span>
            {props.street.number} {props.street.name} {props.city}{" "}
            {props.country}
          </p>
        )}
        <div className="flippedBtnContainer">
          {isFlipped && (
            <button onClick={props.editItem} className="flippedBtn">
              EDIT
            </button>
          )}
          {isFlipped && (
            <button onClick={props.deleteItem} className="flippedBtn">
              DELETE
            </button>
          )}
          {isFlipped && (
            <button onClick={flipCard} className="flippedBtn">
              BACK
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default User;
