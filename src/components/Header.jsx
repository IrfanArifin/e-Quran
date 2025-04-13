const Header = () => {
  return (
    <div className="h-16 mb-3 flex items-center justify-center bg-[#48A6A7] shrink-0">
      <div className="flex items-center gap-3">
        {/* Gambar di samping kiri */}
        <img
          src="/images/quran-icon.png" // Sesuaikan path gambar Anda
          alt="Quran Icon"
          className="h-10 w-10 object-contain"
        />
        <h1 className="text-xl sm:text-3xl font-bold text-[#e9fcff]">
          e-Quran
        </h1>
      </div>
    </div>
  );
};

export default Header;
