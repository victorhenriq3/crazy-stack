import { Query } from "@/application/types";
import { CategoryData } from "../../entities";
import { LoadCategoryRepository } from "../../repositories";

export type LoadCategory = (query: Query) => Promise<CategoryData | null>;
export type LoadCategorySignature = (loadCategoryRepository: LoadCategoryRepository) => LoadCategory;

export const loadCategory: LoadCategorySignature =
  (loadCategoryRepository: LoadCategoryRepository) => (query: Query) => {
    return loadCategoryRepository.loadCategory(query);
  }