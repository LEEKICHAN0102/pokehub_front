import { AboutBack, AboutContainer, ETC } from "./style";
import { FaGithub } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function About() {
  const navigate = useNavigate();
  
  const handleBack = () => {
    navigate(-1);
  }

  return(
    <AboutContainer>
      <span>
        본 웹사이트는 영리적인 목적이 아닌 개인 포트폴리오, 학습 용으로만 제작 되었음을 알립니다.
        또한 모든 포켓몬 정보, 이벤트 게시글등의 대한 저작권은
        <a href="https://corporate.pokemon.co.jp/" target="_blank" rel="noopener noreferrer">
          https://corporate.pokemon.co.jp
        </a>
        ,
        <a href="https://pokemonkorea.co.kr/" target="_blank" rel="noopener noreferrer">
          https://pokemonkorea.co.kr
        </a> 그리고 
        <a href="https://pokeapi.co/" target="_blank" rel="noopener noreferrer">
          https://pokeapi.co
        </a> 에 있음을 알립니다.
      </span>
      <ETC>
        <span>
          E-mail : rlcks01537@gmail.com &
        </span>
        <a href="https://github.com/LEEKICHAN0102" target="_blank" rel="noopener noreferrer">
          <FaGithub size={24} />
        </a>
      </ETC>
      <AboutBack onClick={handleBack}>
        <span>이전 페이지로 돌아가기</span>
      </AboutBack>
    </AboutContainer>
  )
}