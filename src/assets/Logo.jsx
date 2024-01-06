import styled from "styled-components"

export default function Logo(){
  return(
    <PokeHub>
      <Poke>Poké</Poke>
      <Hub>Hub</Hub>
    </PokeHub>
  )
}

const PokeHub = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f45959;
  border-radius: 5px;
  width: 150px;
  height: 40px;
  gap: 10px;
  font-weight: 500px;
  font-size: 24px;
`;

const Poke = styled.h4`
  color: white;
`;

const Hub = styled.h4`
  color: black;
`;