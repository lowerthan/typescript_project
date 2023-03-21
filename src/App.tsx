import React from "react";
import axios from "axios";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    axios({
      method: "post",
      url: "/Game/ChampionRotation",
    })
    .then(res => res.data)
    .then(data => console.log(data))
  }, []);
  

  return (
    <div>
      <h1>Test</h1>
    </div>
  );
}

export default App;
