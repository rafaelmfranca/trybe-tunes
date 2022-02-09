import React, { Component } from 'react';
import PropTypes from 'prop-types';
import getMusics from '../services/musicsAPI';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Mensagem from './Mensagem';
import MusicCard from '../components/MusicCard';
import '../styles/Album.css';
import {
  addSong,
  getFavoriteSongs,
  removeSong,
} from '../services/favoriteSongsAPI';

// Made with Alessandro Achtenberg
class Album extends Component {
  state = {
    album: {},
    artworkUrl100: '',
    copyright: '',
    tracks: [],
    loading: false,
    favorites: [],
  };

  componentDidMount() {
    this.fetchAlbumMusics();
  }

  fetchAlbumMusics = async () => {
    const { id } = this.props;
    const response = await getMusics(id);
    const { artworkUrl100, copyright } = response[0];
    const favorites = await getFavoriteSongs();
    this.setState({
      album: response[0],
      artworkUrl100,
      copyright,
      tracks: response.slice(1),
      favorites,
    });
  };

  isFavoriteSong = (id) => {
    const { favorites } = this.state;
    return favorites.some(({ trackId }) => trackId === id);
  };

  handleFavoriteSong = async (track) => {
    this.setState({ loading: true });
    if (this.isFavoriteSong(track.trackId)) await removeSong(track);
    else await addSong(track);
    const favorites = await getFavoriteSongs();
    this.setState({ loading: false, favorites });
  };

  render() {
    const {
      album: { artistName, collectionName },
      artworkUrl100,
      tracks,
      copyright,
      loading,
    } = this.state;
    return (
      <main>
        <Header />
        <div className="Album">
          {loading ? (
            <div className="loading">
              <Mensagem />
            </div>
          ) : (
            <div data-testid="page-album" className="album-content">
              <div className="album-infos">
                <img
                  className="blurred"
                  src={ artworkUrl100.replace('100x100bb.jpg', '600x600bb.jpg') }
                  alt=""
                />
                <img
                  className="cover"
                  src={ artworkUrl100.replace('100x100bb.jpg', '600x600bb.jpg') }
                  alt=""
                />
                <div className="album-infos-text">
                  <small>
                    <strong>ALBUM</strong>
                  </small>
                  <p data-testid="album-name">
                    <strong>{collectionName}</strong>
                  </p>
                  <small data-testid="artist-name">
                    <strong>{artistName}</strong>
                    <span>{` ⚬ ${copyright.match(/\d+/)}`}</span>
                    <span>{` ⚬ ${tracks.length} músicas`}</span>
                  </small>
                </div>
              </div>
              <hr />
              <div className="album-tracks">
                {tracks.map((track, index) => (
                  <MusicCard
                    key={ track.trackId }
                    data={ track }
                    index={ +index + 1 }
                    handleFavoriteSong={ this.handleFavoriteSong }
                    checked={ this.isFavoriteSong(track.trackId) }
                  />
                ))}
              </div>
            </div>
          )}
        </div>
        <Footer />
      </main>
    );
  }
}

Album.propTypes = {
  id: PropTypes.string,
}.isRequired;

export default Album;
