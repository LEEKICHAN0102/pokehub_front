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
  background-color: black;
  margin-top: 30px;
`;

export const MyPost = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 100%;
  background-color: blue;
`;

export const LikePost = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 100%;
  background-color: green;
`;