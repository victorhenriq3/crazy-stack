import MockDate from "mockdate";
import { UserEntity } from "./UserEntity";

export const fakeUserEntity = {
  _id: "1",
  createdById: "1",
  active: true,
  name: "User 1",
  createdAt: new Date(),
  updatedAt: new Date(),
}

export const fakeUserPaginated = {
  total: 11,
  users: Array(10).fill(fakeUserEntity)
}

describe('User', () => {
  beforeAll(async () => {
    MockDate.set(new Date());
  });

  afterAll(async () => {
    MockDate.reset();
  })

  it('can be creted', () => {
    const obj = new UserEntity(fakeUserEntity);
    expect(obj).toBeTruthy();
    expect(obj).toEqual({...fakeUserEntity, _id: undefined, active: false, createdAt: new Date(), updatedAt: new Date()});
  })
})