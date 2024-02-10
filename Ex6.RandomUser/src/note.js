function App() {
    // ... (existing code)
  
    const [editIndex, setEditIndex] = useState(null);
    const [editedName, setEditedName] = useState("");
  
    // ... (existing code)
  
    function handleEdit(index) {
      setEditIndex(index);
      setEditedName(users[index].name.first); // Assuming first name is being edited
    }
  
    function handleSaveEdit() {
      if (editIndex !== null) {
        const updatedUsers = [...users];
        updatedUsers[editIndex].name.first = editedName; // Update the first name
        setUsers(updatedUsers);
        setEditIndex(null);
        setEditedName("");
      }
    }
  
    return (
      <div className="container">
        {/* ... (existing code) */}
        <div className="userContainer">
          {users.map((user, index) => (
            <User
              // ... (other props)
              key={index}
              deleteItem={() => handleDelete(index)}
              editItem={() => handleEdit(index)} // Pass the index to handleEdit
            />
          ))}
        </div>
        {editIndex !== null && (
          <div>
            <input
              type="text"
              value={editedName}
              onChange={(e) => setEditedName(e.target.value)}
            />
            <button onClick={handleSaveEdit}>Save</button>
          </div>
        )}
      </div>
    );
  }
  