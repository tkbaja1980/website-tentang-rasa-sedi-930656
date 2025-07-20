"use client";

import type { NextPage } from 'next';
import React from 'react';

// --- Helper Components (Self-Contained) ---

// Icon for "Bicara" (Talk)
const ChatBubbleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mb-4 text-amber-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
  </svg>
);

// Icon for "Kekuatan" (Strength)
const HeartIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mb-4 text-amber-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
  </svg>
);

// Icon for "Harapan" (Hope)
const LightBulbIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mb-4 text-amber-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
  </svg>
);

// Icon for "Aksi" (Action)
const SparklesIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mb-4 text-amber-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
    </svg>
);


const SadHusbandPage: NextPage = () => {
  return (
    <div className="bg-gray-900 text-gray-200 font-sans antialiased">
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1585394331239-903c04215889?q=80&w=2574&auto=format&fit=crop" 
          alt="Seorang suami merenung di dekat jendela" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white leading-tight mb-4 animate-fade-in-down">
            Saat Beban Terasa di Pundak
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto animate-fade-in-up">
            Sebuah ruang hening untuk para suami dan ayah yang berjuang dalam diam, memikul harapan keluarga dengan cinta yang tak terukur.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main>
        {/* Introduction Section */}
        <section className="py-20 md:py-32 bg-gray-900">
          <div className="container mx-auto px-6 text-center max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-amber-300 mb-6">Perasaan yang Tak Terucap</h2>
            <p className="text-lg text-gray-400 leading-relaxed">
              Melihat senyum istri dan tawa anak adalah kebahagiaan terbesar. Namun, di balik senyum itu, terkadang ada rasa perih yang tersembunyi. Rasa bersalah karena merasa belum bisa memberi yang terbaik. Keinginan untuk membahagiakan mereka, terhalang oleh kenyataan yang kadang tak sejalan. Ini bukan tentang kelemahan, ini tentang dalamnya cinta seorang pria.
            </p>
          </div>
        </section>

        {/* Steps Section */}
        <section className="py-20 md:py-24 bg-gray-800">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-semibold text-white">Anda Tidak Sendirian dalam Perjuangan Ini</h2>
              <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto">Ada langkah-langkah kecil penuh makna yang bisa menjadi cahaya.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              
              {/* Card 1: Bicara */}
              <div className="bg-gray-900 p-8 rounded-lg text-center transform hover:scale-105 transition-transform duration-300">
                <ChatBubbleIcon />
                <h3 className="text-xl font-bold text-white mb-2">Bicaralah dari Hati</h3>
                <p className="text-gray-400">Pasanganmu adalah rekan seperjuangan. Berbagi beban bukan berarti lemah, tapi memperkuat ikatan. Kejujuranmu adalah hadiah terindah.</p>
              </div>

              {/* Card 2: Kekuatan */}
              <div className="bg-gray-900 p-8 rounded-lg text-center transform hover:scale-105 transition-transform duration-300">
                <HeartIcon />
                <h3 className="text-xl font-bold text-white mb-2">Cinta Tak Ternilai</h3>
                <p className="text-gray-400">Kehadiranmu, pelukanmu, dan waktumu adalah harta yang tak bisa dibeli. Itulah yang paling berarti bagi istri dan anakmu.</p>
              </div>

              {/* Card 3: Aksi */}
              <div className="bg-gray-900 p-8 rounded-lg text-center transform hover:scale-105 transition-transform duration-300">
                <SparklesIcon />
                <h3 className="text-xl font-bold text-white mb-2">Fokus pada yang Terkendali</h3>
                <p className="text-gray-400">Di tengah ketidakpastian, fokus pada hal-hal kecil yang bisa kamu lakukan hari ini. Satu langkah kecil setiap hari akan membangun jalan ke depan.</p>
              </div>

              {/* Card 4: Harapan */}
              <div className="bg-gray-900 p-8 rounded-lg text-center transform hover:scale-105 transition-transform duration-300">
                <LightBulbIcon />
                <h3 className="text-xl font-bold text-white mb-2">Jaga Api Harapan</h3>
                <p className="text-gray-400">Setiap malam yang gelap akan selalu diikuti fajar yang cerah. Badai ini akan berlalu. Percayalah pada kekuatan dirimu dan masa depan.</p>
              </div>

            </div>
          </div>
        </section>

        {/* Message of Hope Section */}
        <section className="py-20 md:py-32 bg-gray-900">
          <div className="container mx-auto px-6 text-center max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-amber-300 mb-6">Sebuah Pesan Untukmu, Pejuang Keluarga</h2>
            <blockquote className="text-xl md:text-2xl text-gray-300 italic border-l-4 border-amber-300 pl-6">
              "Nilaimu sebagai seorang suami dan ayah tidak diukur dari tebalnya dompetmu, tetapi dari luasnya hatimu. Kekuatanmu bukan pada apa yang kau beri, tapi pada bagaimana kau mencintai. Teruslah berjuang, karena cintamu adalah pelita terterang bagi keluargamu."
            </blockquote>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 py-8">
        <div className="container mx-auto px-6 text-center text-gray-500">
          <p>Dibuat dengan empati untuk para pejuang sunyi.</p>
          <p className="text-sm mt-2">&copy; {new Date().getFullYear()} Ruang Hening. Semua hak dilindungi.</p>
        </div>
      </footer>

      {/* CSS for animations if not using a library */}
      <style jsx global>{`
        @keyframes fade-in-down {
          0% {
            opacity: 0;
            transform: translateY(-20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fade-in-up {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-down {
          animation: fade-in-down 1s ease-out forwards;
        }
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out 0.5s forwards;
          opacity: 0; /* Start hidden */
        }
      `}</style>
    </div>
  );
};

export default SadHusbandPage;