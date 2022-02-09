import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Mensagem from './Mensagem';
import searchAlbumsAPI from '../services/searchAlbumsAPI';
import '../styles/Search.css';

const MIN_LENGTH = 2;
let ARTIST_NAME = '';
class Search extends Component {
  state = {
    loading: false,
    artistName: '',
    isButtonDisabled: true,
    apiWasFetched: false,
    response: [],
  };

  handleChange = ({ target: { value } }) => {
    this.setState({ artistName: value }, () => this.handleButtonStatus());
  };

  handleButtonStatus = () => {
    const { artistName } = this.state;
    if (artistName.length >= MIN_LENGTH) {
      this.setState({ isButtonDisabled: false });
    } else {
      this.setState({ isButtonDisabled: true });
    }
  };

  handleSubmit = async () => {
    const { artistName } = this.state;
    ARTIST_NAME = artistName;
    this.setState({ loading: true });
    const response = await searchAlbumsAPI(artistName);
    this.setState({
      loading: false,
      artistName: '',
      response,
      apiWasFetched: true,
    });
  };

  render() {
    const { loading, artistName, isButtonDisabled, response, apiWasFetched } = this.state;
    return (
      <main>
        <Header />
        {loading ? (
          <div className="loading">
            <Mensagem />
          </div>
        ) : (
          <div data-testid="page-search" className="Search">
            <div className="search-header">
              <input
                data-testid="search-artist-input"
                type="text"
                value={ artistName }
                onChange={ this.handleChange }
                placeholder="Nome do artista"
              />
              <button
                type="button"
                data-testid="search-artist-button"
                disabled={ isButtonDisabled }
                onClick={ this.handleSubmit }
              >
                Pesquisar
              </button>
            </div>
          </div>
        )}
        <div className="search-result">
          {apiWasFetched && response.length > 0 && (
            <p className="search-title-center">
              {`Todos os álbuns para "${ARTIST_NAME}"`}
            </p>
          )}
          {apiWasFetched && response.length === 0 && (
            <p className="search-title-center">
              {`Nenhum resultado encontrado para "${ARTIST_NAME}"`}
            </p>
          )}
          <div className="album-list">
            {response.map(
              ({
                artworkUrl100,
                collectionId,
                collectionName,
                artistName: artist,
              }) => (
                <div key={ collectionId } className="album-card">
                  <Link
                    data-testid={ `link-to-album-${collectionId}` }
                    to={ `/album/${collectionId}` }
                  >
                    <img
                      src={ artworkUrl100.replace(
                        '100x100bb.jpg',
                        '600x600bb.jpg',
                      ) }
                      alt=""
                    />
                    <div className="album-card-info">
                      <p>{collectionName}</p>
                      <p>{artist}</p>
                    </div>
                  </Link>
                </div>
              ),
            )}
          </div>
        </div>
        <Footer />
      </main>
    );
  }
}

export default Search;
