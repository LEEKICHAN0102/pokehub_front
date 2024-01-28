import styled from "styled-components";

export const PostDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: auto;
  margin-top: 50px;
  height: 100vh;
  border-radius: 20px;
  border: 3px solid #2c2b2b;
  padding: 10px;
`;

export const PostDetailTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 30px;
  padding: 20px;
  border-bottom: 2px solid gray;

  p{
    font-size: 20px;
    font-weight: bold;
  }

  span{
    font-size: 16px;
    color: gray;
  }
`;

export const PostDetailContent = styled.div`
  display: flex;
  align-items: center;
  width: 95%;
  height: auto;
  margin: auto;
  margin-top: 20px;
  
  span{
    font-size: 16px;
    font-weight: bold;
  }
`;

export const PostDetailDivider = styled.div`
  width: 100%;
  border: 3px solid black;
  margin-top: 50px;
`;

export const PostDetailComment = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  height: auto;
  margin: auto;
  margin-top: 30px;
  padding: 20px;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
`;

export const CommentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
`;

export const CommentAuthor = styled.span`
  font-weight: bold;
  font-size: 16px;
`;

export const CommentContent = styled.p`
  font-size: 14px;
  margin-top: 5px;
`;

export const CommentTime = styled.span`
  font-size: 12px;
  color: gray;
  margin-top: 5px;
`;


export const PostDetailForm = styled.form`
  display: flex;
  width: 80%;
  margin: auto;
  margin-top: 30px;
  padding: 20px;
  border: 1px solid black;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
`;

export const InputContent = styled.textarea`
  font-size: 16px;
  padding: 20px;
  height: 100px;
  resize: none;
  overflow: auto;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
`;

export const InputButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background-color: #8CB1ED;
  width: 70px;
  height: 40px;
  color: white;
  border:none;
  font-size: 20px;

  &:hover{
    transition: ease-in-out 0.3s all;
    transform: scale(1.05);
    background-color: #6B8AEF;
  }
  cursor: pointer;
`;

export const CommentDelete = styled.button`

`;