import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const StyledAudio = styled.audio`
  display: none; /* 기본 오디오 컨트롤 숨기기 */
`;

const PlayButton = styled.button`
  background-color: #3498db;
  color: #fff;
  padding: 8px 16px;
  border: none;
  cursor: pointer;
`;

export default function CustomAudioPlayer({ src }) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    // 동적으로 volume 속성을 조절
    if (audioRef.current) {
      audioRef.current.volume = 0.1;
    }
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <>
      <StyledAudio ref={audioRef}>
        <source src={src} type="audio/mp3" />
      </StyledAudio>
      <PlayButton onClick={togglePlay}>{isPlaying ? "Pause" : "Play"}</PlayButton>
    </>
  );
}