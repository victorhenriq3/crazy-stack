import MockDate from "mockdate";
import { ProductEntity } from "./ProductEntity";

export const fakeProductEntity = {
  _id: "1",
  createdById: "1",
  active: true,
  name: "Product 1",
  createdAt: new Date(),
  updatedAt: new Date(),
  quantity: 2
}

export const fakeProductPaginated = {
  total: 11,
  products: Array(10).fill(fakeProductEntity)
}

describe('Product', () => {
  beforeAll(async () => {
    MockDate.set(new Date());
  });

  afterAll(async () => {
    MockDate.reset();
  })

  it('can be creted', () => {
    const obj = new ProductEntity(fakeProductEntity);
    expect(obj).toBeTruthy();
    expect(obj).toEqual({...fakeProductEntity, _id: undefined, active: false, createdAt: new Date(), updatedAt: new Date()});
  })
})