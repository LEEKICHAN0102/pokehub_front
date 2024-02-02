import { useQueries } from "react-query";
import {
  getByName
} from "../../api/gym-leader/gymLeader";

export default function useGymLeaderDetailData(name){
  const queries = useQueries([
    { queryKey: ["gymLeader", name], queryFn: ()=> getByName(name) },
  ]);

  const isLoading = queries.some((query) => query.isLoading);

  const data = {
    gymLeader: queries[0].data,
  }

  return { data, isLoading };
}