import { useQueries } from "react-query";
import { 
  getAllEliteFour
} from "../../api/elite-four/eliteFour";

export default function useEliteFourData(){
  const queries = useQueries([
    { queryKey: "eliteFour", queryFn: getAllEliteFour },
  ]);

  const isLoading = queries.some((query) => query.isLoading);

  const data = {
    eliteFour: queries[0].data,
  }

  return { data, isLoading };
}