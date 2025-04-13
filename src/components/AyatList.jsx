import { useState } from "react";

const AyatList = ({ ayat, toArabicNumber }) => {
  const [playingAudio, setPlayingAudio] = useState(null);

  const toggleAudio = (audioUrl, ayatNumber) => {
    const audioElement = document.getElementById("ayatAudio");

    if (playingAudio === ayatNumber) {
      audioElement.pause();
      audioElement.currentTime = 0;
      setPlayingAudio(null);
    } else {
      audioElement.src = audioUrl;
      audioElement.play();
      setPlayingAudio(ayatNumber);

      audioElement.onended = () => {
        setPlayingAudio(null);
      };
    }
  };

  return (
    <div className="p-2 sm:p-4 space-y-4">
      <audio id="ayatAudio" />
      {ayat.map((item, index) => {
        const ayatNumber = index + 1;
        const isPlaying = playingAudio === ayatNumber;

        return (
          <div
            key={index}
            className="bg-[#e9fcff] p-4 rounded-lg shadow hover:shadow-md transition-shadow duration-200"
          >
            <div className="flex justify-between items-center mb-3">
              <button
                onClick={() => toggleAudio(item.audio["01"], ayatNumber)}
                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
              >
                {isPlaying ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#EA3323"
                  >
                    <path d="M320-320h320v-320H320v320ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83 31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#48A6A7"
                  >
                    <path d="m380-300 280-180-280-180v360ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83 31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
                  </svg>
                )}
              </button>
            </div>

            {/* Teks Arab dengan Nomor Ayat */}
            <p className="text-3xl text-right mb-3 font-arabic leading-loose">
              {item.teksArab}
              <span className="border-2 border-[#006A71] text-[#006A71] px-2 py-1 rounded-full text-lg font-arabic mr-2">
                {toArabicNumber(ayatNumber)}
              </span>
            </p>

            {/* Teks Latin */}
            {item.teksLatin && (
              <p className="text-lg italic text-gray-600 mb-3">
                {item.teksLatin}
              </p>
            )}

            {/* Teks Indonesia dengan Nomor Ayat */}
            <p className="text-gray-700">
              <span className="font-bold text-[#006A71] mr-2">
                {ayatNumber}.
              </span>
              {item.teksIndonesia}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default AyatList;
