import MockDate from "mockdate";
import { AccountEntity } from "./AccountEntity";

export const fakeAccountEntity = {
  _id: "1",
  createdById: "1",
  active: true,
  name: "Account 1",
  createdAt: new Date(),
  updatedAt: new Date(),
  refreshToken: 'fake-refresh-token',
  expiresAt: 'fake-expires-at',
}

export const fakeAccountPaginated = {
  total: 11,
  accounts: Array(10).fill(fakeAccountEntity)
}

describe('Account', () => {
  beforeAll(async () => {
    MockDate.set(new Date());
  });

  afterAll(async () => {
    MockDate.reset();
  })

  it('can be creted', () => {
    const obj = new AccountEntity(fakeAccountEntity);
    expect(obj).toBeTruthy();
    expect(obj).toEqual({...fakeAccountEntity, _id: undefined, active: true, createdAt: new Date(), updatedAt: new Date()});
  })
})