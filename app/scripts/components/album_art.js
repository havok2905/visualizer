'use strict';

import React from 'react';

class AlbumArt extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <img src={ this.props.song.image }
             alt={ this.props.song.album }
             title={ this.props.song.album }/>
        <div>
          <p>{ this.props.song.name  }, { this.props.song.album }</p>
          <p>{ this.props.song.band  }</p>
          <p>{ this.props.song.year  }</p>
          <p>{ this.props.song.genre }</p>
        </div>
      </div>
    );
  }
}

export default AlbumArt;
