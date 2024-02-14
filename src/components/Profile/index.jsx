import { ProfileContainer, ProfileInfo, UserPost, MyPost, LikePost, PostBox } from "./profile.style";
import axios from "axios";
import Title from "../Title";
import { Link, useParams, Navigate, useOutletContext } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Profile() {
  const userId = useParams().userId;
  const [userData, setUserData] = useState({});
  const [userPostingData, setUserPostingData] = useState([]);
  const [userLikedData, setUserLikedData] = useState([]);
  const outletContext = useOutletContext();
  const { user } = outletContext;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/profile/${userId}`, { withCredentials: true });
        const userProfileData = response.data;
        console.log("프로필 응답:", userProfileData);
        setUserData(userProfileData.user);

        // 내가 작성한 게시글 중에서 시간이 늦은 순으로 5개만 가져오기
        setUserPostingData(userProfileData.userPosting.slice(0, 5).sort((a, b) => new Date(b.postingTime) - new Date(a.postingTime)));

        // 내가 좋아요한 게시글 중에서 시간이 늦은 순으로 5개만 가져오기
        setUserLikedData(userProfileData.userLiked.slice(0, 5).sort((a, b) => new Date(b.postingTime) - new Date(a.postingTime)));
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
            {userPostingData.map((myPost) => (
              <Link key={myPost._id} to={`/board/${myPost._id}`}>
                <PostBox>
                  <span>{myPost.title}</span>
                  <span>{myPost.postingTime}</span>
                </PostBox>
              </Link>
            ))}
          </MyPost>
          <LikePost>
            <span>내가 좋아하는 게시글</span>
            {userLikedData.map((likePost) => (
              <Link key={likePost._id} to={`/board/${likePost._id}`}>
                <PostBox>
                  <span>{likePost.title}</span>
                  <span>{likePost.postingTime}</span>
                </PostBox>
              </Link>
            ))}
          </LikePost>
        </UserPost>
      </ProfileContainer>
    </>
  );
}
