import styled from "styled-components";

export const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  width: 350px;
  border: 1px solid #ccc;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index:999;
`;

export const DropdownItem = styled.div`
  padding: 10px;
  &:hover {
    background-color: #f5f5f5;
  }
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
`;

export const SubDropDown = styled.div`
  padding: 10px;
  &:hover {
    background-color: #f5f5f5;
  }
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  color: gray;
  font-weight: bold;
`;

export const SubDropDownChild = styled.div`
  padding: 10px;
  &:hover {
    background-color: #f5f5f5;
  }
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 12px;
  color: gray;
`;