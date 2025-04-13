import { useState, useEffect } from "react";
import './App.css';
import Header from "./components/Header";
import DaftarSurah from "./components/DaftarSurah";
import SurahHeader from "./components/SurahHeader";
import AyatList from "./components/AyatList";

function App() {
  const [surah, setSurah] = useState([]);
  const [nomor, setNomor] = useState(1);
  const [ayat, setAyat] = useState([]);
  const [surahInfo, setSurahInfo] = useState(null);

  // Fungsi konversi angka ke angka Arab
  const toArabicNumber = (num) => {
    const arabicNumbers = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
    return num.toString().replace(/\d/g, (digit) => arabicNumbers[digit]);
  };

  useEffect(() => {
    fetch("https://equran.id/api/v2/surat")
      .then((res) => res.json())
      .then((data) => setSurah(data.data));
  }, []);

  useEffect(() => {
    fetch(`https://equran.id/api/v2/surat/${nomor}`)
      .then((res) => res.json())
      .then((data) => {
        setAyat(data.data.ayat);
        setSurahInfo(data.data);
      });
  }, [nomor]);

  return (
    <div className="flex flex-col h-screen bg-[#F2EFE7]">
      {/* Header */}
      <Header/>
      {/* Main Content Area */}
      <div className="flex flex-col lg:flex-row flex-1 overflow-hidden">
      {/* Daftar Surah - Left Sidebar */}
        <DaftarSurah 
          surah={surah} 
          nomorAktif={nomor} 
          setNomor={setNomor} 
          toArabicNumber={toArabicNumber} 
        />
        {/* Ayat-Ayat - Main Content */}
        <div className=" flex-1 overflow-y-auto">
          {/* Header Surah Info */}
          <SurahHeader surahInfo={surahInfo} toArabicNumber={toArabicNumber} />
          {/* Ayat List */}
          <AyatList 
            ayat={ayat} 
            toArabicNumber={toArabicNumber} 
          />
        </div>
      </div>

      {/* Footer */}
      <div className="h-8 bg-[#48A6A7] flex items-center justify-center shrink-0">
        <p className="text-sm">Powered by Irfan Arifin</p>
      </div>
    </div>
  );
}

export default App;