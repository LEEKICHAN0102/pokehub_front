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
  transition: all 0.1s;
  :hover{
    color: red;
    transition: all 0.5s;
  }
`;
