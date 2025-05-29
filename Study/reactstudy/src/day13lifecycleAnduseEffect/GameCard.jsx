import React, { useState, useEffect } from "react";

export default function GameCard() {
  const [games, setGames] = useState([]);

  const fetchGamesCard = async () => {
    return [
      { id: 1, name: "Mario", inStock: true },
      { id: 2, name: "Crash Bandicoot", inStock: true },
      { id: 3, name: "Mega Man", inStock: false },
      { id: 4, name: "Pokemon", inStock: true },
      { id: 5, name: "Sonic", inStock: false },
      { id: 6, name: "Rayman", inStock: true },
      { id: 7, name: "Donkey Kong", inStock: true },
    ];
  };

  useEffect(() => {
    const loadGames = async () => {
      try {
        const data = await fetchGamesCard();
        setGames(data);
      } catch (error) {
        console.error(error);
      }
    };
    loadGames();
  }, []);

  function handleToggle(id) {
    setGames((prevGames) =>
      prevGames.map((game) =>
        game.id === id ? { ...game, inStock: !game.inStock } : game
      )
    );
  }

  function Game({ id, name, inStock }) {
    return (
      <div>
        <div>
          {name} - {inStock ? "In Stock" : "Out of Stock"}
        </div>
        <button>Edit</button>
        <button onClick={() => handleToggle(id)}>Toggle</button>
      </div>
    );
  }

  return (
    <div>
      <h2>Games</h2>
      {games.map((game) => (
        <Game
          key={game.id}
          id={game.id}
          name={game.name}
          inStock={game.inStock}
        />
      ))}
    </div>
  );
}
