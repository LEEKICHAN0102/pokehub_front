import { useQueries } from "react-query";
import {
  getByOrder,
  getChampionArray,
} from "../../api/champion/champion";

export default function useChampionDetailData({order, prevOrder, nextOrder}){
  const queries = useQueries([
    { queryKey: ["champion", order], queryFn: ()=> getByOrder(order) },
    { queryKey: ["name", prevOrder, nextOrder], queryFn: ()=> getChampionArray({prevOrder, nextOrder}) },
  ]);

  const isLoading = queries.some((query) => query.isLoading);

  const data = {
    champion: queries[0].data,
    name: queries[1].data,
  }

  return { data, isLoading };
}