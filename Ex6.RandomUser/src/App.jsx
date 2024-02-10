import { useEffect, useState } from "react";
import User from "./components/User";
import Header from "./components/Header";
import Skeleton from "./components/Skeleton";
import "./App.css";

function App() {
  let [users, setUsers] = useState([]);
  const [temp, setTemp] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 10000);

    fetch("https://randomuser.me/api/?results=50")
      .then((res) => res.json())
      .then((data) => {
        setTemp(data.results);
        setUsers(data.results);
      });

    // return call back
    return () => clearTimeout(timer);
  }, []);

  function filterUsers(textInput) {
    const filteredUsers = temp.filter((user) => {
      const fullName = `${user.name.title} ${user.name.first} ${user.name.last}`;
      return fullName.toLowerCase().includes(textInput.toLowerCase());
    });

    setUsers(filteredUsers);
  }

  function handleDelete(index) {
    setUsers((prev) => prev.filter((_, i) => i !== index));
  }

  return (
    <div className="container">
      <Header filterUsers={filterUsers} />
      {users.length === 0 && (
        <div className="userContainer">
          {[...new Array(50)].map(() => (
            <Skeleton height={100} width={300} />
          ))}
        </div>
      )}

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
            deleteItem={() => handleDelete(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
