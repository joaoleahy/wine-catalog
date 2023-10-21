import React, { useState, useEffect } from 'react';

const GrapesPage = () => {
  const [grapes, setGrapes] = useState([]);

  useEffect(() => {
    async function fetchGrapes() {
      try {
        const response = await fetch('/grapes');
        const data = await response.json();
        setGrapes(data);
      } catch (error) {
        console.error('Erro ao buscar tipos de uvas:', error);
      }
    }

    fetchGrapes();
  }, []);

  return (
    <div className="grapes-page">
      <h1>Tipos de Uvas</h1>
      <ul>
        {grapes.map((grape) => (
          <li key={grape._id}>{grape.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default GrapesPage;
