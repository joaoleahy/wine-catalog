import React from 'react';

const GrapeAndFlavorPage = () => {
  const grapesAndFlavorsData = [
    {
      grape: 'Cabernet Sauvignon',
      description: 'Esta uva é conhecida por seus sabores de groselha, pimentão verde e especiarias.',
    },
    {
      grape: 'Chardonnay',
      description: 'Uva branca conhecida por produzir vinhos com notas de maçã, abacaxi e manteiga.',
    },
    {
      grape: 'Merlot',
      description: 'Uva tinta com sabores de amora, ameixa, ervas e chocolate.',
    },
    {
      grape: 'Sauvignon Blanc',
      description: 'Uva branca com aromas de limão, lima e maracujá, além de notas herbáceas.',
    },
    {
      grape: 'Syrah (também conhecida como Shiraz)',
      description: 'Uva tinta com sabores de amora, pimenta preta, tabaco e couro.',
    },
  ];

  return (
    <div className="grape-and-flavor-page">
      <h1>Uvas e Sabores de Vinhos</h1>
      <div className="grape-list">
        {grapesAndFlavorsData.map((item, index) => (
          <div key={index} className="grape-item">
            <h2>{item.grape}</h2>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GrapeAndFlavorPage;