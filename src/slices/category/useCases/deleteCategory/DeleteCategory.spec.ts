import MockDate from "mockdate";

import { Query } from "@/application/types";
import { DeleteCategoryRepository } from "@/slices/category/repositories";
import { mock, MockProxy } from "jest-mock-extended";
import { fakeCategoryEntity } from "../../entities/CategoryEntity.spec";
import { DeleteCategory, deleteCategory } from "./DeleteCategory";

describe("deleteCategory", () => {
  let fakeQuery: Query
  let testInstance: DeleteCategory
  let deleteCategoryRepository: MockProxy<DeleteCategoryRepository>;

    beforeAll(async () => {
      MockDate.set(new Date());
      deleteCategoryRepository = mock();
      fakeQuery = {fields: {name: '123'}, options: {}}
      deleteCategoryRepository.deleteCategory.mockResolvedValue(fakeCategoryEntity);
    });

    beforeEach(() => {
      testInstance = deleteCategory(deleteCategoryRepository);
    });

    afterAll(async () => {
      MockDate.reset();
    });

    it('should call deleteCategory of DeleteCategoryRepository with correct value', async () => {
      await testInstance(fakeQuery);
      expect(deleteCategoryRepository.deleteCategory)
        .toHaveBeenCalledWith(fakeQuery);
      expect(deleteCategoryRepository.deleteCategory).toHaveBeenCalledTimes(1);
    })

    it("should return category deleted when deleteCategoryRepository delete it", async () => {
      const category = await testInstance(fakeQuery);
      expect(category).toEqual(fakeCategoryEntity);
    })

    it("should return null when deleteCategoryRepository insert null", async () => {
      deleteCategoryRepository.deleteCategory.mockResolvedValue(null);
      const category = await testInstance(fakeQuery);
      expect(category).toBeNull();
    })

    it("should rethrow if deleteCategory of DeleteCategory throws", async () => {
      deleteCategoryRepository.deleteCategory.mockRejectedValue(new Error("any_error"));
      await expect(testInstance(fakeQuery)).rejects.toThrow("any_error");
    })
})