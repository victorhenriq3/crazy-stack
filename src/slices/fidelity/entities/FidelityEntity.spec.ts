import MockDate from "mockdate";
import { FidelityEntity } from "./FidelityEntity";

export const fakeFidelityEntity = {
  _id: "1",
  createdById: "1",
  active: true,
  name: "Fidelity 1",
  createdAt: new Date(),
  updatedAt: new Date(),
  ownerId: "fake-owner-id",
  requestId: "fake-request-id",
  points: 10,
  clientId: "fake-client-id",
}

export const fakeFidelityPaginated = {
  total: 11,
  fidelitys: Array(10).fill(fakeFidelityEntity)
}

describe('Fidelity', () => {
  beforeAll(async () => {
    MockDate.set(new Date());
  });

  afterAll(async () => {
    MockDate.reset();
  })

  it('can be creted', () => {
    const obj = new FidelityEntity(fakeFidelityEntity);
    expect(obj).toBeTruthy();
    expect(obj).toEqual({...fakeFidelityEntity, _id: undefined, active: false, createdAt: new Date(), updatedAt: new Date()});
  })
})