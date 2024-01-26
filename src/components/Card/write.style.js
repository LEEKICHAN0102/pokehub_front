import styled from "styled-components";

export const WriteForm = styled.form`
  display: flex;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  margin-top: 50px;
  width: 85vw;
  height: 70vh;
  background-color: #e5e5e5;
  border-radius: 20px;
  border: 1px solid gray;
`;

export const WriteTitle = styled.input`
  width: 80%;
  height: 50px;
  background-color: white;
  border-radius: 10px;
  margin-top: 20px;
  font-size: 20px;
  font-weight: bold;
  padding-left: 20px;
`;

export const WriteContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 80%;
  background-color: white;
  border-radius: 10px;
  margin-top: 20px;
`;

export const WriteContentButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px;
`;

export const WriteContent = styled.div`
  font-size: 16px;
  font-weight: lighter;
  padding: 20px;
  width: 100%;
  height: 80%;
  border: 2px solid gray;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  resize: none;
  resize: both;
  overflow: auto;
  img{
    width: 200px;
    height: 200px;
  }
`;

export const WriteContentTool = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 30px;
  color: gray;
  gap: 20px;
  :hover{
    color: #000;
    transition: ease-in-out 0.3s all;
  }
  cursor: pointer;
`;

export const WritePosting = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background-color: #8CB1ED;
  width: 70px;
  height: 40px;
  font-size: 20px;
  color: white;
  border:none;
  &:hover{
    transition: ease-in-out 0.3s all;
    transform: scale(1.05);
    background-color: #6B8AEF;
  }
  cursor: pointer;
`;