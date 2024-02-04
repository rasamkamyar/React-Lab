import React from "react";
import { useState } from "react";
// import React from "react";
// import { useState } from "react";
import Data from "./users.json";
import Card from "./Card";
import "./index.css";

function User() {
  const [allData, setAllData] = useState(Data);
  const [info, setInfo] = useState(allData);

  const mappedData = info.map((item) => (
    <Card name={item.name.first} gender={item.gender} picture={item.picture} />
  ));

  function handleGender(gender) {
    const filtered = allData.filter((item) => item.gender === gender);
    setInfo(filtered);
  }
  return (
    <div className="userContainer">
      <div className="btns">
        <button onClick={() => handleGender("male")}>MALE</button>
        <button onClick={() => handleGender("female")}>FEMALE</button>
      </div>
      <div className="cardContainer">{mappedData}</div>
    </div>
  );
}

export default User;
