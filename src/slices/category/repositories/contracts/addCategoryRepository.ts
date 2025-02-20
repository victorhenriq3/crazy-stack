import { CategoryData } from "../../entities";

export interface AddCategoryRepository {
  addCategory(category: CategoryData): Promise<CategoryData | null>;
}