import { useQueries } from "react-query";
import {
  getAllItem,
  getItemId,
  getKoreanName,
  getItemImage,
  getKorItemDescription,
} from "../../api/item/getItem";

export default function useItemData(page) {
  const queries = useQueries([
    { queryKey: "item", queryFn: () => getAllItem(page) },
    { queryKey: "itemId", queryFn: () => getItemId(page) },
    { queryKey: "itemName", queryFn: () => getKoreanName(page) },
    { queryKey: "itemImage", queryFn: () => getItemImage(page) },
    { queryKey: "itemDescription", queryFn: () => getKorItemDescription(page) },
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
