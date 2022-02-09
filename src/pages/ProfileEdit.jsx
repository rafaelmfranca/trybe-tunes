import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Mensagem from './Mensagem';
import { getUser, updateUser } from '../services/userAPI';
import '../styles/ProfileEdit.css';

class ProfileEdit extends Component {
  state = {
    loading: false,
    isButtonDisabled: true,
    user: {},
    redirect: false,
  };

  componentDidMount() {
    this.getLoggedUser();
  }

  handleSaveButtonStatus = () => {
    const flag = this.validateEmptyFields() && this.validateEmail();
    if (flag) this.setState({ isButtonDisabled: false });
    else this.setState({ isButtonDisabled: true });
  };

  validateEmptyFields = () => {
    const {
      user: { name, image, description },
    } = this.state;
    const fields = [name, image, description];
    return fields.every((field) => field.trim().length > 0);
  };

  // Regex from https://stackoverflow.com/questions/4964691/super-simple-email-validation-with-javascript
  validateEmail = () => {
    const {
      user: { email },
    } = this.state;
    return /^\S+@\S+\.\S+$/.test(email);
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState(
      ({ user: prevUser }) => ({
        user: { ...prevUser, [name]: value },
      }),
      () => this.handleSaveButtonStatus(),
    );
  };

  getLoggedUser = async () => {
    this.setState({ loading: true });
    const user = await getUser();
    this.setState({ loading: false, user }, () => this.handleSaveButtonStatus());
  };

  handleSubmit = async () => {
    const { user } = this.state;
    this.setState({ loading: true });
    await updateUser(user);
    this.setState({ redirect: true });
  };

  render() {
    const {
      loading,
      isButtonDisabled,
      user: { name, email, image, description },
      redirect,
    } = this.state;
    return (
      <main>
        <Header />
        {redirect && <Redirect to="/profile" />}
        {loading ? (
          <div className="loading">
            <Mensagem />
          </div>
        ) : (
          <div data-testid="page-profile-edit" className="ProfileEdit">
            <form>
              <img src={ image } alt="Profile" />
              <label htmlFor="image">
                <small>
                  <strong>Imagem de perfil</strong>
                </small>
                <input
                  data-testid="edit-input-image"
                  name="image"
                  type="text"
                  value={ image }
                  onChange={ this.handleChange }
                />
              </label>
              <label htmlFor="name">
                <small>
                  <strong>Nome</strong>
                </small>
                <input
                  data-testid="edit-input-name"
                  name="name"
                  type="text"
                  value={ name }
                  onChange={ this.handleChange }
                />
              </label>
              <label htmlFor="email">
                <small>
                  <strong>E-mail</strong>
                </small>
                <input
                  data-testid="edit-input-email"
                  name="email"
                  type="text"
                  value={ email }
                  onChange={ this.handleChange }
                />
              </label>
              <label htmlFor="description">
                <small>
                  <strong>Descrição</strong>
                </small>
                <textarea
                  data-testid="edit-input-description"
                  name="description"
                  type="text"
                  value={ description }
                  onChange={ this.handleChange }
                />
              </label>
              <button
                type="button"
                data-testid="edit-button-save"
                disabled={ isButtonDisabled }
                onClick={ this.handleSubmit }
              >
                Salvar perfil
              </button>
            </form>
          </div>
        )}
        <Footer />
      </main>
    );
  }
}

export default ProfileEdit;
