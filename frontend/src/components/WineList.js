import React, { useState, useEffect } from 'react';

const WineList = () => {
  const [wines, setWines] = useState([]);

  useEffect(() => {
    async function fetchWines() {
      try {
        const response = await fetch('/wines');
        const data = await response.json();
        setWines(data);
      } catch (error) {
        console.error('Erro ao buscar vinhos:', error);
      }
    }

    fetchWines();
  }, []);

  return (
    <div>
      <h1>Catálogo de Vinhos</h1>
      <ul>
        {wines.map((wine) => (
          <li key={wine._id}>
            <strong>{wine.name}</strong> - {wine.type}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WineList;
