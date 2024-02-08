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

export const MainImage = styled.img`
  width: 80px;
  height: 80px;
  margin: auto;
  cursor: pointer;
`;

export const PrevNav = styled.a`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 40px;
  font-size: 24px;
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
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  padding: 40px;
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
  width: 450px;
  span {
    color: gray;
  }
`;

export const Official = styled.img`
  width: auto;
  height: auto;
`;

export const Quote = styled.span`
  font-weight: bold;
  width: auto;
  margin-top: 20px;
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
`;

export const Introduction = styled.h4`
  font-size: 20px;
  color: ${(props) => props.color};
`;

export const Name = styled.h1`
  font-size: 24px;
`;

export const Information = styled.h4`
  margin-top: 40px;
  font-weight: bold;
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
    width: 80px;
    height: 80px;
  }
`;

export const BgmContent = styled(Content)`
  flex-direction: column;
  border: 1px solid gray;
  padding: 20px;
  border-radius: 5px;
  align-items: flex-start;
`;

export const GenderBox = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
