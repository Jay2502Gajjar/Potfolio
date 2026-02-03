import { useRef, useState } from "react";

function Player() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  function togglePlay() {
    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setPlaying(!playing);
  }

  return (
    <div className="player">
      <audio ref={audioRef}>
        <source src="/music/song.mp3" type="audio/mpeg" />
      </audio>

      {/* LEFT IMAGE (ANCHOR) */}
      <img
        src="/images/cover.jpg"
        alt="cover"
        className="cover"
      />

      {/* MAIN CONTENT */}
      <div className="content">
        <div className="song-name">My Vibe 🎧</div>

        {playing && (
          <div className="bars">
            <span></span>
            <span></span>
            <span></span>
          </div>
        )}

        <button className="play-btn" onClick={togglePlay}>
          {playing ? "❚❚" : "▶"}
        </button>
      </div>
    </div>
  );
}

export default Player;
