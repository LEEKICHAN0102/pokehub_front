import { useParams, useOutletContext, useNavigate } from "react-router-dom";
import { 
  PostDetailContainer,
  PostDetailTitle,
  PostDetailContent,
  PostEdit,
  PostDetailDivider, 
  LikeButtonWrapper,
  LikeButton,
  LikeCount,
} from "./postDetail.style"
import { useForm } from "react-hook-form"
import useDetailPostData from "../../hooks/post/usePostDetailData";
import PostComment from "./PostComment";
import axios from "axios";
import Loader from "../Loader";
import { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa6";
import { useQueryClient } from "react-query";
import { backEndUrl } from "../../constant/constant";

export default function PostDetail() {
  const postId = useParams().postId;
  const [isLoggedInUser, setLoggedInUser] = useState(false);
  const queryClient = useQueryClient();
  const { data, isLoading } = useDetailPostData(postId);
  const outletContext = useOutletContext();
  const { user } = outletContext;
  const navigate = useNavigate();

  const loggedInUserId = user.userData?.user._id ?? null;
  const postedUserId = data.detail?.findByPostId?.userId ?? null;

  useEffect(() => {
    if (loggedInUserId === postedUserId) {
      setLoggedInUser(true);
    }
  } , [loggedInUserId, postedUserId]);

  const {
    register: LikeRegister,
    handleSubmit: LikeHandleSubmit,
  } = useForm({ mode: "onSubmit" });


  if(isLoading ){
    return <Loader />
  }

  const onHandleLike = async (likeData) => {
    try {
      await axios.post(`${backEndUrl}/board/detail/like/${postId}`, likeData, { withCredentials: true });
      queryClient.invalidateQueries(["detail", postId]);
    } catch (error) {
      console.error("좋아요 에러 발생:", error);
    }
  };

  const onDeletePosting = async () => {
    try {
      const response = await axios.delete(`${backEndUrl}/board/detail/${postId}/delete`, { withCredentials: true });
      queryClient.invalidateQueries(["detail", postId]);
      if (response.status === 200) {
        navigate("/board/1");
      }
    } catch (error) {
      console.error("포스팅 삭제 중 에러 발생:", error);
    }
  }

  const onEditPosting = async () => {
    navigate(`/board/edit/${postId}`);
  }

  return(
    <>
      <PostDetailContainer>
        <PostDetailTitle>
          <p>{data.detail.findByPostId.title}</p>
          <span>{data.detail.findByPostId.postingTime}</span>
        </PostDetailTitle>
        <PostDetailContent>
          <p>작성자 : {data.detail.findByPostId.username}</p>
          {data.detail.findByPostId.content}
        </PostDetailContent>
        <LikeButtonWrapper onClick={LikeHandleSubmit(onHandleLike)}>
          <LikeButton
            type="button"
            {...LikeRegister("likedUserId")}
          >
            <FaStar size={48} />
            <span>추천</span>
          </LikeButton>
          <LikeCount>{data.detail.findByPostId.likeCount}</LikeCount>
        </LikeButtonWrapper>
      </PostDetailContainer>
      {isLoggedInUser ? (
        <PostEdit>
          <div onClick={onEditPosting}>수정</div>
          <div onClick={onDeletePosting}>삭제</div>
        </PostEdit>
      ) : null}
      <PostDetailDivider />
      <PostComment
        data={data}
        queryClient={queryClient}
        postId={postId}
        loggedInUserId={loggedInUserId}
      />
    </>
  )
}
