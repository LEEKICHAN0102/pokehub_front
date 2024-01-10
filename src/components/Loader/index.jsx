import { Spinner } from "@chakra-ui/spinner";
import styled from "styled-components";

export default function Loader(){
  return(
    <CenteredContainer>
      <Spinner />
    </CenteredContainer>
  )
}

const CenteredContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;
