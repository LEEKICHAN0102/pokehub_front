import { useQueries } from "react-query";
import {
  getByName
} from "../../api/elite-four/eliteFour";

export default function useEliteFourDetailData(name){
  const queries = useQueries([
    { queryKey: "eliteFour", queryFn: ()=> getByName(name) },
  ]);

  const isLoading = queries.some((query) => query.isLoading);

  const data = {
    eliteFour: queries[0].data,
  }

  return { data, isLoading };
}