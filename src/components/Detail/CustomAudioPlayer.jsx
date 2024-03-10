import { useEffect, useRef } from "react";
import styled from "styled-components";

export default function CustomAudioPlayer({ src }) {
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.3;
    }
  }, []);

  return (
    <>
      <StyledAudio ref={audioRef} controls>
        <source src={src} type="audio/mp3" />
      </StyledAudio>
    </>
  );
}

const StyledAudio = styled.audio`
  @media screen and (max-width: ${(props) => props.theme.width.desktop}) {
    scale: 0.8;
  }
`;