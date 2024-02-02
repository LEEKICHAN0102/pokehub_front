import { ProfileContainer, ProfileImage, ProfileInfo, UserPost, MyPost, LikePost } from "./profile.style"
import { useEffect } from "react";
import axios from "axios";
import Title from "../Title"
import { useParams } from "react-router-dom";

export default function Profile() {
  const userId = useParams();

  useEffect(() => {
    const LoggedInUserStatus = async () => {
      try {
        const response = await axios.get("http://localhost:8080/profile/:userId", { withCredentials: true });
        console.log("서버 응답:", response.data);
        } catch (error) {
        console.log("로그인 되지 않았습니다.", error);
      }
    };
    LoggedInUserStatus();
  }, []);

  return(
    <>
      <Title name={`${"냉동전갈"} 님의 프로필`} />
      <ProfileContainer>
        <ProfileImage />
        <ProfileInfo>
          <span>냉동전갈</span>
          <span>rlcks01537@gmail.com</span>
        </ProfileInfo>
        <UserPost>
          <MyPost></MyPost>
          <LikePost></LikePost>
        </UserPost>
      </ProfileContainer>
    </>
  )
}