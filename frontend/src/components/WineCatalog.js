import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import WineItem from './WineItem';
import '../styles/WineCatalog.css';

const WineCatalog = () => {
  const [wines, setWines] = useState([]);
  const [selectedWine, setSelectedWine] = useState(null);

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

  const handleSelectWine = (wine) => {
    setSelectedWine(wine);
  };

  return (
    <div className="wine-catalog">
      <h1>Catálogo de Vinhos</h1>
      <div className="wine-list">
        {wines.map((wine) => (
          <div key={wine._id} className="wine-item-container">
            <WineItem wine={wine} onSelect={() => handleSelectWine(wine)} />
            <div className="buttons-container">
              <Link to={`/wine/${wine._id}`}>
                <button>Ver Detalhes</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <Link to="/about">Sobre Nós</Link>
      <Link to="/grapes">
        <button className="discover-button">Descubra as Uvas</button>
      </Link>
      {selectedWine && (
        <div className="selected-wine">
          <h2>Detalhes do Vinho Selecionado</h2>
          <p>{selectedWine.name}</p>
          <p>{selectedWine.type}</p>
          <p>Preço: R${selectedWine.price}</p>
          <button onClick={() => setSelectedWine(null)}>Fechar Detalhes</button>
        </div>
      )}
    </div>
  );
};

export default WineCatalog;
