import { Query } from "@/application/types";
import { CategoryData } from "../../entities";

export interface UpdateCategoryRepository {
  updateCategory(query: Query, data: CategoryData): Promise<CategoryData | null>;
}