import { contacts } from "../../data/contacts.mock.data";
import { IContactsRepository } from "../interfaces/repositories/contact";
import { Contact } from "../models/contact";

class MockContactsRepository implements IContactsRepository {
  save(contact: Contact): void {
    contacts.push(contact);
  }
  findAll(): Contact[] {
    return contacts;
  }
}

export default MockContactsRepository;
