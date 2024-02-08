import { useEffect, useRef } from "react";

export default function CustomAudioPlayer({ src }) {
  const audioRef = useRef(null);

  useEffect(() => {
    // volume 속성 default 0.1 조정 (귀 터질 뻔함;;)
    if (audioRef.current) {
      audioRef.current.volume = 0.1;
    }
  }, []);

  return (
    <>
      <audio ref={audioRef} controls volume="0.1">
        <source src={src} type="audio/mp3" />
      </audio>
    </>
  );
}