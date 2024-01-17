import { useQueries } from "react-query";
import { 
  getAllChampions
} from "../../api/champion/champion";

export default function useChampionData(){
  const queries = useQueries([
    { queryKey: "champion", queryFn: getAllChampions },
  ]);

  const isLoading = queries.some((query) => query.isLoading);

  const data = {
    champion: queries[0].data,
  }

  return { data, isLoading };
}