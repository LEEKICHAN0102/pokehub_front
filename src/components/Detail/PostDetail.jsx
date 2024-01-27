import { PostDetailContainer, PostDetailTitle, PostDetailContent,  PostDetailCommentInput, PostDetailComment, CommentDelete } from "./postDetail.style"

export default function PostDetail() {
  return(
    <PostDetailContainer>
      <PostDetailTitle></PostDetailTitle>
      <PostDetailContent></PostDetailContent>
      <PostDetailCommentInput />
      <CommentDelete>삭제</CommentDelete>
      <PostDetailComment></PostDetailComment>
    </PostDetailContainer>
  )
}
