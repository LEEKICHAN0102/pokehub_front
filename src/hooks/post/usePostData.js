import { useQueries } from "react-query";
import {
  getAllPosting
} from "../../api/post/getPost";

export default function usePostData(page){
  const queries = useQueries([
    { queryKey: ["posting" ,  page], queryFn: () => getAllPosting(page) },
  ]);

  const isLoading = queries.some((query) => query.isLoading);

  const data = {
    posting: queries[0].data,
  }

  return { data, isLoading };
}