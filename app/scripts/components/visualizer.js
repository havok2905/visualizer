'use strict';

import React from 'react';
import AUDIO_SOURCE from '../constants/audio_source';
import AudioStream from '../services/audio_stream';
import Graph from './graph';

class Visualizer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
    this.running = false;
  }

  componentDidMount() {
    this.audio = document.getElementById('master-of-puppets');
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
        <audio id='master-of-puppets'
               src={ AUDIO_SOURCE }></audio>
        <Graph data={ this.state.data }/>
        <div className='actions -center'>
          <button className='button'
                  onClick={ this.play.bind(this) }>Play</button>
          <button className='button'
                  onClick={ this.pause.bind(this) }>Pause</button>
        </div>
      </div>
    );
  }
}

export default Visualizer;
