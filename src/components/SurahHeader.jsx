const SurahHeader = ({ surahInfo, toArabicNumber }) => {
  if (!surahInfo) return null;

  return (
    <div className="sticky top-0 rounded bg-[#9ACBD0] p-4 z-10 shadow-sm">
      <h2 className="text-2xl font-bold">
        {surahInfo.namaLatin} <span className="font-normal">({surahInfo.nama})</span>
      </h2>
      <p className="text-gray-700">
        {surahInfo.arti} • {surahInfo.tempatTurun} • {surahInfo.jumlahAyat} ayat
      </p>
    </div>
  );
};

export default SurahHeader;