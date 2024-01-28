import { useQueries } from "react-query";
import { 
  getPostingById
} from "../../api/post/getPost";

export default function useDetailPostData(postId){
  const queries = useQueries([
    { queryKey: "detail", queryFn:() => getPostingById(postId) },
  ]);

  const isLoading = queries.some((query) => query.isLoading);

  const data = {
    detail: queries[0].data,
  }

  return { data, isLoading };
}