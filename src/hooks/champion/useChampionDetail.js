import { useQueries } from "react-query";
import {
  getByOrder
} from "../../api/champion/champion";

export default function useChampionDetailData(order){
  const queries = useQueries([
    { queryKey: ["champion", order], queryFn: ()=> getByOrder(order) },
  ]);

  const isLoading = queries.some((query) => query.isLoading);

  const data = {
    champion: queries[0].data,
  }

  return { data, isLoading };
}