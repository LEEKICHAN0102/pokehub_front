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
  @media screen and (max-width: ${(props) => props.theme.width.desktop}) {
    width: auto;
    height: 100vh;
  }
`;

export const WriteTitle = styled.input`
  width: 80%;
  height: 50px;
  background-color: white;
  border-radius: 10px;
  margin-top: 20px;
  font-size: 20px;
  padding-left: 20px;
  @media screen and (max-width: ${(props) => props.theme.width.desktop}) {
    font-size: 16px;
    height: 30px;
    padding: 20px;
  }
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
  margin: auto;
  padding: 30px;
`;

export const WriteContent = styled.textarea`
  font-size: 16px;
  font-weight: lighter;
  padding: 20px;
  width: 100%;
  height: 80%;
  border: 2px solid gray;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  resize: none;
  overflow: auto;
  img{
    width: 200px;
    height: 200px;
  }
`;

export const WritePosting = styled.button`
  border-radius: 10px;
  background-color: #8CB1ED;
  width: 70px;
  height: 40px;
  font-size: 20px;
  color: white;
  border:none;
  margin: auto;
  &:hover{
    transition: ease-in-out 0.3s all;
    transform: scale(1.05);
    background-color: #6B8AEF;
  }
  cursor: pointer;
`;

export const ErrorSpan = styled.span`
  color: red;
  font-size: 12px;
  margin: auto;
  margin-top: 10px;
`;