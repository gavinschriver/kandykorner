import React, { useState, useEffect } from "react";

export const PlayerContext = React.createContext();

export const PlayerProvider = (propsObj) => {
  const [players, setPlayers] = useState([]);

  const [editPlayerId, setEditPlayerId] = useState(0);

  useEffect(() => {
    // alert('well thats interesting')
  }, [])

  const getPlayers = () => {
    return fetch(`http://localhost:8090/players?_embed=employeesPlayers`)
      .then((res) => res.json())
      .then(setPlayers);
  };

  const addPlayer = (newPlayer) => {
    return fetch("http://localhost:8090/players", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPlayer),
    }).then(getPlayers);
  };

  const yaFired = (yaFiredId) => {
    return fetch(`http://localhost:8090/players/${yaFiredId}`, {
      method: "DELETE",
    }).then(getPlayers);
  };

  return (
    <PlayerContext.Provider
      value={{
        players,
        getPlayers,
        addPlayer,
        yaFired,
        editPlayerId,
        setEditPlayerId,
      }}
    >
      {propsObj.children}
    </PlayerContext.Provider>
  );
};
