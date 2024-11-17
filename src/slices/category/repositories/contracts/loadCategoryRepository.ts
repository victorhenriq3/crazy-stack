import { Query } from "@/application/types";
import { CategoryData } from "../../entities";

export interface LoadCategoryRepository {
  loadCategory: (query: Query) => Promise<CategoryData | null>;
}