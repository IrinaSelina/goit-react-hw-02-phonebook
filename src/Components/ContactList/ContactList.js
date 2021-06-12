import React from "react";
import PropTypes from "prop-types";
import "./ContactList.css";

const ContactList = ({ contacts, onDelete }) => (
  <ul className="contact-list">
    {contacts.map(({ id, name, number }) => (
      <li className="contact-item" key={id}>
        <span className="contact-data-name">{name}:</span>
        <span className="contact-data-number">{number}</span>

        <button
          className="delete__btn"
          onClick={() => onDelete(id)}
          type="button"
        >
          Delete
        </button>
      </li>
    ))}
  </ul>
);

ContactList.propTypes = {
  onDelete: PropTypes.func,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
};
export default ContactList;
