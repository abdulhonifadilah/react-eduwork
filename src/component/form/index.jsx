import "./form.css";

import React, { Component } from "react";
import * as Validator from "validatorjs";

export default class Form extends Component {
  state = {
    nama: "",
    email: "",
    password: "",
    message: [],
  };

  handleSubmit = (event) => {
    event.preventDefault();
    // console.log(this.state);
    let data = {
      nama: this.state.nama,
      email: this.state.email,
      password: this.state.password,
    };
    let rules = {
      nama: "required",
      email: "required|email",
      password: "required|min:8",
    };

    let validation = new Validator(data, rules, {
      required: {
        string: ":attribute harus di isi",
      },
      email: {
        string: "email ada yang salah",
      },
      min: {
        string: ":attribute minimal :min kata",
      },
    });

    validation.passes(() =>
      alert(`nama : ${this.state.nama}
    email : ${this.state.email}
    password : ${this.state.password}`)
    ); // true

    validation.fails(() => {
      this.setState({
        message: [
          ...validation.errors.get("nama"),
          ...validation.errors.get("email"),
          ...validation.errors.get("password"),
        ],
      });
    }); // false
  };

  render() {
    return (
      <div className="form-registrasi">
        <h5>task Form</h5>
        <hr />
        <h1>Registrasi</h1>
        <p className="err-message">{this.state.message[0]}</p>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="nama">Nama</label>
          <input
            type="text"
            id="nama"
            onChange={(e) => this.setState({ nama: e.target.value })}
          />
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            onChange={(e) => this.setState({ email: e.target.value })}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name=""
            id="password"
            onChange={(e) => this.setState({ password: e.target.value })}
          />
          <button type="submit">Registrasi</button>
        </form>
      </div>
    );
  }
}
