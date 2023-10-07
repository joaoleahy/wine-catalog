import React from 'react';

const WineItem = ({ wine, onSelect, children }) => {
  const handleClick = () => {
    onSelect(wine);
  };

  return (
    <div className="wine-item" onClick={handleClick}>
      <h3>{wine.name}</h3>
      <img src={wine.image} alt={wine.name} className="wine-thumbnail" />
      <p>Tipo: {wine.type}</p>
      <p>Preço: R${wine.price}</p>
      <button>{children}</button>
    </div>
  );
};

export default WineItem;
