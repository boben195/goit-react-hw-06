import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";

import { ImAccessibility } from "react-icons/im";
import { FaPhoneAlt } from "react-icons/fa";

import css from "../Contact/Contact.module.css";

const Contact = ({ contacts }) => {
  const dispatch = useDispatch();
  const delContact = () => {
    dispatch(deleteContact(contact.id));
  };
  return (
    <div>
      <p>
        <ImAccessibility className={css.icons} />
        {contacts}
      </p>
      <p>
        <FaPhoneAlt className={css.icons} />
        {contacts}
      </p>
      <button className={css.del} onClick={delContact}>
        delete
      </button>
    </div>
  );
};

export default Contact;
