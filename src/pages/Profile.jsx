import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Mensagem from './Mensagem';
import { getUser } from '../services/userAPI';
import '../styles/Profile.css';

class Profile extends Component {
  state = {
    loading: false,
    user: {},
  };

  componentDidMount() {
    this.getLoggedUser();
  }

  getLoggedUser = async () => {
    this.setState({ loading: true });
    const user = await getUser();
    this.setState({ loading: false, user });
  };

  render() {
    const {
      loading,
      user: { name, email, image, description },
    } = this.state;
    return (
      <main>
        <Header />
        {loading ? (
          <div className="loading">
            <Mensagem />
          </div>
        ) : (
          <div data-testid="page-profile" className="Profile">
            <img data-testid="profile-image" src={ image } alt="Profile" />
            <div className="profile-infos">
              <small>
                <strong>PERFIL</strong>
              </small>
              <p>
                <strong>{name}</strong>
              </p>
              <p>{email}</p>
              <p>{description}</p>
              <button type="button">
                <Link to="/profile/edit">Editar perfil</Link>
              </button>
            </div>
          </div>
        )}
        <Footer />
      </main>
    );
  }
}

export default Profile;
