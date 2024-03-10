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
  @media screen and (max-width: ${(props) => props.theme.width.desktop}) {
    width: auto;
  }
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
  }
  span{
    font-size: 16px;
    color: gray;
  }
  @media screen and (max-width: ${(props) => props.theme.width.desktop}) {
    p{
      font-size: 1rem;
    } span{
      font-size: 0.8rem;
    }
  }
`;

export const PostDetailContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
  height: auto;
  margin: auto;
  margin-top: 20px;
  
  span{
    font-size: 16px;
  }

  p{
    color: gray;
    font-size: 16px;
    margin: 10px 0;
  }
`;

export const PostDetailDivider = styled.div`
  width: 100%;
  border: 3px solid black;
  margin-top: 50px;
`;

export const PostDetailComment = styled.div`
  display: flex;
  flex-direction: column;
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
  font-size: 16px;
`;

export const CommentContent = styled.p`
  font-size: 14px;
  margin-top: 5px;
`;

export const CommentTime = styled.span`
  display: flex;
  gap: 10px;
  font-size: 12px;
  color: gray;
  margin-top: 5px;
`;


export const PostDetailReply = styled(PostDetailComment)`
  width: 90%;
`;
export const ReplyWrapper = styled(CommentWrapper)``;
export const ReplyAuthor = styled(CommentAuthor)``;
export const ReplyContent = styled(CommentContent)``;
export const ReplyTime = styled(CommentTime)``;

export const CommentReply = styled.div`
  font-size: 12px;
  color: #127CE6;
  
  &:hover{
    color: #12BFE6;
    transition: ease-in-out 0.3s all;
    cursor: pointer;
  }
`;

export const ReplyInputContainer = styled.form`
  display: flex;
  align-items: center;
  gap: 5px;
  margin-top: 30px;
  width: auto;
`;

export const ReplyInput = styled.textarea`
  padding: 10px;
  height: auto;
  width: 300px;
  border: 1px solid black;
  border-radius: 5px;
  resize: none;
  @media screen and (max-width: ${(props) => props.theme.width.desktop}) {
    width: auto;
  }
`;

export const ReplyInputSubmit = styled.button`
  border-radius: 20px;
  background-color: #8CB1ED;
  width: 70px;
  height: 30px;
  color: white;
  border:none;
  font-size: 16px;

  &:hover{
    transition: ease-in-out 0.3s all;
    transform: scale(1.05);
    background-color: #6B8AEF;
  }
  cursor: pointer;
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

export const LikeButtonWrapper = styled.form`
  display: flex;
  gap: 20px;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
`;

export const LikeButton = styled.button`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  appearance: none;
  border: none;
  background-color: #2D57FA;

  span{
    color: black;
    font-size: 20px;
  }

  svg{
    color: #FAEF64;
  }

  &:hover {
    cursor: pointer;
      &:active{
      transition: ease-in-out 0.05s all;
      transform: scale(1.05);
      border: none;
    }
  }
`;

export const LikeCount = styled.div`
  font-size: 20px;
  color: black;
`;