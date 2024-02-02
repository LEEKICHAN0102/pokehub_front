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
    { queryKey: ["item", page], queryFn: () => getAllItem(page) },
    { queryKey: ["id", page], queryFn: () => getItemId(page) },
    { queryKey: ["name", page], queryFn: () => getKoreanName(page) },
    { queryKey: ["image", page], queryFn: () => getItemImage(page) },
    { queryKey: ["description", page], queryFn: () => getKorItemDescription(page) },
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
