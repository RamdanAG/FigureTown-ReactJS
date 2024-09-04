import React from 'react';
import '../style/BySeries.css';

import Image1 from '../image/Series/1.jpg'
import Image2 from '../image/Series/2.webp'
import Image3 from '../image/Series/3.jpg'
import Image4 from '../image/Series/4.jpg'
import Image5 from '../image/Series/5.jpg'
import Image6 from '../image/Series/6.jpg'
import Image7 from '../image/Series/7.jpg'
import Image8 from '../image/Series/8.jpg'
import Image9 from '../image/Series/9.jpg'
import Image10 from '../image/Series/10.jpg'



const seriesData = [
  { id: 1, name: 'Love Live', image: Image1 },
  { id: 2, name: 'Gundam', image: Image2 },
  { id: 4, name: 'Jujutsu Kaisen', image: Image3 },
  { id: 3, name: 'Kimetsu No Yaiba', image: Image4 },
  { id: 5, name: 'Oshi No Ko', image: Image5 },
  { id: 6, name: 'Frieren: Beyond Journey End', image: Image6 },
  { id: 7, name: 'Tokyo Revengers', image: Image7},
  { id: 8, name: 'Fairy Tail', image: Image8},
  { id: 9, name: 'Attck On titan', image: Image9 },
  { id: 10, name: 'Bang Dream', image: Image10 }
];

const BySeries = () => {
  return (
    <>
    <div className="headingSeries">
      <h1>Semua Produk</h1>
      <a href="#">Lihat Selengkapnya</a>
    </div>
    <div className="series-container">
      {seriesData.map((series) => (
        <div className="series-item" key={series.id}>
          <img src={series.image} alt={series.name} className="series-image" />
          <span className="series-name">{series.name}</span>
        </div>
      ))}
    </div>
    </>
  );
};

export default BySeries;
