import React from 'react';
import { Link } from 'react-router-dom';
import WineItem from '../components/common/WineItem';
import redWineImage from '../images/red-wine.png';
import whiteWineImage from '../images/white-wine.png';
import roseWineImage from '../images/rose-wine.png';
import '../styles/WineCatalog.css';

const winesData = [
  { id: 1, name: 'Reservado', type: 'Tinto', price: 40, image: redWineImage },
  { id: 2, name: 'Naturelle', type: 'Rosé', price: 45, image: roseWineImage },
  { id: 3, name: 'Freixenet', type: 'Branco', price: 60, image: whiteWineImage },
];

const WineCatalog = () => {
  return (
    <div className="wine-catalog">
      <h1>Catálogo de Vinhos</h1>
      <div className="wine-list">
        {winesData.map((wine) => (
          <Link to={`/wine/${wine.id}`} key={wine.id} className="wine-link">
            <WineItem wine={wine}>Detalhes</WineItem>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default WineCatalog;
