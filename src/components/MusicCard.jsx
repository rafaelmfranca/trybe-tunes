import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/MusicCard.css';

class MusicCard extends Component {
  render() {
    const {
      data: { artistName, trackId, trackName, previewUrl },
      data,
      handleFavoriteSong,
      checked,
      favoriteImg,
      index,
    } = this.props;
    return (
      <div className="track-container">
        <div className="MusicCard">
          <p className="track-number">
            <strong>{index}</strong>
          </p>
          {favoriteImg && (
            <img
              src={ favoriteImg }
              alt=""
            />
          )}
          <div className="track-infos">
            <p>{trackName}</p>
            <p>{artistName}</p>
          </div>
          <audio data-testid="audio-component" src={ previewUrl } controls>
            <track kind="captions" />
            O seu navegador não suporta o elemento
            {' '}
            <code>audio</code>
            .
          </audio>
          <label htmlFor={ trackId }>
            <input
              data-testid={ `checkbox-music-${trackId}` }
              type="checkbox"
              name={ trackId }
              id={ trackId }
              onChange={ () => handleFavoriteSong(data) }
              checked={ checked }
            />
          </label>
        </div>
      </div>
    );
  }
}

const { string } = PropTypes;

MusicCard.propTypes = {
  trackId: string,
  trackName: string,
  previewUrl: string,
}.isRequired;

export default MusicCard;
