import React from 'react';
import '../styles/WineDescription.css';

const WineDescription = ({ selectedWine }) => {
  return (
    <div className="wine-description">
      {selectedWine ? (
        <div>
          <img src={selectedWine.image} alt={selectedWine.name} className="wine-thumbnail" />
          <h2>{selectedWine.name}</h2>
          <p>Tipo: {selectedWine.type}</p>
          <p>Preço: R${selectedWine.price}</p>
          <p>Descrição: {selectedWine.description}</p>
          {selectedWine.children && <div className="additional-info">{selectedWine.children}</div>}
        </div>
      ) : (
        <p>Selecione um vinho para ver a descrição detalhada.</p>
      )}
    </div>
  );
};

export default WineDescription;
