import React from 'react';
import { useParams } from 'react-router-dom';
import WineDescription from '../components/common/WineDescription';
import winesData from '../data/winesData';
import '../styles/WineDetailsPage.css';

const WineDetailsPage = () => {
  const { id } = useParams();
  const selectedWine = winesData.find((wine) => wine.id === parseInt(id));

  return (
    <div className="wine-details">
      {selectedWine ? (
        <div>
          <WineDescription selectedWine={selectedWine} />
          {/* Adicione aqui outros detalhes específicos do vinho, se necessário */}
        </div>
      ) : (
        <p>Vinho não encontrado.</p>
      )}
    </div>
  );
};

export default WineDetailsPage;
