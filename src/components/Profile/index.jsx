import { ProfileContainer, ProfileInfo, UserPost, MyPost, LikePost, PostBox } from "./profile.style"
import axios from "axios";
import Title from "../Title"
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Profile() {
  const userId = useParams().userId;
  const [userData, setUserData] = useState({});
  const [userPostingData, setUserPostingData] = useState([]);
  const [userLikedData, setUserLikedData] = useState([]);

  console.log(userPostingData);

  useEffect(() => {
    const checkProfile = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/profile/${userId}`, { withCredentials: true });
        const userProfileData = response.data;
        console.log("프로필 응답:", userProfileData);
        setUserData(userProfileData.user);
        setUserPostingData(userProfileData.userPosting);
        setUserLikedData(userProfileData.userLiked);
      } catch (error) {
        console.log("프로필 정보 불러오는 중 에러 발생.", error);
      }
    };
  
    checkProfile();
  }, [userId]);

  return(
    <>
      <Title name={`${userData.username} 님의 프로필`} />
      <ProfileContainer>
        <ProfileInfo>
          <span>{userData.username}</span>
          <span>{userData.email}</span>
        </ProfileInfo>
        <UserPost>
          <MyPost>
            <span>내가 작성한 게시글</span>
            {userPostingData.map((myPost) => (
              <PostBox key={myPost._id}>
                <span>{myPost.username}</span>
                <span>{myPost.title}</span>
                <span>{myPost.postingTime}</span>
              </PostBox>
            ))}
          </MyPost>
          <LikePost>
            <span>내가 좋아하는 게시글</span>
            {userLikedData.map((likePost) => (
              <PostBox key={likePost._id}>
                <span>{likePost.username}</span>
                <span>{likePost.title}</span>
                <span>{likePost.postingTime}</span>
              </PostBox>
            ))}
          </LikePost>
        </UserPost>
      </ProfileContainer>
    </>
  )
}