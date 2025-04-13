import { useState } from "react";

const DaftarSurah = ({ surah, nomorAktif, setNomor, toArabicNumber }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredSurah = surah.filter(
    (item) =>
      item.namaLatin.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.arti.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.nomor.toString().includes(searchTerm)
  );

  return (
    <div className="w-full lg:w-1/4 max-h-64 lg:max-h-full overflow-y-auto border-b lg:border-b-0 border-[#48A6A7]">
      <div className="p-4 sticky top-0 rounded bg-[#48A6A7] z-10">
        <div className="relative">
          <input
            type="text"
            placeholder="Cari surah..."
            className="w-full p-2 pl-10 rounded-md focus:outline-none focus:ring-2 focus:ring-[#006A71]"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <svg
            className="absolute left-3 top-3 h-4 w-4 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>
      <div className="p-2">
        {filteredSurah.length > 0 ? (
          filteredSurah.map((item) => {
            const isActive = item.nomor === nomorAktif;
            return (
              <div
                className={`p-3 mb-2 rounded cursor-pointer transition-colors ${
                  isActive
                    ? "bg-[#e9fcff] font-medium shadow-md"
                    : "bg-[#9ACBD0] hover:bg-[#c7eef3]"
                }`}
                key={item.nomor}
                onClick={() => setNomor(item.nomor)}
              >
                <div className="flex justify-between">
                  <span className="text-gray-700">
                    {toArabicNumber(item.nomor)}.
                  </span>
                  <div className="text-right">
                    <p className="font-medium">{item.namaLatin}</p>
                    <p className="text-sm text-gray-600">{item.arti}</p>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div className="p-4 text-center text-gray-600">
            Surah tidak ditemukan
          </div>
        )}
      </div>
    </div>
  );
};

export default DaftarSurah;
