import Contact from "../Contact/Contact";

import { useSelector } from "react-redux";
import { selectContacts } from "../../redux/contactsSlice";
import { selectNameFilter } from "../../redux/fitersSlice";

import css from "../ContactList/ContactList.module.css";

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);

  const currentContact = contacts.filter((cont) =>
    cont.username.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <ul className={css.list}>
      {currentContact.map((contact) => (
        <li key={contact.id}>
          <Contact data={contact} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
