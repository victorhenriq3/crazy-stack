import { Query } from "@/application/types";
import { CategoryData } from "../../entities";

export interface DeleteCategoryRepository {
  deleteCategory(query: Query): Promise<CategoryData | null>;
}