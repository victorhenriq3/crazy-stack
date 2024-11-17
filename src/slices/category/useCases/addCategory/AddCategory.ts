import { CategoryData, CategoryEntity } from "../../entities";
import { AddCategoryRepository } from "../../repositories";

export type AddCategory = (data: CategoryData) => Promise<CategoryEntity | null>;
export type AddCategorySignature = (addCategoryRepository: AddCategoryRepository) => AddCategory;

export const addCategory: AddCategorySignature =
  (addCategoryRepository: AddCategoryRepository) => (data: CategoryData) => {
    return addCategoryRepository.addCategory(new CategoryEntity(data));
  }