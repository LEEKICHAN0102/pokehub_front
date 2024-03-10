import { Navigate, useParams, useOutletContext } from "react-router-dom";
import { 
  PostDetailContainer,
  PostDetailTitle,
  PostDetailContent,
  PostDetailDivider, 
  PostDetailForm,
  InputWrapper,
  InputContent,
  InputButton,
  PostDetailComment,
  CommentAuthor,
  CommentContent,
  CommentWrapper,
  CommentTime,
  CommentReply,
  ReplyInputContainer,
  ReplyInput,
  ReplyInputSubmit,
  PostDetailReply,
  ReplyWrapper,
  ReplyAuthor,
  ReplyContent,
  ReplyTime,
  LikeButtonWrapper,
  LikeButton,
  LikeCount,
} from "./postDetail.style"
import { useForm } from "react-hook-form"
import useDetailPostData from "../../hooks/post/usePostDetailData";
import axios from "axios";
import Loader from "../Loader";
import { useState } from "react";
import { FaStar } from "react-icons/fa6";
import { useQueryClient } from "react-query";
import { backEndUrl } from "../../constant/constant";

export default function PostDetail() {
  const postId = useParams().postId;
  const [openReplyId, setOpenReplyId] = useState(null);
  const queryClient = useQueryClient();
  const { data, isLoading } = useDetailPostData(postId);
  const outletContext = useOutletContext();
  const { user } = outletContext;

  const {
    register: postRegister,
    handleSubmit: postHandleSubmit,
    setValue: postSetValue,
  } = useForm({ mode: "onSubmit" });

  const {
    register: replyRegister,
    handleSubmit: replyHandleSubmit,
    setValue: replySetValue,
  } = useForm({ mode: "onSubmit" });

  const {
    register: LikeRegister,
    handleSubmit: LikeHandleSubmit,
  } = useForm({ mode: "onSubmit" });


  if(isLoading ){
    return <Loader />
  }

  if(!user.userData) {
    return <Navigate to="/login" replace />;
  }

  const onCommentSubmit = async (postData) => {
    try {
      await axios.post(`${backEndUrl}/board/detail/${postId}`, postData, { withCredentials: true });
      queryClient.invalidateQueries(["detail", postId]);
      postSetValue("content", "");
      setOpenReplyId(null);
    } catch (error) {
      console.error("에러 발생:", error);
    }
  };

  const onReplySubmit = async (replyData, commentId) => {
    try {
      await axios.post(`${backEndUrl}/board/detail/${postId}/${commentId}`, replyData, { withCredentials: true });
      queryClient.invalidateQueries(["detail", postId]);
      replySetValue("replyContent", "");
      setOpenReplyId(null);
    } catch (error) {
      console.error("에러 발생:", error);
    }
  };

  const onHandleLike = async (likeData) => {
    try {
      await axios.post(`${backEndUrl}/board/detail/like/${postId}`, likeData, { withCredentials: true });
      queryClient.invalidateQueries(["detail", postId]);
    } catch (error) {
      console.error("에러 발생:", error, error.message);
    }
  };

  const handleReply = (commentId) => {
    setOpenReplyId((prevState) => (prevState === commentId ? null : commentId));
  };

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
      <PostDetailDivider />
      {data.detail.findCommentByPostId.map((comment) => (
        <PostDetailComment key={comment._id}>
          <CommentWrapper>
            <CommentAuthor>{comment.username}</CommentAuthor>
            <CommentContent>{comment.content}</CommentContent>
            <CommentTime>
              {comment.postingTime}
              <CommentReply onClick={() => handleReply(comment._id)}>답글 달기</CommentReply>
            </CommentTime>
            {data.detail.findReplyByCommentId.map((reply) => {
              if (reply.commentId === comment._id) {
                return (
                  <PostDetailReply key={reply._id}>
                    <ReplyWrapper>
                      <ReplyAuthor>{reply.username}</ReplyAuthor>
                      <ReplyContent>{reply.replyContent}</ReplyContent>
                      <ReplyTime>{reply.postingTime}</ReplyTime>
                    </ReplyWrapper>
                  </PostDetailReply>
                );
              }
            })}
          </CommentWrapper>
          {openReplyId === comment._id ? (
            <ReplyInputContainer key={comment._id} onSubmit={replyHandleSubmit((data) => onReplySubmit(data, comment._id))}>
              <ReplyInput
                placeholder="답글을 작성해보세요!"
                type="replyContent"
                {...replyRegister("replyContent", { required: "댓글 내용을 작성해주세요!" })}
              />
              <ReplyInputSubmit>답글</ReplyInputSubmit>
            </ReplyInputContainer> 
          ) : null}
        </PostDetailComment>
      ))}
      <PostDetailForm onSubmit={postHandleSubmit(onCommentSubmit)}>
        <InputWrapper>
          <InputContent
            placeholder="댓글을 작성해보세요!"
            type="content"
            {...postRegister("content", { required: "댓글 내용을 작성해주세요!" })}
          />
          <InputButton>작성</InputButton>
        </InputWrapper>
      </PostDetailForm>
    </>
  )
}
