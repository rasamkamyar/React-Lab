import { useEffect, useState } from "react";
import User from "./components/User";
import Header from "./components/Header";
import "./App.css";

function App() {
  let [users, setUsers] = useState([]);
  const [temp, setTemp] = useState(null);
  useEffect(() => {
    fetch("https://randomuser.me/api/?results=50")
      .then((res) => res.json())
      .then((data) => {
        setTemp(data.results);
        setUsers(data.results);
      });

    // return call back
    return () => {};
  }, []);

  function filterUsers(textInput) {
    const filteredUsers = temp.filter((user) => {
      const fullName = `${user.name.title} ${user.name.first} ${user.name.last}`;
      return fullName.toLowerCase().includes(textInput.toLowerCase());
    });

    setUsers(filteredUsers);
  }

  return (
    <div className="container">
      <Header filterUsers={filterUsers} />
      <div className="userContainer">
        {users.map((user, index) => (
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
        ))}
      </div>
    </div>
  );
}

export default App;
