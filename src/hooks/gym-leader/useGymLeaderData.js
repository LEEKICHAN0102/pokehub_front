import { useQueries } from "react-query";
import {
  getAllGymLeaders
} from "../../api/gym-leader/gymLeader";

export default function useGymLeaderData(){
  const queries = useQueries([
    { queryKey: "gymLeader", queryFn: getAllGymLeaders },
  ]);

  const isLoading = queries.some((query) => query.isLoading);

  const data = {
    gymLeader: queries[0].data,
  }

  return { data, isLoading };
}