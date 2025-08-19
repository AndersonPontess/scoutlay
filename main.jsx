import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';

function App() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetch(import.meta.env.VITE_API_BASE + '/api/games')
      .then(r => r.json())
      .then(data => {
        if (data.matches) setGames(data.matches);
      });
  }, []);

  return (
    <div style={{ fontFamily: 'sans-serif', padding: 20 }}>
      <h1>⚽ ScoutLay - Jogos</h1>
      {games.length === 0 && <p>Carregando jogos...</p>}
      <ul>
        {games.map((m, idx) => (
          <li key={idx}>
            {m?.homeTeam?.name} vs {m?.awayTeam?.name} - {m?.status}
          </li>
        ))}
      </ul>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
