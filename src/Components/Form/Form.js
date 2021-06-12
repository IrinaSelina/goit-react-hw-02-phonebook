import React from "react";
import { Component } from "react";
import "./Form.css";

class InputForm extends Component {
  state = {
    filter: "",
    name: "",
    number: "",
  };
  handleChange = (e) => {
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };
  reset = () => {
    this.setState({
      name: "",
      number: "",
    });
  };
  handelSubmit = (e) => {
    e.preventDefault();

    this.props.onSubmit(this.state);
    this.reset();
  };

  render() {
    const { name, number } = this.state;
    return (
      <form className="form" onSubmit={this.handelSubmit}>
        <label className="form-label">
          Name:
          <input
            className="form-input"
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            onChange={this.handleChange}
            value={name}
          />
        </label>
        <label className="form-label">
          Number:
          <input
            className="form-input"
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            onChange={this.handleChange}
            value={number}
          />
        </label>
        <button type="submit">Add contacts</button>
      </form>
    );
  }
}

export default InputForm;
