import { useQueries } from "react-query";
import { getAllEvent  } from "../../api/event/event";

export default function useEventData() {
  const queries = useQueries([
    { queryKey: "event", queryFn: getAllEvent },
  ]);

  const isLoading = queries.some((query) => query.isLoading);

  const data = {
    event: queries[0].data,
  };

  return { data, isLoading };
}
