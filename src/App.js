import './App.css';
import React, { Component } from 'react';
import Input from './components/Input';

export default class App extends Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    button: 'Fill form'
  };
  inputs = [
    {
      id: 1,
      name: 'firstName',
      type: 'text',
      placeholder: 'First name',
      required: true,
      pattern: '^[A-Za-z]{2,}$',
      errorMsg: 'Incorrect first name!'
    },
    {
      id: 2,
      name: 'lastName',
      type: 'text',
      placeholder: 'Last name',
      required: true,
      pattern: '^[A-Za-z]{2,}$',
      errorMsg: 'Incorrect last name!'
    },
    {
      id: 3,
      name: 'email',
      type: 'email',
      placeholder: 'email@example.com',
      required: true,
      pattern: '[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$',
      errorMsg: 'Incorrect email!'
    },
    {
      id: 4,
      name: 'password',
      type: 'password',
      placeholder: 'Password',
      required: true,
      pattern: `^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])[a-zA-Z0-9!@#$%^&*]{6,10}$`,
      errorMsg: 'Incorrect password!'
    }
  ];

  componentDidMount() {
    document.getElementById('submit').disabled = true;
  }

  handleInput = (e) => {
    this.setState({ [e.target.name]: e.target.value }, () => {
      this.validateVorm();
    });
  };
  validateVorm = () => {
    this.inputs.forEach((el) => {
      if (this.state[el.name]) {
        let inputValue = this.state[el.name];
        let regex = new RegExp(el.pattern);

        if (!regex.test(inputValue)) {
          el.submited = 'false';
          el.className = 'invalid';
          return;
        } else el.submited = 'true';
        el.className = '';
      }
    });
    if (this.inputs.every((input) => input.submited === 'true')) {
      document.getElementById('submit').disabled = false;
      this.setState({ button: 'Submit' });
    } else {
      document.getElementById('submit').disabled = true;
      this.setState({ button: 'Fill form' });
    }
  };
  render() {
    return (
      <div className='App'>
        <div className='container'>
          <form onSubmit={(e) => e.preventDefault()}>
            {this.inputs.map((el) => {
              return (
                <Input
                  key={el.id}
                  value={this.state[el.name]}
                  {...el}
                  changeHandler={this.handleInput}
                />
              );
            })}
            <button id='submit'>{this.state.button}</button>
          </form>
        </div>
      </div>
    );
  }
}
