import MockDate from "mockdate";
import { CategoryEntity } from "./CategoryEntity";

export const fakeCategoryEntity = {
  _id: "1",
  createdById: "1",
  active: true,
  name: "Category 1",
  description: "Description 1",
  image: "image1.jpg",

  createdAt: new Date(),
  updatedAt: new Date(),
}

export const fakeCategoryPagianted = {
  total: 11,
  categorys: Array(10).fill(fakeCategoryEntity)
}

describe('Category', () => {
  beforeAll(async () => {
    MockDate.set(new Date());
  });

  afterAll(async () => {
    MockDate.reset();
  })

  it('can be creted', () => {
    const obj = new CategoryEntity(fakeCategoryEntity);
    expect(obj).toBeTruthy();
    expect(obj).toEqual({...fakeCategoryEntity, _id: undefined, active: false, createdAt: new Date(), updatedAt: new Date()});
  })
})