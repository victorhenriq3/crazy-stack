import { Query } from "@/application/types";
import { CategoryData } from "../../entities";
import { UpdateCategoryRepository } from "../../repositories";

export type UpdateCategory = (query: Query, data: CategoryData) => Promise<CategoryData | null>;
export type UpdateCategorySignature = (updateCategoryRepository: UpdateCategoryRepository) => UpdateCategory;

export const updateCategory: UpdateCategorySignature =
  (updateCategoryRepository: UpdateCategoryRepository) => (query: Query, data: CategoryData) => {
    return updateCategoryRepository.updateCategory(query, data);
  }