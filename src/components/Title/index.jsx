import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Title({name , hasButton}) {
  return(
    <TitleBar>
      <TitleName>{name}</TitleName>
      {hasButton ? 
        <Link to="/board/write">
          <TitleButton>
            {hasButton}
          </TitleButton>
        </Link> : 
        null
      }
    </TitleBar>
  )
}

const TitleBar = styled.div`
  margin: auto;
  width: 90%;
  margin-top: 50px;
  background-color: #BFDBFE;
  padding: 30px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TitleName = styled.h1`
  font-size:36px;
`;

const TitleButton = styled.button`
  width: 70px;
  height: 40px;
  border-radius: 10px;
  background-color: #73cdc9;
  color: white;
  border: none;
  &:hover{
    background-color: #69C4E5;
    transition: ease-in-out 0.3s all;
    transform: scale(1.05);
    cursor: pointer;
  }
  font-size: 16px;
`;