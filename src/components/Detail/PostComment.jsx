import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import {
  PostDetailForm,
  InputWrapper,
  InputContent,
  InputButton,
  PostDetailComment,
  CommentAuthor,
  CommentContent,
  CommentWrapper,
  CommentTime,
  CommentOption,
  EditInput,
  EditInputContainer,
  EditInputSubmit,
  ReplyInputContainer,
  ReplyInput,
  ReplyInputSubmit,
  PostDetailReply,
  ReplyWrapper,
  ReplyAuthor,
  ReplyContent,
  ReplyTime,
} from "./postDetail.style";
import { backEndUrl } from "../../constant/constant";

export default function PostComment({data, queryClient, postId, loggedInUserId}) {
  const [openReply, setOpenReply] = useState(null);
  const [openCommentEdit, setOpenCommentEdit] = useState(null);
  const [openReplyEdit, setOpenReplyEdit] = useState(null);

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
    register: editCommentRegister,
    handleSubmit: editCommentHandleSubmit,
    setValue: editCommentSetValue,
  } = useForm({ mode: "onSubmit" });

  const {
    register: editReplyRegister,
    handleSubmit: editReplyHandleSubmit,
    setValue: editReplySetValue,
  } = useForm({ mode: "onSubmit" });

  const onCommentSubmit = async (postData) => {
    try {
      await axios.post(`${backEndUrl}/board/detail/${postId}`, postData, { withCredentials: true });
      queryClient.invalidateQueries(["detail", postId]);
      postSetValue("content", "");
      setOpenReply(null);
    } catch (error) {
      console.error("댓글 작성 중 에러 발생:", error);
    }
  };

  const onCommentDelete = async (commentId) => {
    try {
      await axios.delete(`${backEndUrl}/board/detail/${postId}/${commentId}/deleteComment`, { withCredentials: true });
      queryClient.invalidateQueries(["detail", postId]);
    } catch (error) {
      console.error("댓글 삭제 중 에러 발생:", error);
    }
  }

  const onCommentEdit = async (commentId, putData) => {
    try {
      await axios.put(`${backEndUrl}/board/detail/${postId}/${commentId}/updateComment`, putData, { withCredentials: true });
      queryClient.invalidateQueries(["detail", postId]);
      editCommentSetValue("editContent", "");
      setOpenCommentEdit(null);
    } catch (error) {
      console.error("댓글 수정 중 에러 발생:", error);
    }
  }

  const onReplySubmit = async (replyData, commentId) => {
    try {
      await axios.post(`${backEndUrl}/board/detail/${postId}/${commentId}`, replyData, { withCredentials: true });
      queryClient.invalidateQueries(["detail", postId]);
      replySetValue("replyContent", "");
      setOpenReply(null);
    } catch (error) {
      console.error("답글 작성 중 에러 발생:", error);
    }
  };

  const onReplyEdit = async (replyId, putData) => {
    try {
      await axios.put(`${backEndUrl}/board/detail/${postId}/${replyId}/updateReply`, putData, { withCredentials: true });
      queryClient.invalidateQueries(["detail", postId]);
      editReplySetValue("editReply", "");
      setOpenReplyEdit(null);
    } catch (error) {
      console.error("답글 수정 중 에러 발생:", error);
    }
  }

  const onReplyDelete = async (replyId) => {
    try {
      await axios.delete(`${backEndUrl}/board/detail/${postId}/${replyId}/deleteReply`, { withCredentials: true });
      queryClient.invalidateQueries(["detail", postId]);
    } catch (error) {
      console.error("답글 삭제 중 에러 발생:", error);
    }
  }

  const handleReply = (commentId) => {
    setOpenReply((prevState) => (prevState === commentId ? null : commentId));
  };

  const handleCommentEdit = (comment) => {
    setOpenCommentEdit((prevState) => (prevState === comment._id ? null : comment._id));
    editCommentSetValue("editContent", comment.content);
  }

  const handleReplyEdit = (reply) => {
    setOpenReplyEdit((prevState) => (prevState === reply._id ? null : reply._id));
    editReplySetValue("editReply", reply.replyContent);
  }

  return(
    <>
      {data.detail.findCommentByPostId.map((comment) => (
        <PostDetailComment key={comment._id}>
          <CommentWrapper>
            <CommentAuthor>{comment.username}</CommentAuthor>
            <CommentContent>{comment.content}</CommentContent>
            <CommentTime>
              {comment.postingTime}
              <CommentOption onClick={() => handleReply(comment._id)}>답글 달기</CommentOption>
              {comment.userId === loggedInUserId && (
                <>
                  <CommentOption onClick={() => handleCommentEdit(comment)}>수정하기</CommentOption>
                  <CommentOption onClick={() => onCommentDelete(comment._id)}>삭제하기</CommentOption>
                </>
              )}
              {openCommentEdit === comment._id ? (
                <EditInputContainer key={comment._id} onSubmit={editCommentHandleSubmit((putData) => onCommentEdit(comment._id, putData))}>
                  <EditInput
                    type="editContent"
                    {...editCommentRegister("editContent", { required: "수정 댓글 내용을 작성 해주세요." })}
                  />
                  <EditInputSubmit>수정</EditInputSubmit>
                </EditInputContainer> 
              ) : null}
            </CommentTime>
            {data.detail.findReplyByCommentId.map((reply) => {
              if (reply.commentId === comment._id) {
                return (
                  <PostDetailReply key={reply._id}>
                    <ReplyWrapper>
                      <ReplyAuthor>{reply.username}</ReplyAuthor>
                      <ReplyContent>{reply.replyContent}</ReplyContent>
                      <ReplyTime>
                        {reply.postingTime}
                        {reply.userId === loggedInUserId && (
                          <>
                            <CommentOption onClick={() => handleReplyEdit(reply)}>수정하기</CommentOption>
                            <CommentOption onClick={() => onReplyDelete(reply._id)}>삭제하기</CommentOption>
                          </>
                        )}
                        {openReplyEdit === reply._id ? (
                          <EditInputContainer key={reply._id} onSubmit={editReplyHandleSubmit((putData) => onReplyEdit(reply._id, putData))}>
                            <EditInput
                              type="editReply"
                              {...editReplyRegister("editReply", { required: "수정 답글 내용을 작성 해주세요." })}
                            />
                            <EditInputSubmit>수정</EditInputSubmit>
                          </EditInputContainer> 
                        ) : null}
                      </ReplyTime>
                    </ReplyWrapper>
                  </PostDetailReply>
                );
              }
            })}
          </CommentWrapper>
          {openReply === comment._id ? (
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