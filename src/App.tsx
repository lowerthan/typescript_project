import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

function App() {
  const [SearchName, setSearchName] = useState("");

  const handleSearchNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchName(event.target.value);
  }

  function searchName() {
    axios({
      method: "post",
      url: "/Game/NameToUserData",
      params: {
        name: SearchName
      }
    })
  }

  useEffect(() => {
    axios({
      method: "GET",
      url: "/Test/Test"
    })
    .then(res => {
      console.log(res.data)
    })
    
    
    
  }, []);
  

  return (
    <div>
      <input type="text" value={SearchName} onChange={handleSearchNameChange}/>
      <button onClick={searchName}>Search</button>
    </div>
  );
}

export default App;
