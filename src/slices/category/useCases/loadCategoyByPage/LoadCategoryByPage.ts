import { Query } from "@/application/types";
import { CategoryPaginated } from "../../entities";
import { LoadCategoryByPageRepository } from "../../repositories";

export type LoadCategoryByPage = (query: Query) => Promise<CategoryPaginated | null>;
export type LoadCategoryByPageSignature = (loadCategoryByPageRepository: LoadCategoryByPageRepository) => LoadCategoryByPage;

export const loadCategoryByPage: LoadCategoryByPageSignature =
  (loadCategoryByPageRepository: LoadCategoryByPageRepository) => (query: Query) => {
    return loadCategoryByPageRepository.loadCategoryByPage(query);
  }