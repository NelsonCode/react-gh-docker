import React, { useEffect, useState } from "react";
import "./style.css";

function App() {
  const [Characters, setCharacters] = useState([]);

  useEffect(async () => {
    const uri = "https://rickandmortyapi.com/api/character";
    const response = await (await fetch(uri)).json();

    setCharacters(response.results);
  }, []);

  return (
    <div>
      {Characters.map(({ name, id }) => (
        <div className="center" key={id}>
          <div className="box">
            <p>{name}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;