import { useQueries } from "react-query";
import {
  getByOrder
} from "../../api/elite-four/eliteFour";

export default function useEliteFourDetailData(order){
  const queries = useQueries([
    { queryKey: ["eliteFour", order], queryFn: ()=> getByOrder(order) },
  ]);

  const isLoading = queries.some((query) => query.isLoading);

  const data = {
    eliteFour: queries[0].data,
  }

  return { data, isLoading };
}