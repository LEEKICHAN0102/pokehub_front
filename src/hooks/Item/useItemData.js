import { useQueries } from "react-query";
import {
  getAllItem,
  getItemId,
  getKoreanName,
  getItemImage,
  getKorItemDescription,
} from "../../api/item/getItem";

export default function useItemData() {
  const queries = useQueries([
    { queryKey: "item", queryFn: getAllItem },
    { queryKey: "itemId", queryFn: getItemId },
    { queryKey: "itemName", queryFn: getKoreanName },
    { queryKey: "itemImage", queryFn: getItemImage },
    { queryKey: "itemDescription", queryFn: getKorItemDescription },
  ]);

  const isLoading = queries.some((query) => query.isLoading);

  const data = {
    item: queries[0].data,
    id: queries[1].data,
    name: queries[2].data,
    image: queries[3].data,
    description: queries[4].data,
  };

  return { data, isLoading };
}
