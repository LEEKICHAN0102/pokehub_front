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

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  margin: auto;
  margin-top: 150px;
  height: 70vh;
  border-radius: 20px;
  border: 3px solid #2c2b2b;
  padding-left: 50px;
  padding-right: 50px;
  position: relative;
  overflow: hidden;
  z-index: 1;
  background-color: white;
`;

export const Official = styled.img`
  width: 300px;
  height: 300px;
`;

export const ToggleDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export const Info = styled.div`
  width: 60%;
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  span{
    color: gray;
    font-size: 16px;
  }
`;

export const Name = styled.h1`
  font-size: 24px;
`;

export const Description = styled.h4`
  margin-top: 50px;
`;

export const MoreInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 2fr);
  gap: 50px;
  margin: auto;
  margin-top: 50px;
  width: 100%;
  border: 1px solid #d0d4d2ed;
  border-radius: 10px;
  padding: 30px;
  span{
    font-size: 12px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  li{
    display: flex;
    align-items: center;
      svg {
      margin-left: 5px;
    }
  }
`;

export const GenderBox = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;