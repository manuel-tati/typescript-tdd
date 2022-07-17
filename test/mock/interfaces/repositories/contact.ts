import { Contact } from "../../models/contact";

export interface IContactsRepository {
  findAll(): Contact[];
  save(contacts: Contact): void;
}