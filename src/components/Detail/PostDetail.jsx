import { useParams } from "react-router-dom";
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

export default function PostDetail() {
  const postId = useParams().postId;
  const [replyStates, setReplyStates] = useState({});

  const {
    register: postRegister,
    handleSubmit: postHandleSubmit,
  } = useForm({ mode: "onSubmit" });

  const {
    register: replyRegister,
    handleSubmit: replyHandleSubmit,
  } = useForm({ mode: "onSubmit" });

  const {
    register: LikeRegister,
    handleSubmit: LikeHandleSubmit,
  } = useForm({ mode: "onSubmit" });

  const { data, isLoading } = useDetailPostData(postId);

  if(isLoading ){
    return <Loader />
  }

  console.log(data);

  const onSubmit = async (postData) => {
    try {
      const response = await axios.post(`http://localhost:8080/board/${postId}`, postData, { withCredentials: true });
      console.log("서버 응답:", response.data);
      console.log("상태 코드:", response.status);
    } catch (error) {
      console.error("에러 발생:", error);
    }
  };

  const onReplySubmit = async (replyData, commentId) => {
    try {
      const response = await axios.post(`http://localhost:8080/board/${postId}/${commentId}`, replyData, { withCredentials: true });
      console.log("서버 응답:", response.data);
      console.log("상태 코드:", response.status);
    } catch (error) {
      console.error("에러 발생:", error);
    }
  };

  const onHandleLike = async (likeData) => {
    try {
      // 빈 객체를 전송하지 않고, 필요한 경우 데이터를 전송
      const response = await axios.post(`http://localhost:8080/board/like/${postId}` , likeData ,{ withCredentials: true });
      console.log("서버 응답:", response.data);
      console.log("상태 코드:", response.status);
    } catch (error) {
      console.error("에러 발생:", error, error.message);
    }
  };

  const handleReply = (commentId) => {
    setReplyStates((prevStates) => ({
      ...prevStates,
      [commentId]: !prevStates[commentId],
    }));
  };

  return(
    <>
      <PostDetailContainer>
        <PostDetailTitle>
          <p>{data.detail.findByPostId.title}</p>
          <span>{data.detail.findByPostId.postingTime}</span>
        </PostDetailTitle>
        <PostDetailContent>
          {data.detail.findByPostId.content}
        </PostDetailContent>
        <LikeButtonWrapper onClick={LikeHandleSubmit(onHandleLike)}>
          <LikeButton
            type="button"
            {...LikeRegister("likedUserId")}
          >
            <FaStar size={48} color="gray" />
            <span>추천</span>
          </LikeButton>
          <LikeCount>0</LikeCount>
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
              return null;
            })}
          </CommentWrapper>
          {replyStates[comment._id] ? (
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
      <PostDetailForm onSubmit={postHandleSubmit(onSubmit)}>
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
