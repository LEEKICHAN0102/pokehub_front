import styled from "styled-components";

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  gap: 10px;
  span {
    margin-top: 3px;
    font-size: 16px;
    font-weight: bold;
    color: black;
    a{
      color: #3568DE;
      margin: 5px;
    }
  }
`;

export const AboutBack = styled.button`
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

export const ETC = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 5px;
  margin-top: 10px;
  span {
    font-size: 12px;
    font-weight: bold;
    color: black;
  }
`;