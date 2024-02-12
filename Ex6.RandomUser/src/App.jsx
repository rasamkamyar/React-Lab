import { useEffect, useState } from "react";
import User from "./components/User";
import Header from "./components/Header";
import Skeleton from "./components/Skeleton";
import Login from "./components/Login";
import "./App.css";

function App() {
  const [showLogin, setShowLogin] = useState(false);
  let [users, setUsers] = useState([]);
  const [temp, setTemp] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  function handleLogin() {
    setShowLogin(!showLogin);
  }

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
    setUsers((prev) => prev.filter((item, i) => i !== index));
  }

  function handleEdit(index) {
    alert("ediiit");
  }

  return (
    <div className="container">
      <button onClick={handleLogin} style={{ padding: "5px", width:"10%",cursor:"pointer" }}>
        {showLogin ? "NUMBER" : "LOGIN"}
      </button>
      {showLogin ? (
        <Login />
      ) : (
        <div>
          <Header filterUsers={filterUsers} />
          {users.length === 0 && (
            <div className="userContainer">
              {[...new Array(50)].map((item, index) => (
                <Skeleton key={index} />
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
                editItem={handleEdit}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
