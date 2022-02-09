import React, { Component } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Mensagem from './Mensagem';
import MusicCard from '../components/MusicCard';
import { getUser } from '../services/userAPI';
import { getFavoriteSongs, removeSong } from '../services/favoriteSongsAPI';
import '../styles/Favorites.css';

class Favorites extends Component {
  state = {
    loading: false,
    favorites: [],
    name: '',
    image: '',
  };

  componentDidMount() {
    this.fetchFavoriteSongs();
    this.getLoggedUser();
  }

  fetchFavoriteSongs = async () => {
    this.setState({ loading: true });
    const favorites = await getFavoriteSongs();
    this.setState({ loading: false, favorites });
  };

  isFavoriteSong = (id) => {
    const { favorites } = this.state;
    return favorites.some(({ trackId }) => trackId === id);
  };

  handleFavoriteSong = async (track) => {
    this.setState({ loading: true });
    if (this.isFavoriteSong(track.trackId)) await removeSong(track);
    const favorites = await getFavoriteSongs();
    this.setState({ loading: false, favorites });
  };

  getLoggedUser = async () => {
    this.setState({ loading: true });
    const { name, image } = await getUser();
    this.setState({ name, image, loading: false });
  };

  render() {
    const { loading, favorites, name, image } = this.state;
    return (
      <main>
        <Header />
        <div className="Favorites">
          {loading ? (
            <div className="loading">
              <Mensagem />
            </div>
          ) : (
            <div data-testid="page-favorites" className="favorites-content">
              <div className="favorites-infos">
                <img
                  className="blurred"
                  src="https://i.pinimg.com/564x/fe/5c/36/fe5c36b8b4cbaa728f3c03a311e002cb.jpg"
                  alt=""
                />
                <img
                  className="cover"
                  src="https://i.pinimg.com/564x/fe/5c/36/fe5c36b8b4cbaa728f3c03a311e002cb.jpg"
                  alt=""
                />
                <div className="favorites-infos-text">
                  <small>
                    <strong>PLAYLIST</strong>
                  </small>
                  <p>
                    <strong>Músicas Favoritas</strong>
                  </p>
                  <small className="favorites-profile">
                    <img src={ image } alt="" />
                    <strong>{name}</strong>
                    <span>{` ⚬ ${favorites.length} músicas`}</span>
                  </small>
                </div>
              </div>
              <hr />
              <div className="favorites-tracks">
                {favorites.map((favorite, index) => (
                  <div key={ favorite.trackId }>
                    <MusicCard
                      data={ favorite }
                      index={ index + 1 }
                      favoriteImg={ favorite.artworkUrl60 }
                      handleFavoriteSong={ this.handleFavoriteSong }
                      checked={ this.isFavoriteSong(favorite.trackId) }
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
          <Footer />
        </div>
      </main>
    );
  }
}

export default Favorites;
