'use strict';

import React from 'react';

class AlbumArt extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='album-art'>
        <img src={ this.props.song.image }
             alt={ this.props.song.album }
             title={ this.props.song.album }/>
        <p>{ this.props.song.name }, { this.props.song.band }</p>
      </div>
    );
  }
}

export default AlbumArt;
