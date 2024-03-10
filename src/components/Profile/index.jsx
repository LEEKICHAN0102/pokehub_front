import { ProfileContainer, ProfileInfo, UserPost, MyPost, LikePost, PostBox } from "./profile.style";
import axios from "axios";
import Title from "../Title";
import { Link, useParams, Navigate, useOutletContext } from "react-router-dom";
import { useEffect, useState } from "react";
import { backEndUrl } from "../../constant/constant";

export default function Profile() {
  const userId = useParams().userId;
  const [userData, setUserData] = useState({});
  const [postingData, setPostingData] = useState([]);
  const [likedData, setLikedData] = useState([]);
  const outletContext = useOutletContext();
  const { user } = outletContext;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${backEndUrl}/profile/${userId}`, { withCredentials: true });
        const userProfileData = response.data;
        setUserData(userProfileData.user);
        setPostingData(userProfileData.userPosting);
        setLikedData(userProfileData.userLiked);
      } catch (error) {
        console.log("프로필 정보 불러오는 중 에러 발생.", error);
      }
    };

    fetchData();
  }, [userId]);

  if (!user.userData) {
    return <Navigate to="/login" replace />;
  }

  return (
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
            {postingData.length === 0 ? (
              <PostBox>
                <span>아직 작성 게시글이 없어요!</span>
              </PostBox>
              ) : (
              postingData.map((myPost) => (
                <Link key={myPost._id} to={`/board/detail/${myPost._id}`}>
                  <PostBox>
                    <span>{myPost.title}</span>
                    <span>{myPost.postingTime}</span>
                  </PostBox>
                </Link>
              )))}
          </MyPost>
          <LikePost>
            <span>내가 좋아하는 게시글</span>
            {likedData.length === 0 ? (
              <PostBox>
                <span>아직 좋아하는 게시글이 없어요!</span>
              </PostBox>
              ) : (
              likedData.map((likePost) => (
                <Link key={likePost._id} to={`/board/detail/${likePost._id}`}>
                  <PostBox>
                    <span>{likePost.title}</span>
                    <span>{likePost.postingTime}</span>
                  </PostBox>
                </Link>
              )))}
          </LikePost>
        </UserPost>
      </ProfileContainer>
    </>
  );
}