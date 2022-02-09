import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Mensagem from './Mensagem';
import { createUser } from '../services/userAPI';
import '../styles/Login.css';

const MIN_LENGTH = 3;
const DEFAULT_IMG_URL = 'https://github.com/identicons/jasonlong.png';
class Login extends Component {
  state = {
    name: '',
    isButtonDisabled: true,
    loading: false,
    redirect: false,
  };

  handleChange = ({ target: { value } }) => {
    this.setState({ name: value }, () => this.handleButtonStatus());
  };

  handleButtonStatus = () => {
    const { name } = this.state;
    if (name.length >= MIN_LENGTH) {
      this.setState({ isButtonDisabled: false });
    } else {
      this.setState({ isButtonDisabled: true });
    }
  };

  handleSubmit = async () => {
    const { name } = this.state;
    this.setState({ loading: true });
    await createUser({ name, image: DEFAULT_IMG_URL });
    this.setState({ redirect: true });
  };

  render() {
    const { name, isButtonDisabled, loading, redirect } = this.state;

    return (
      <div data-testid="page-login" className="Login">
        <div className="logo">
          <i className="fab fa-spotify fa-2x" />
          <span className="trybe-tunes">
            <strong>TrybeTunes</strong>
          </span>
        </div>
        {redirect && <Redirect to="/search" />}
        {loading ? (
          <Mensagem />
        ) : (
          <div className="form-login">
            <form>
              <label htmlFor="name">
                <small><strong>Nome de usuário</strong></small>
                <input
                  data-testid="login-name-input"
                  type="text"
                  name="name"
                  value={ name }
                  onChange={ this.handleChange }
                />
              </label>
              <button
                type="button"
                data-testid="login-submit-button"
                disabled={ isButtonDisabled }
                onClick={ this.handleSubmit }
              >
                <strong>Entrar</strong>
              </button>
            </form>
          </div>
        )}
      </div>
    );
  }
}

export default Login;
