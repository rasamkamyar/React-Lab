import React from "react";
import "./index.css";

function Header(props) {
  return (
    <div className="header">
      <h1>Random User</h1>
      <nav style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
        <label
          htmlFor="SearchUser"
          style={{ fontSize: "20px", fontWeight: "600" }}
        >
          Search User
        </label>
        <input
          onChange={(e) => {
            props.filterUsers(e.target.value);
          }}
          type="text"
          id="SearchUser"
          placeholder="insert a name"
          style={{ padding: "10px 20px", borderRadius: "5px" }}
        />
      </nav>
    </div>
  );
}

export default Header;
