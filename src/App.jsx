import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Stage, Html } from '@react-three/drei';
import './App.css';

function MonasModel() {
  const { scene } = useGLTF('/monas_lowpoly.glb'); 
  return <primitive object={scene} />;
}

export default function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <div className="logo">MONAS 3D </div>
        <nav>
          <ul>
            <li><a href="#beranda" className="active">Beranda</a></li>
            <li><a href="#sejarah">Sejarah</a></li>
            <li><a href="#filosofi">Filosofi</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section id="beranda" className="hero-section">
          
          <div className="info-content">
            <h1>MONUMEN NASIONAL</h1>
            <h2>Ikon Abadi Sejarah Indonesia</h2>

            <div className="text-blocks">
              <p>
                Monumen Nasional, atau yang populer disingkat <span className="highlight">Monas</span>, 
                adalah monumen peringatan setinggi 132 meter yang terletak tepat di tengah Lapangan Medan Merdeka, Jakarta Pusat.
              </p>
              <p>
                Tugu ini dimahkotai lidah api yang dilapisi lembaran emas, melambangkan semangat 
                perjuangan rakyat Indonesia yang menyala-nyala.
              </p>
            </div>

            <div className="fact-cards">
              <div className="fact-card">
                <span className="icon">📐</span>
                <h3>Tinggi</h3>
                <p>132 m</p>
              </div>
              <div className="fact-card">
                <span className="icon">✨</span>
                <h3>Emas</h3>
                <p>35 kg</p>
              </div>
              <div className="fact-card">
                <span className="icon">🏛️</span>
                <h3>Selesai</h3>
                <p>1975</p>
              </div>
            </div>
          </div>

          <div className="interactive-3d-container">
            <div className="canvas-wrapper">
              <Canvas shadows camera={{ position: [0, 0, 150], fov: 45 }}>
                <Suspense fallback={<Html center><span className="loading-text">Memuat 3D Monas...</span></Html>}>
                  <Stage environment="city" intensity={0.5}>
                    <MonasModel />
                  </Stage>
                </Suspense>
                <OrbitControls autoRotate autoRotateSpeed={1} enableZoom={true} />
              </Canvas>
            </div>
          </div>
        </section>
        <section id="sejarah" className="content-section">
          <div className="section-header">
            <h2>Sejarah Pembangunan</h2>
            <div className="divider"></div>
          </div>
          <div className="content-body">
            <p>
              Pembangunan Monas dimulai pada tanggal 17 Agustus 1961 di bawah perintah presiden Sukarno, 
              dan dibuka untuk umum pada tanggal 12 Juli 1975. Tugu ini dirancang oleh arsitek Indonesia Soedarsono, Frederich Silaban dan Ir. Rooseno.
            </p>
            <p>
              Tujuan utama pembangunan monumen ini adalah untuk mengenang dan melestarikan perjuangan bangsa 
              Indonesia pada masa revolusi kemerdekaan 1945, agar terus membangkitkan inspirasi dan semangat patriotisme 
              generasi penerus bangsa.
            </p>
          </div>
        </section>

        <section id="filosofi" className="content-section alternate-bg">
          <div className="section-header">
            <h2>Filosofi Arsitektur</h2>
            <div className="divider"></div>
          </div>
          <div className="content-body">
            <p>
              Bentuk Monas sangat kental dengan filosofi budaya Indonesia. Rancang bangun tugu Monas 
              berdasarkan pada konsep pasangan universal yang abadi; <strong>Lingga dan Yoni</strong>. 
            </p>
            <p>
              Tugu obelisk yang menjulang tinggi adalah Lingga yang melambangkan laki-laki, elemen maskulin yang bersifat aktif dan positif, serta melambangkan siang hari. Sementara pelataran cawan landasan obelisk adalah Yoni yang melambangkan perempuan, elemen feminin yang pasif dan negatif, serta melambangkan malam hari.
            </p>
          </div>
        </section>

      </main>

      <footer className="app-footer">
        <div className="footer-content">
          <h3>Monas 3D</h3>
          <p>Project UAS Sistem Multimedia</p>
          <p>202531160 Ilham Purnama Hadi</p>
        </div>
      </footer>
    </div>
  );
}