'use strict';

import React from 'react';
import AudioStream from '../services/audio_stream';
import AlbumArt from './album_art';
import Graph from './graph';

class Visualizer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      running: false
    };
  }

  componentDidMount() {
    this.audio = document.getElementById('audio-source');
    this.stream = new AudioStream(this.audio);
    this.stream.listenToFrequencyUpdated(this.onChange.bind(this));
  }

  onChange() {
    this.setState({data: this.stream.frequency});
  }

  loop() {
    this.stream.updateFrequency();
    if(this.state.running) requestAnimationFrame(this.loop.bind(this));
  }

  play() {
    if(!this.state.running) {
      this.state.running = true;
      this.audio.play();
      this.loop();
    }
  }

  pause() {
    if(this.state.running) {
      this.state.running = false;
      this.audio.pause();
    }
  }

  render() {
    return (
      <div className='visualizer'>
        <audio id='audio-source'
               src={ this.props.song.source }></audio>

        <Graph data={ this.state.data }/>

        <div className='visualizer-footer'>
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
      </div>
    );
  }
}

export default Visualizer;
