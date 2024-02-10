import styled from "styled-components";

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  margin-top: 50px;
  width: 85vw;
  height: 100vh;
  background-color: gray;
`;

export const ProfileImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 100px;
  border: 2px solid black;
  margin-top: 50px;
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
    font-weight: bold;
    &:hover{
      color: #38EAE3;
      transition: ease-in-out 0.3s all;
    }
  }
`;

export const UserPost = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 70%;
  height: 50%;
  margin-top: 30px;
`;

export const MyPost = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  height: 100%;
  padding: 20px;
`;

export const LikePost = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  height: 100%;
  padding: 20px;
`;

export const PostBox = styled.div`
  width: 400px;
  height: 100px;
  border: 1px solid #e5e5e5;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
    cursor: pointer;
  }

  display: flex;
  align-items: center;
  justify-content: space-between;

  color: white;
`;