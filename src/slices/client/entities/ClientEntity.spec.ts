import MockDate from "mockdate";
import { ClientEntity } from "./ClientEntity";

export const fakeClientEntity = {
  _id: "1",
  createdById: "1",
  active: true,
  name: "Client 1",
  createdAt: new Date(),
  updatedAt: new Date(),
  cpf: "41208139835",
  phone: "11111",
  userId: "fakeuserid",
  ownerId: "fakeownerid",
  birthDate: new Date(),
  appointmentTotal: 0,
}

export const fakeClientPaginated = {
  total: 11,
  clients: Array(10).fill(fakeClientEntity)
}

describe('Client', () => {
  beforeAll(async () => {
    MockDate.set(new Date());
  });

  afterAll(async () => {
    MockDate.reset();
  })

  it('can be creted', () => {
    const obj = new ClientEntity(fakeClientEntity);
    expect(obj).toBeTruthy();
    expect(obj).toEqual({...fakeClientEntity, _id: undefined, active: false, createdAt: new Date(), updatedAt: new Date()});
  })
})