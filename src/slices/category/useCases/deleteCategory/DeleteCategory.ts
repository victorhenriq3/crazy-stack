import { Query } from "@/application/types";
import { CategoryData } from "../../entities";
import { DeleteCategoryRepository } from "../../repositories";

export type DeleteCategory = (query: Query) => Promise<CategoryData | null>;
export type DeleteCategorySignature = (deleteCategoryRepository: DeleteCategoryRepository) => DeleteCategory;

export const deleteCategory: DeleteCategorySignature =
  (deleteCategoryRepository: DeleteCategoryRepository) => (query: Query) => {
    return deleteCategoryRepository.deleteCategory(query);
  }