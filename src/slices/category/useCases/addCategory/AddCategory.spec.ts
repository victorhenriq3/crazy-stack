import MockDate from "mockdate";

import { fakeCategoryEntity } from "@/slices/category/entities/CategoryEntity.spec";
import { AddCategoryRepository } from "@/slices/category/repositories";
import { mock, MockProxy } from "jest-mock-extended";
import { CategoryEntity } from "../../entities";
import { addCategory } from "./AddCategory";

describe("addCategory", () => {
  let testInstance: (category: CategoryEntity) => Promise<CategoryEntity | null>;
  let addCategoryRepository: MockProxy<AddCategoryRepository>;

    beforeAll(async () => {
      MockDate.set(new Date());
      addCategoryRepository = mock();
      addCategoryRepository.addCategory.mockResolvedValue(fakeCategoryEntity);
    });

    beforeEach(() => {
      testInstance = addCategory(addCategoryRepository);
    });

    afterAll(async () => {
      MockDate.reset();
    });

    it('should call addCategory of AddCategoryRepository with correct value', async () => {
      await testInstance(fakeCategoryEntity);
      expect(addCategoryRepository.addCategory)
        .toHaveBeenCalledWith(new CategoryEntity(fakeCategoryEntity));
      expect(addCategoryRepository.addCategory).toHaveBeenCalledTimes(1);
    })

    it("should return a new category created when addCategoryRepository insert it", async () => {
      const category = await testInstance(fakeCategoryEntity);
      expect(category).toEqual(fakeCategoryEntity);
    })

    it("should return null when addCategoryRepository insert null", async () => {
      addCategoryRepository.addCategory.mockResolvedValue(null);
      const category = await testInstance(fakeCategoryEntity);
      expect(category).toBeNull();
    })

    it("should rethrow if addCategory of AddCategory throws", async () => {
      addCategoryRepository.addCategory.mockRejectedValue(new Error("any_error"));
      await expect(testInstance(fakeCategoryEntity)).rejects.toThrow("any_error");
    })
})