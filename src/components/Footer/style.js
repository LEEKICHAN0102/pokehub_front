import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 20vh;
  background-color: #BFDBFE;
  border-top: solid 2px gray;
  position: relative;
  margin-top: 50px;
  border-top-left-radius: 10px; /* 왼쪽 위 border-radius */
  border-top-right-radius: 10px; /* 오른쪽 위 border-radius */
`;

export const Content = styled.div`
  margin: auto;
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;

  span {
    margin-top: 3px;
    font-size: 12px;
    font-weight: bold;
    color: black;
    a{
      color: #3568DE;
      margin: 5px;
    }
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