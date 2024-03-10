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
  padding: 20px;
  flex-direction: column;
  gap: 5px;
  color: white;
  border-radius: 10px;
  font-size: 1rem;
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
  font-size: 1rem;
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
  justify-content: center;
  gap: 100px;
  align-items: center;
  width: auto;
  margin: auto;
  margin-top: 150px;
  height: auto;
  border-radius: 20px;
  border: 3px solid #2c2b2b;
  padding: 50px;
  position: relative;
  overflow: hidden;
  z-index: 1;
  background-color: white;
  
  @media screen and (min-width: ${(props) => props.theme.width.desktop}) {
    flex-direction: row; /* 데스크탑 화면에서는 가로로 정렬됩니다. */
    max-width: 85%;
  }
`;

export const OfficialBox = styled.div`
  display: flex;
  flex-direction: column;
  svg {
    margin-bottom: 50px;
    cursor: pointer;
    color: gray;
    :hover{
      color: black;
      transition: 0.3s ease-in-out all;
    }
    @media screen and (max-width: ${(props) => props.theme.width.desktop}) {
      margin-left: auto;
      margin-right: auto;
    }
  }
`;

export const Official = styled.img`
  max-width: 300px;
  max-height: 300px;
  @media screen and (max-width: ${(props) => props.theme.width.desktop}) {
    max-width: 200px;
    max-height: 200px;
  }
  cursor: pointer;
`;

export const ToggleDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export const Info = styled.div`
  width: auto;
  height: auto;
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
  font-size: 1.5rem;
  @media screen and (max-width: ${(props) => props.theme.width.desktop}) {
    font-size: 1rem;
  }
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

  @media screen and (max-width: ${(props) => props.theme.width.desktop}) {
    grid-template-columns: repeat(1, 1fr); /* 모바일 화면에서는 1개의 열로 설정하여 세로로 정렬됩니다. */
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

export const TooltipWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

export const ToolTipBox = styled.div`
  position: absolute;
  visibility: hidden;
  width: 250px;
  background-color: #3d3b3b;
  color: white;
  text-align: center;
  padding: 10px;
  border-radius: 5px;
  z-index: 1;
  bottom: 125%;
  left: 50%;
  transform: translateX(-50%);

  /* ToolTip이 부모 요소에 대해 호버될 때 표시되도록 설정 */
  ${TooltipWrapper}:hover & {
    visibility: visible;
  }
`;
