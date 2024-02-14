import { useQueries } from "react-query";
import { 
  getUserData
} from "../../api/user/getUser";

export default function useUserData(){
  const queries = useQueries([
    { queryKey: "userData", queryFn: getUserData },
  ]);

  const user = {
    userData: queries[0].data,
  }

  return { user };
}