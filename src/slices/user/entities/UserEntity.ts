/* eslint-disable @typescript-eslint/no-explicit-any */
export type UserData = {
  _id?: string;
  createdById: string;
  name: string;
  email: string;
  role: string;
  confirmedEmail?: boolean;
  sendedEmail?: boolean;
  password: string;
  cardId?: string;
  ownerId?: string;
  myOwnerId?: string;
  payDay?: string;
  photoUrl?: string;
  cpf?: string;
  phone?: string;
  coord?: any;
  distance?: number;
  appointmentsTotal?: number;
  plan?: string;
  cnpj?: string;
  city?: string;
  uf?: string;
  address?: string;
  complement?: string;
  photoId?: string;
  cash?: boolean;
  creditcard?: boolean;
  debitcard?: boolean;
  transferbank?: boolean;
  cheque?: boolean;
  pix?: boolean;
  nextPlan?: string;
  addresses?: any;
  clientId?: string;
  active?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

export type UserPaginated = {
  users: UserData[];
  total: number;
}

export class UserEntity{
  _id?: string;
  createdById: string;
  name: string;
  email: string;
  role: string;
  confirmedEmail?: boolean;
  sendedEmail?: boolean;
  password: string;
  cardId?: string;
  ownerId?: string;
  myOwnerId?: string;
  payDay?: string;
  photoUrl?: string;
  cpf?: string;
  phone?: string;
  coord?: unknown;
  distance?: number;
  appointmentsTotal?: number;
  plan?: string;
  cnpj?: string;
  city?: string;
  uf?: string;
  address?: string;
  complement?: string;
  photoId?: string;
  cash?: boolean;
  creditcard?: boolean;
  debitcard?: boolean;
  transferbank?: boolean;
  cheque?: boolean;
  pix?: boolean;
  nextPlan?: string;
  addresses?: unknown;
  clientId?: string;
  active?: boolean;
  createdAt?: Date;
  updatedAt?: Date

  constructor(data: UserData){
    this.createdById = data.createdById;
    this.name = data.name;
    this.email = data.email;
    this.role = data.role;
    this.confirmedEmail = false;
    this.sendedEmail = false;
    this.password = data.password;
    this.cardId = data.cardId;
    this.ownerId = data.ownerId;
    this.myOwnerId = data.myOwnerId;
    this.payDay = data.payDay;
    this.photoUrl = data.photoUrl;
    this.cpf = data.cpf;
    this.phone = data.phone;
    this.coord = data.coord;
    this.distance = data.distance;
    this.appointmentsTotal = 0;
    this.plan = data.plan;
    this.cnpj = data.cnpj;
    this.city = data.city;
    this.uf = data.uf;
    this.address = data.address;
    this.complement = data.complement;
    this.photoId = data.photoId;
    this.cash = data.cash;
    this.creditcard = data.creditcard;
    this.debitcard = data.debitcard;
    this.transferbank = data.transferbank;
    this.cheque = data.cheque;
    this.pix = data.pix;
    this.nextPlan = data.nextPlan;
    this.addresses = data.addresses;
    this.clientId = data.clientId;
    this.active = false;
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }
}