'use strict';

import React from 'react';
import AlbumArt from './album_art';

class VisualizerActions extends React.Component {
  constructor(props) {
    super(props);
  }

  play() {
    if(!this.props.stream.playing) {
      this.props.stream.play();
      this.loop();
    }
  }

  pause() {
    if(this.props.stream.playing) {
      this.props.stream.pause();
    }
  }

  loop() {
    this.props.stream.updateFrequency();
    if(this.props.stream.playing) requestAnimationFrame(this.loop.bind(this));
  }

  render() {
    return (
      <div className='visualizer-actions'>
        <div className='album'>
          <AlbumArt song={ this.props.song }/>
        </div>
        <div className='actions'>
          <button className='button -pause'
                  onClick={ this.pause.bind(this) }>Pause</button>
          <button className='button -play'
                  onClick={ this.play.bind(this) }>Play</button>
        </div>
      </div>
    );
  }
}

export default VisualizerActions
