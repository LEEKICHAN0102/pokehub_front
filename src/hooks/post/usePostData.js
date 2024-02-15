import { useQuery } from "react-query";
import { getAllPosting } from "../../api/post/getPost";

export default function usePostData(page) {
  const query = useQuery(["posting", page], () => getAllPosting(page));

  return {
    data: query.data ? query.data : [],
    isLoading: query.isLoading
  };
}