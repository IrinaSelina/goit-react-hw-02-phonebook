import React from "react";
import PropTypes from "prop-types";
import "./Filter.css";

const Filter = ({ value, handleOnChange }) => {
  return (
    <div>
      <h3> Find contact dy name </h3>
      <label>
        <input
          className="filter-form"
          type=""
          name="filter"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          value={value}
          onChange={handleOnChange}
        />
      </label>
    </div>
  );
};
Filter.propTypes = {
  handleOnChange: PropTypes.func,
  value: PropTypes.string.isRequired,
};
export default Filter;
