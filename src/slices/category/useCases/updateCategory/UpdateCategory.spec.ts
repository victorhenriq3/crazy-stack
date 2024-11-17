import MockDate from "mockdate";

import { Query } from "@/application/types";
import { UpdateCategoryRepository } from "@/slices/category/repositories";
import { mock, MockProxy } from "jest-mock-extended";
import { fakeCategoryEntity } from "../../entities/CategoryEntity.spec";
import { updateCategory, UpdateCategory } from "./UpdateCategory";

describe("deleteCategory", () => {
  let fakeQuery: Query
  let testInstance: UpdateCategory
  let updateCategoryRepository: MockProxy<UpdateCategoryRepository>;

    beforeAll(async () => {
      MockDate.set(new Date());
      updateCategoryRepository = mock();
      fakeQuery = {fields: {name: '123'}, options: {}}
      updateCategoryRepository.updateCategory.mockResolvedValue(fakeCategoryEntity);
    });

    beforeEach(() => {
      testInstance = updateCategory(updateCategoryRepository);
    });

    afterAll(async () => {
      MockDate.reset();
    });

    it('should call deleteCategory of deleteCategoryRepository with correct value', async () => {
      await testInstance(fakeQuery, fakeCategoryEntity);
      expect(updateCategoryRepository.updateCategory)
        .toHaveBeenCalledWith(fakeQuery, fakeCategoryEntity);
      expect(updateCategoryRepository.updateCategory).toHaveBeenCalledTimes(1);
    })

    it("should return category updated when updateCategoryRepository update it", async () => {
      const category = await testInstance(fakeQuery, fakeCategoryEntity);
      expect(category).toEqual(fakeCategoryEntity);
    })

    it("should return null when updateCategoryRepository insert null", async () => {
      updateCategoryRepository.updateCategory.mockResolvedValue(null);
      const category = await testInstance(fakeQuery, fakeCategoryEntity);
      expect(category).toBeNull();
    })

    it("should rethrow if updateCategory of UpdateCategory throws", async () => {
      updateCategoryRepository.updateCategory.mockRejectedValue(new Error("any_error"));
      await expect(testInstance(fakeQuery, fakeCategoryEntity)).rejects.toThrow("any_error");
    })
})