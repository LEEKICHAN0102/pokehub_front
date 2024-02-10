import styled from "styled-components";

export const FourOFourContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  height: 100vh;
  span{
    color: gray;
  }
`;

export const FourOFourMain = styled.h1`
  font-size: 200px;
  font-weight: bold;
`;

export const FourOFourBack = styled.button`
  border: none;
  width: auto;
  height: auto;
  padding: 10px;
  border-radius: 5px;
  :hover {
    cursor: pointer;
    color: #0FCDFC;
    transition: all 0.3s ease-in-out;
  }
`;