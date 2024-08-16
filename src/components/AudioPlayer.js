import React, { useRef, useState } from "react";

const AudioPlayer = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = () => {
    if (audioRef.current) {
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((error) => {
          console.error("Failed to play the audio:", error);
        });
    }
  };

  return (
    <div>
      <h1>Audio Player</h1>
      <button onClick={handlePlayClick}>{isPlaying ? "Pause" : "Play"}</button>
      <audio ref={audioRef} src="/audio/song.mp3" />
    </div>
  );
};

export default AudioPlayer;
