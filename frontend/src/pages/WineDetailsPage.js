import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const WineDetailsPage = () => {
  const { id } = useParams();
  const [wine, setWine] = useState(null);

  useEffect(() => {
    async function fetchWineDetails() {
      try {
        const response = await fetch(`/wines/${id}`);
        const data = await response.json();
        setWine(data);
      } catch (error) {
        console.error('Erro ao buscar detalhes do vinho:', error);
      }
    }

    fetchWineDetails();
  }, [id]);

  if (!wine) {
    return <div>Carregando...</div>;
  }

  return (
    <div className="wine-details">
      <h1>{wine.name}</h1>
      <p>Tipo: {wine.type}</p>
      <p>Preço: R${wine.price}</p>
    </div>
  );
};

export default WineDetailsPage;
