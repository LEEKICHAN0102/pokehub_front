import styled from "styled-components";

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  margin-top: 50px;
  width: 85vw;
  height: auto;
  border-radius: 20px;
`;

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  gap: 10px;

  span{
    font-size: 24px;
    &:hover{
      color: #38EAE3;
      transition: ease-in-out 0.3s all;
    }
  }
  @media screen and (max-width: ${(props) => props.theme.width.desktop}) {
    span{
      font-size: 1rem;
    }
  }
`;

export const UserPost = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: auto;
  height: auto;
  margin-top: 30px;
  @media screen and (max-width: ${(props) => props.theme.width.desktop}) {
    flex-direction: column;
    align-items: center;
  }
`;

export const MyPost = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  height: 100%;
  padding: 20px;
  gap: 10px;
`;

export const LikePost = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  height: 100%;
  padding: 20px;
  gap: 10px;
`;

export const PostBox = styled.div`
  width: 400px;
  height: 100px;
  border: 3px solid gray;
  border-radius: 10px;
  color: gray;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
    cursor: pointer;
  }

  display: flex;
  align-items: center;
  justify-content: space-around;
`;