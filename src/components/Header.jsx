import React, { useRef } from 'react';
import Image1 from '../image/GalleryHighlated/Cover/1.png';
import Image2 from '../image/GalleryHighlated/Cover/2.png';
import Image3 from '../image/GalleryHighlated/Cover/3.png';
import Image4 from '../image/GalleryHighlated/Cover/4.png';
import '../style/Header.css'; // Mengimpor file CSS untuk styling galeri

function Header() {
    const galleryRef = useRef(null); // Membuat referensi ke elemen galeri agar dapat diakses langsung

    // Variabel untuk melacak status dragging (penyeretan)
    let isDragging = false; // Menentukan apakah pengguna sedang menyeret
    let startX; // Posisi X dari mouse saat pengguna menekan mouse pertama kali
    let scrollLeft; // Posisi scroll kiri dari galeri sebelum dragging dimulai

    // Fungsi saat pengguna menekan tombol mouse di dalam galeri
    const handleMouseDown = (e) => {
        isDragging = true; // Mengaktifkan status dragging
        galleryRef.current.classList.add('dragging'); // Menambahkan class 'dragging' ke elemen galeri (untuk styling jika diperlukan)
        startX = e.pageX - galleryRef.current.offsetLeft; // Menyimpan posisi X awal dari mouse relatif terhadap galeri
        scrollLeft = galleryRef.current.scrollLeft; // Menyimpan posisi scroll kiri awal dari galeri
    };

    // Fungsi untuk menghentikan dragging saat mouse dilepas atau keluar dari area galeri
    const handleMouseUpOrLeave = () => {
        isDragging = false; // Menonaktifkan status dragging
        galleryRef.current.classList.remove('dragging'); // Menghapus class 'dragging'
    };

    // Fungsi untuk menangani pergerakan mouse saat dragging aktif
    const handleMouseMove = (e) => {
        if (!isDragging) return; // Jika tidak sedang dragging, keluar dari fungsi
        e.preventDefault(); // Mencegah perilaku default (seperti memilih teks)
        const x = e.pageX - galleryRef.current.offsetLeft; // Hitung posisi X terbaru dari mouse relatif terhadap galeri
        const walk = (x - startX) * 3; // Hitung jarak pergeseran scroll (faktor pengali 3 untuk mempercepat scroll)
        galleryRef.current.scrollLeft = scrollLeft - walk; // Update posisi scroll galeri berdasarkan jarak pergeseran
    };

    // Daftar produk yang akan ditampilkan dalam galeri
    const GalleryHighlight = [
        { id: 1, name: 'Product 1', image: Image1, description: 'Description of Product 1' },
        { id: 2, name: 'Product 2', image: Image2, description: 'Description of Product 2' },
        { id: 3, name: 'Product 3', image: Image3, description: 'Description of Product 3' },
        { id: 4, name: 'Product 4', image: Image4, description: 'Description of Product 4' }
    ];

    return (
        <>
        <div 
            className="GalleryH" // Class untuk styling galeri
            ref={galleryRef} // Mereferensikan elemen galeri ke galleryRef
            onMouseDown={handleMouseDown} // Memanggil fungsi handleMouseDown saat mouse ditekan
            onMouseLeave={handleMouseUpOrLeave} // Memanggil fungsi handleMouseUpOrLeave saat mouse keluar dari area galeri
            onMouseUp={handleMouseUpOrLeave} // Memanggil fungsi handleMouseUpOrLeave saat mouse dilepas
            onMouseMove={handleMouseMove} // Memanggil fungsi handleMouseMove saat mouse digerakkan
        >
            {/* Render setiap item dari GalleryHighlight */}
            {GalleryHighlight.map((Gallery) => (
                <div className="ImageHighlight" key={Gallery.id}> {/* Class untuk styling setiap item dalam galeri */}
                    <div className="image">
                        <img src={Gallery.image} alt={Gallery.name} /> {/* Menampilkan gambar produk */}
                    </div>
                </div>
            ))}
        </div>
        <div class="marquee-container">
            <div class="marquee-line">
                <span>Dapatkan Figure dengan harga terjangkau hanya di FigureTown | Subscribe FigureTown untuk mendapatkan tawaran yang menarik | Masukan Kode AKMWFIGURE untuk mendapatkan diskon sebesar20% | NEW ADDED FIGURE UTA DARI FRANCHISE ONE PIECE | Murid UA harus tau nih penayangan Boku No Hero Movie ke 3 akan segera tayang!</span>
                <span></span>
            </div>
        </div>
        </>
    );
}

export default Header;
