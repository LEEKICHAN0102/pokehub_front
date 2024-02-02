import { useQueries, useQueryClient } from 'react-query';
import { getPostingById } from '../../api/post/getPost';

export default function useDetailPostData(postId) {
  const queryClient = useQueryClient();

  const queries = useQueries([
    {
      queryKey: ["detail", postId],
      queryFn: () => getPostingById(postId),
      onSuccess: () => {
        queryClient.invalidateQueries(["detail", postId]);
      },
    },
  ]);

  const isLoading = queries.some((query) => query.isLoading);
  
  const data = {
    detail: queries[0].data,
  };

  return { data, isLoading };
}
