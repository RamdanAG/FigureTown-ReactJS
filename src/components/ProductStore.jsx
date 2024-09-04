import React, { useState } from 'react';
import '../style/ProductMain.css';

// Banner Image
import Banner1 from '../image/Banner/Banner1.png';
import Banner2 from '../image/Banner/Banner2.png';

// Main Product Grid
import MainImage1 from '../image/MainProduct/1.webp';
import MainImage2 from '../image/MainProduct/2.webp';
import MainImage3 from '../image/MainProduct/3.jpg';
import MainImage4 from '../image/MainProduct/4.jpg';
import MainImage5 from '../image/MainProduct/5.jpg';
import MainImage6 from '../image/MainProduct/6.jpg';
import MainImage7 from '../image/MainProduct/7.jpg';
import MainImage8 from '../image/MainProduct/8.jpg';
import MainImage9 from '../image/MainProduct/9.jpg';
import MainImage10 from '../image/MainProduct/10.jpg';
import MainImage11 from '../image/MainProduct/11.jpg';
import MainImage12 from '../image/MainProduct/12.jpg';

const mainProducts = [
  { id: 1, name: 'The Apothecary Diaries Maomao Big Sofvimates Statue', image: MainImage1, description: '130.000', indexx: '#dajd3', Date:'Aug 24', Source: 'Anime/Manga Banpresto'},

  { id: 2, name: 'Oshi no Ko Kana Arima Air Flow Statue', image: MainImage2, description: '130.000', indexx: '#dddw2', Date:'Aug 29', Source: 'Anime/Manga Banpresto'},

  { id: 3, name: 'My Hero Academia Izuku Midoriya Special Version The Amazing Heroes Plus Statue', image: MainImage3, description: '130.000', indexx: '#1223s', Date:'Nov 3', Source: 'Anime/Manga Banpresto'},

  { id: 4, name: 'Haikyu!! Kei Tsukishima Vollyball Uniform Statue', image: MainImage4, description: '190.000', indexx: '#dswf3', Date:'Oct 13', Source: 'Anime/Manga Banpresto'},

  { id: 5, name: 'That Time I Got Reincarnated as a Slime Rimuru Tempest I Maximatic Statue', image: MainImage5, description: '130.000', indexx: '#sfwwa', Date:'Oct 13', Source: 'Anime/Manga Banpresto'},

  { id: 6, name: 'One Piece Film: Red Uta The Grandline Series DXF Statue', image: MainImage6, description: '123.000', indexx: '#ado23', Date:'mei 13', Source: 'Anime/Manga Banpresto'},

  { id: 7, name: 'Love Live! Superstar!! Kanon Shibuya Statue', image: MainImage7, description: '123.000', indexx: '#ds21s', Date:'aprils 13', Source: 'Anime/Manga Banpresto'},

  { id: 8, name: 'Tokyo Revengers Chifuryu Matsuno Vol. 4 Break Time Collection Statue', image: MainImage8, description: '203.000', indexx: '#h67hj', Date:'aprils 13', Source: 'Anime/Manga Banpresto'},

  { id: 9, name: 'One Piece Monkey D. Luffy Gear 5 FigLife! Vol. 4 Statue', image: MainImage9, description: '245.000', indexx: '#btg56', Date:'jun 13', Source: 'Anime/Manga Banpresto'},

  { id: 10, name: 'Jujutsu Kaisen Satoru Gojo Maximatic Statue', image: MainImage10, description: '300.000', indexx: '#fwefv', Date:'jun 13', Source: 'Anime/Manga Banpresto'},

  { id: 11, name: 'Chainsaw Man Special Vibration Stars Statue', image: MainImage11, description: '330.000', indexx: '#deer4', Date:'jun 12', Source: 'Anime/Manga Banpresto'},

  { id: 12, name: 'Spy x Family Anya Forger & Bond Forger II Break Time Collection Statue', image: MainImage12, description: '320.000', indexx: '#anya2', Date:'feb 12', Source: 'Anime/Manga Banpresto'},
];

function ProductStore() {
  const [visibleProducts, setVisibleProducts] = useState(8); // Initially display 8 products
  const [priceOpen, setPriceOpen] = useState(true);
  const [characterOpen, setCharacterOpen] = useState(true);
  const [animeOpen, setAnimeOpen] = useState(true);

  const loadMoreProducts = () => {
    setVisibleProducts((prevVisibleProducts) => prevVisibleProducts + 4); // Load 4 more products
  };

  return (
    <div className="product-store">
      <aside className="sidebar">
        <div className="filter-section">
          <h3 onClick={() => setPriceOpen(!priceOpen)}>Price {priceOpen ? '▼' : '▲'}</h3>
          {priceOpen && (
            <ul>
              <li><input type="checkbox" /> Under Rp 150.000</li>
              <li><input type="checkbox" /> Rp 150.000 - Rp 200.000</li>
              <li><input type="checkbox" /> Rp200.000 - Rp 300.000</li>
              <li><input type="checkbox" /> Rp 400.000 - Rp 500.000</li>
              <li><input type="checkbox" />Rp 500.000 - Rp 1.000.000</li>
            </ul>
          )}
        </div>

        <div className="filter-section">
          <h3 onClick={() => setCharacterOpen(!characterOpen)}>Character {characterOpen ? '▼' : '▲'}</h3>
          {characterOpen && (
            <ul>
              <li><input type="checkbox" />Frieren</li>
              <li><input type="checkbox" />MaoMao</li>
              <li><input type="checkbox" />Luffy D Monkey</li>
            </ul>
          )}
        </div>

        <div className="filter-section">
          <h3 onClick={() => setAnimeOpen(!animeOpen)}>Anime {animeOpen ? '▼' : '▲'}</h3>
          {animeOpen && (
            <ul>
              <li><input type="checkbox" />Tensura</li>
              <li><input type="checkbox" />Kimetsu No Yaiba</li>
              <li><input type="checkbox" />Attack On Titan</li>
            </ul>
          )}
        </div>
      </aside>
      
      <div className="main-product">
        <div className="headingMain">
            <h1>Semua Produk</h1>
            <a href="#">Lihat Selengkapnya</a>
        </div>
        <div className="product-grid">
          {mainProducts.slice(0, visibleProducts).map((product) => (
            <div className="product-card" key={product.id}>
              <img src={product.image} alt={product.name} className="product-image" />
              <div className="product-info">
                <button className="btn-buy">
                  <a href="#" className="link-buy">Order: Add to cart</a>
                </button>
                <h3>{product.name}</h3>
                <p>kode: {product.indexx}</p>
                <p><b>Rp</b>: {product.description}</p>
              </div>
            </div>
          ))}
        </div>

        {visibleProducts < mainProducts.length && (
          <div className="load-more">
            <button onClick={loadMoreProducts}>Load More</button>
          </div>
        )}

        <div className="banner-container">
          <img src={Banner1} alt="Banner 1" className="banner-image" />
          <img src={Banner2} alt="Banner 2" className="banner-image" />
        </div>
      </div>
    </div>
  );
}

export default ProductStore;
