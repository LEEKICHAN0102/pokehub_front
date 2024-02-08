import styled from "styled-components";

export const Navigation = styled.div`
  width: 90%;
  height: 30%;
  margin: auto;
  background-color: #2c2b2b;
  position: absolute; /* position을 absolute로 변경 */
  margin-top: 50px;
  left: 0; /* 좌측에 위치하도록 설정 */
  right: 0; /* 우측에 위치하도록 설정 */
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 0;
  border-radius: 10px;
`;

export const PrevNav = styled.a`
  width: 50%;
  height: 100%;
  display: flex;
  padding: 20px;
  flex-direction: column;
  font-size: 24px;
  gap: 5px;
  color: white;
  border-radius: 10px;
  &:hover{
    background-color: #3d3b3b;
    cursor: pointer;
  }
`;

export const NavDiv = styled.div`
  width: 1%;
  height: 100%;
  background-color: white;
`;

export const NextNav = styled.a`
  width: 50%;
  height: 100%;
  gap: 5px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 20px;
  color: white;
  font-size: 24px;
  border-radius: 10px;
  &:hover{
    background-color: #3d3b3b;
    cursor: pointer;
  }
`;

export const Introduction = styled.h4`
  font-size: 20px;
  color: ${(props) => props.color};
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80%;
  margin: auto;
  height: auto 0;
  margin-top: 150px;
  border-radius: 20px;
  border: 3px solid #2c2b2b;
  padding: 50px;
  position: relative;
  overflow: hidden;
  z-index: 1;
  background-color: white;
`;

export const ImageQuote = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
  max-width: 450px;
  span{
    color: black;
  }
`;

export const Official = styled.img`
  width: auto;
  height: auto;
`;

export const Quote = styled.span`
  font-weight: bold;
  border: 3px solid gray;
  border-radius: 5px;
  padding: 20px;
`;

export const Info = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
  span{
    font-size: 16px;
  }
`;

export const Name = styled.h1`
  font-size: 24px;
`;

export const Information = styled.h4`
  margin-top: 40px;
  font-weight: bold;
  color: black;
`;

export const MoreInfo = styled.div`
  margin: auto;
  margin-top: 50px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  border: 1px solid #d0d4d2ed;
  border-radius: 10px;
  padding: 30px;
  gap: 10px;
  span{
    font-size: 12px;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  img{
    width: 30px;
    height: 30px;
  }
`;

export const GenderBox = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
