import React from "react";
import "./index.css";

function Header() {
  return (
    <div className="header">
      <h1>Random User</h1>
      <nav style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
        <label htmlFor="SearchUser">Search User</label>
        <input type="text" id="SearchUser" style={{ padding: "10px 20px",borderRadius:"5px" }} />
      </nav>
    </div>
  );
}

export default Header;
