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
} from "./postDetail.style"
import { useForm } from "react-hook-form"
import useDetailPostData from "../../hooks/post/usePostDetailData";
import axios from "axios";
import Loader from "../Loader";
import { useState } from "react";

export default function PostDetail() {
  const postId = useParams().postId;

  const {
    register,
    handleSubmit,
  } = useForm({ mode: "onSubmit" });

  const { data, isLoading } = useDetailPostData(postId);

  if(isLoading){
    return <Loader />
  }

  console.log(data);

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(`http://localhost:8080/board/${postId}`, data, { withCredentials: true });
      console.log("서버 응답:", response.data);
      console.log("상태 코드:", response.status);
      setFakeComment(true);
    } catch (error) {
      console.error("에러 발생:", error);
    }
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
      </PostDetailContainer>
      <PostDetailDivider />
      {data.detail.findCommentByPostId.map((comment) => (
        <PostDetailComment key={comment._id}>
          <CommentWrapper>
            <CommentAuthor>{comment.username}</CommentAuthor>
            <CommentContent>{comment.content}</CommentContent>
            <CommentTime>{comment.postingTime}</CommentTime>
          </CommentWrapper>
        </PostDetailComment>
      ))}
      <PostDetailForm onSubmit={handleSubmit(onSubmit)}>
        <InputWrapper>
          <InputContent
            placeholder="댓글을 작성해보세요!"
            type="content"
            {...register("content", { required: "댓글 내용을 작성해주세요!" })}
          />
          <InputButton>작성</InputButton>
        </InputWrapper>
      </PostDetailForm>
    </>
  )
}
