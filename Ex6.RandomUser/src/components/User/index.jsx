import React from "react";
import "./index.css";

function User(props) {
  //   console.log(props);
  return (
    <div className="card">
      <img src={props.picture} className="cardImage" />
      <h1 className="cardName">
        {props.title} {props.first} {props.last}
      </h1>
      <p>
        <span style={{ fontWeight: "700" }}>gender :</span> {props.gender}
        <span style={{ marginLeft: "20px", fontWeight: "700" }}>age : </span>
        {props.age}
      </p>
      <button className="cardButton">SHOW MORE</button>
    </div>
  );
}

export default User;
