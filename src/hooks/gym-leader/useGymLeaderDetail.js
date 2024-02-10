import { useQueries } from "react-query";
import {
  getByOrder
} from "../../api/gym-leader/gymLeader";

export default function useGymLeaderDetailData(order){
  const queries = useQueries([
    { queryKey: ["gymLeader", order], queryFn: ()=> getByOrder(order) },
  ]);

  const isLoading = queries.some((query) => query.isLoading);

  const data = {
    gymLeader: queries[0].data,
  }

  return { data, isLoading };
}