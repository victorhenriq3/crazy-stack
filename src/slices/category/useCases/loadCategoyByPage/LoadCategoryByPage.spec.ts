import MockDate from "mockdate";

import { Query } from "@/application/types";
import { mock, MockProxy } from "jest-mock-extended";
import { fakeCategoryPagianted } from "../../entities/CategoryEntity.spec";
import { LoadCategoryByPageRepository } from "../../repositories";
import { LoadCategoryByPage, loadCategoryByPage } from "./LoadCategoryByPage";

describe("teste", () => {
  let fakeQuery: Query;
  let testInstance: LoadCategoryByPage;
  let loadCategoryByPageRepository: MockProxy<LoadCategoryByPageRepository>;

    beforeAll(async () => {
      MockDate.set(new Date());
      loadCategoryByPageRepository = mock();
      fakeQuery =  {fields: {name: "123"}, options: {}}
      loadCategoryByPageRepository.loadCategoryByPage.mockResolvedValue(fakeCategoryPagianted)
    });

    beforeEach(() => {
      testInstance = loadCategoryByPage(loadCategoryByPageRepository)
    });

    afterAll(async () => {
      MockDate.reset();
    });

    it('should call loadCategory of LoadCategoryRepository with correct values', async () => {
      await testInstance(fakeQuery)
      expect(loadCategoryByPageRepository.loadCategoryByPage).toHaveBeenCalledWith(fakeQuery)
      expect(loadCategoryByPageRepository.loadCategoryByPage).toHaveBeenCalledTimes(1)
    })

    it("should return a category loaded when loadCategoryRepository return it", async () => {
      const category = await testInstance(fakeQuery);
      expect(category).toEqual(fakeCategoryPagianted);
    })

    it("should return null when loadCategoryRepository insert null", async () => {
      loadCategoryByPageRepository.loadCategoryByPage.mockResolvedValue(null);
      const category = await testInstance(fakeQuery);
      expect(category).toBeNull();
    })

    it("should rethrow if loadCategory of loadCategory throws", async () => {
      loadCategoryByPageRepository.loadCategoryByPage.mockRejectedValue(new Error("any_error"));
      await expect(testInstance(fakeQuery)).rejects.toThrow("any_error");
    })
})