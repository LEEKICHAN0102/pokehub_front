import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 70px;
  background-color: white;
  padding: 30px;
  border-bottom: solid 2px gray;
  position: relative;
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Group = styled.ul`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 33.3%;

  &:last-of-type {
    justify-content: flex-end;
  }
`;

export const Item = styled.li`
  float: left;
  cursor: pointer;
  letter-spacing: -0.16px;
  :hover{
    color: #FF658F;
    transition: all 0.3s;
  }
  @media screen and (max-width: ${props => props.theme.width.desktop}) {
    a{
      font-size: 0.9rem;
    }
  }
`;

export const LogoutButton = styled.input`
  border: none;
  width: 70px;
  height: 40px;
  color: white;
  background-color: gray;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  @media screen and (max-width: ${props => props.theme.width.desktop}) {
    width: auto;
    height: auto;
    padding: 8px;
  }
`;
