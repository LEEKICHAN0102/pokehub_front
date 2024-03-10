import { useQueries } from "react-query";
import {
  getByOrder,
  getLeaderArray,
} from "../../api/gym-leader/gymLeader";

export default function useGymLeaderDetailData({order, prevOrder, nextOrder}){
  const queries = useQueries([
    { queryKey: ["gymLeader", order], queryFn: ()=> getByOrder(order) },
    { queryKey: ["name", prevOrder, nextOrder], queryFn: ()=> getLeaderArray({prevOrder, nextOrder}) },
  ]);

  const isLoading = queries.some((query) => query.isLoading);

  const data = {
    gymLeader: queries[0].data,
    name: queries[1].data,
  }

  return { data, isLoading };
}