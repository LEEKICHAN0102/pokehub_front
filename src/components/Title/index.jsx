import styled from "styled-components";

export default function Title({name}) {
  return(
    <TitleBar>
      <TitleName>{name}</TitleName>
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
  font-weight: 600px;
`;
