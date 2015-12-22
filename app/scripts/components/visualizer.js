'use strict';

import React from 'react';
import AudioStream from '../services/audio_stream';
import AlbumArt from './album_art';
import Graph from './graph';

class Visualizer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
    this.running = false;
  }

  componentDidMount() {
    this.audio = document.getElementById('audio-source');
    this.stream = new AudioStream(this.audio);
    this.stream.listenToFrequencyUpdated(this.onChange.bind(this));
  }

  onChange() {
    this.setState({ data: this.stream.frequency });
  }

  loop() {
    this.stream.updateFrequency();
    if(this.running) requestAnimationFrame(this.loop.bind(this));
  }

  play() {
    this.running = true;
    this.audio.play();
    this.loop();
  }

  pause() {
    this.running = false;
    this.audio.pause();
  }

  render() {
    return (
      <div>
        <audio id='audio-source'
               src={ this.props.song.source }></audio>
        <AlbumArt song={ this.props.song }/>
        <div className='actions -center'>
          <button className='button'
                  onClick={ this.play.bind(this) }>Play</button>
          <button className='button'
                  onClick={ this.pause.bind(this) }>Pause</button>
        </div>
        <Graph data={ this.state.data }/>
      </div>
    );
  }
}

export default Visualizer;
