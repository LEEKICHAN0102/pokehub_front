import { useQueries } from "react-query";
import {
  getByOrder,
  getEliteArray,
} from "../../api/elite-four/eliteFour";

export default function useEliteFourDetailData({order, prevOrder, nextOrder}){
  const queries = useQueries([
    { queryKey: ["eliteFour", order], queryFn: ()=> getByOrder(order) },
    { queryKey: ["name", prevOrder, nextOrder], queryFn: ()=> getEliteArray({prevOrder, nextOrder}) },
  ]);

  const isLoading = queries.some((query) => query.isLoading);

  const data = {
    eliteFour: queries[0].data,
    name: queries[1].data,
  }

  return { data, isLoading };
}