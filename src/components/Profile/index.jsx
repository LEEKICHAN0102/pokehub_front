import { ProfileContainer, ProfileImage, ProfileInfo, UserPost, MyPost, LikePost } from "./profile.style"
import Title from "../Title"

export default function Profile() {
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