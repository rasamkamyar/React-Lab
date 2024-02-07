import { useEffect, useState } from "react";
import User from "./components/User";
import Header from "./components/Header";
import "./App.css";

function App() {
  let [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://randomuser.me/api/?results=50")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.results[0]);
        setUsers(
          data.results.map((user, index) => (
            <User
              gender={user.gender}
              age={user.dob.age}
              {...user.name}
              {...user.location}
              email={user.email}
              phone={user.phone}
              picture={user.picture.large}
              key={index}
            />
          ))
        );
      });

    // return call back
    return () => {};
  }, []);
  return (
    <div className="container">
      <Header />
      <div className="userContainer">{users}</div>
    </div>
  );
}

export default App;
