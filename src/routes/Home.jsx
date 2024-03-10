import mr_oh from "../assets/mr_oh.webp";
import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";

export default function Home() {
  return(
    <Container>
      <MrOh src={`${mr_oh}`} alt="오박사" />
      <Bubble>
        <span>내 이름은 오박사! PokéHub 의 세계에 잘 왔다.</span> 이 곳에서는 인게임 <Link to="/pokemon/1">포켓몬</Link>, <Link to="/item/1">아이템</Link>, <Link to="/gym-leader">인물</Link>들에 대한 정보를 확인 할 수 있단다. 또한 <Link to="/board/1">게시판</Link>을 통한 소통, 그리고 몇 가지 <Link to="/event">포켓몬 관련 이벤트</Link>에 대한 정보를 제공하고 있단다. ( 상단 메뉴 <GiHamburgerMenu /> ) 를 통해서 확인 할 수 있단다. 그럼...즐거운 시간 되거라!
      </Bubble>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 50px;
  margin-top: 50px;
  position: relative;
  overflow: hidden;
  z-index: 1;
  background: linear-gradient(to bottom, #dadee1, #A5FECB ,#57B0EB);
`;

const MrOh = styled.img`
  width: auto;
  height: auto;
`;

const Bubble = styled.div`
  margin-top: 50px;
  gap: 10px;
  width: auto;
  height: auto;
  padding: 30px;
  border: 3px solid gray;
  border-radius: 10px;
  font-size: 16px;
  background-color: white;
  a{
    color: #57B0EB;
  }
`;