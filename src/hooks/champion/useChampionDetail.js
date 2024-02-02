import { useQueries } from "react-query";
import {
  getByName
} from "../../api/champion/champion";

export default function useChampionDetailData(name){
  const queries = useQueries([
    { queryKey: ["champion", name], queryFn: ()=> getByName(name) },
  ]);

  const isLoading = queries.some((query) => query.isLoading);

  const data = {
    champion: queries[0].data,
  }

  return { data, isLoading };
}