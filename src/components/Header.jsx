import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Mensagem from '../pages/Mensagem';
import { getUser } from '../services/userAPI';
import '../styles/Header.css';

class Header extends Component {
  state = {
    loading: false,
    name: '',
    image: '',
  };

  componentDidMount() {
    this.getLoggedUser();
  }

  getLoggedUser = async () => {
    this.setState({ loading: true });
    const { name, image } = await getUser();
    this.setState({ name, image, loading: false });
  };

  render() {
    const { loading, name, image } = this.state;
    return (
      <header data-testid="header-component" className="Header">
        <div className="logo">
          <i className="fab fa-spotify fa-2x" />
          <span className="trybe-tunes">
            <strong>TrybeTunes</strong>
          </span>
        </div>
        <div className="nav-section">
          <nav>
            <li>
              <Link data-testid="link-to-search" to="/search">
                Pesquisa
              </Link>
            </li>
            <li>
              <Link data-testid="link-to-favorites" to="/favorites">
                Favoritos
              </Link>
            </li>
            <li>
              <Link data-testid="link-to-profile" to="/profile">
                Perfil
              </Link>
            </li>
          </nav>
          <hr />
          {loading ? (
            <Mensagem />
          ) : (
            <div className="profile-header">
              <img src={ image } alt="" />
              <span data-testid="header-user-name">{name}</span>
            </div>
          )}
        </div>
      </header>
    );
  }
}

export default Header;
