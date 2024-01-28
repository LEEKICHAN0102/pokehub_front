import { useQueries } from "react-query";
import { 
  getCommentById
} from "../../api/post/getPost";

export default function useDetailPostData(postId){
  const queries = useQueries([
    { queryKey: "comment", queryFn:() => getCommentById(postId) },
  ]);

  const isCommentLoading = queries.some((query) => query.isLoading);

  const commentData = {
    comment: queries[0].data,
  }

  return { commentData, isCommentLoading };
}