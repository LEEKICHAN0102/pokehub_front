import styled from "styled-components";

export const Navigation = styled.div`
  width: 90%;
  height: 30%;
  margin: auto;
  background-color: #2c2b2b;
  position: absolute;
  margin-top: 50px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 0;
  border-radius: 10px;
  @media screen and (max-width: ${(props) => props.theme.width.desktop}) {
    svg{
      display: none;
    }
  }
`;

export const PrevNav = styled.a`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 5px;
  color: white;
  border-radius: 10px;
  &:hover{
    background-color: #3d3b3b;
    cursor: pointer;
  }
  @media screen and (max-width: ${(props) => props.theme.width.desktop}) {
    font-size: 0.8rem;
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
  border-radius: 10px;
  &:hover{
    background-color: #3d3b3b;
    cursor: pointer;
  }
  @media screen and (max-width: ${(props) => props.theme.width.desktop}) {
    font-size: 0.8rem;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: auto;
  margin: auto;
  height: auto;
  margin-top: 150px;
  border-radius: 20px;
  border: 3px solid #2c2b2b;
  padding: 50px;
  position: relative;
  overflow: hidden;
  z-index: 1;
  background-color: white;

  @media screen and (min-width: ${(props) => props.theme.width.desktop}) {
    width: 80%;
  }
`;

export const ImageQuote = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
  width: auto;
  span {
    color: gray;
  }
`;

export const Official = styled.img`
  width: auto;
  height: auto;
  @media screen and (max-width: ${(props) => props.theme.width.desktop}) {
    max-width: 200px;
    max-height: 200px;
  }
`;

export const Quote = styled.span`
  width: 90%;
  margin-top: 20px;
  border: 3px solid gray;
  border-radius: 5px;
  padding: 20px;
  @media screen and (max-width: ${(props) => props.theme.width.desktop}) {
    font-size: 0.8rem;
  }
`;

export const Info = styled.div`
  width: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
  @media screen and (max-width: ${(props) => props.theme.width.desktop}) {
    width: auto;
    max-width: 350px;
    font-size: 0.8rem;
  }
`;

export const Introduction = styled.h4`
  font-size: 20px;
  color: ${(props) => props.color};
  @media screen and (max-width: ${(props) => props.theme.width.desktop}) {
    font-size: 1rem;
  }
`;

export const Name = styled.h1`
  font-size: 1.5rem;
  @media screen and (max-width: ${(props) => props.theme.width.desktop}) {
    font-size: 1rem;
  }
`;

export const Information = styled.h4`
  margin-top: 40px;
  max-width: 80%;
  @media screen and (max-width: ${(props) => props.theme.width.desktop}) {
    width: auto;
  }
`;

export const MoreInfo = styled.div`
  margin: auto;
  min-width: 350px;
  margin-top: 50px;
  width: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 30px;
  gap: 10px;
  span{
    font-size: 12px;
  }
  @media screen and (min-width: ${(props) => props.theme.width.desktop}) {
    border: 1px solid #d0d4d2ed;
    border-radius: 10px;
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

  .badge{
    width: 30px;
    height: 30px;
  }

  .typeBox{
    width: 40px;
    height: 40px;
  }

  .typeImg{
    width: 30px;
    height: 30px;
  }
`;

export const MainImage = styled.img`
  width: 80px;
  height: 80px;
  margin: auto;
  cursor: pointer;
`;

export const BgmContent = styled(Content)`
  flex-direction: column;
  padding: 10px;
  align-items: flex-start;
`;