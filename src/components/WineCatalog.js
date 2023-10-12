import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import WineItem from './WineItem';
import WineDescription from './WineDescription'; // Certifique-se de importar WineDescription corretamente
import winesData from '../data/WinesData';
import '../styles/WineCatalog.css';

const WineCatalog = () => {
  const [selectedWine, setSelectedWine] = useState(null);

  const onSelect = (wine) => {
    setSelectedWine(wine);
  };

  return (
    <div className="wine-catalog">
      <h1>Catálogo de Vinhos</h1>
      <div className="wine-list">
        {winesData.map((wine) => (
          <Link to={`/wine/${wine.id}`} key={wine.id} className="wine-link">
            <WineItem wine={wine} onSelect={onSelect}>
              Detalhes
            </WineItem>
          </Link>
        ))}
      </div>
      <WineDescription selectedWine={selectedWine} />
      <Link to="/about">Sobre Nós</Link>
    </div>
  );
};

export default WineCatalog;
