import redWineImage from '../images/red-wine.png';
import whiteWineImage from '../images/white-wine.png';
import roseWineImage from '../images/rose-wine.png';

const winesData = [
  {
    id: 1,
    name: 'Reservado',
    type: 'Tinto',
    price: 40,
    image: redWineImage,
    description:
      'Um vinho tinto encorpado com notas de frutas escuras e especiarias. Perfeito para acompanhar carnes vermelhas e queijos maturados.',
  },
  {
    id: 2,
    name: 'Naturelle',
    type: 'Rosé',
    price: 45,
    image: roseWineImage,
    description:
      'Um vinho rosé delicadamente frutado com aromas de morango e notas florais. Ideal para momentos descontraídos e pratos leves.',
  },
  {
    id: 3,
    name: 'Freixenet',
    type: 'Branco',
    price: 60,
    image: whiteWineImage,
    description:
      'Um vinho branco fresco e cítrico com toques de frutas tropicais. Combina perfeitamente com frutos do mar e saladas.',
  },
];

export default winesData;
