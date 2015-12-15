'use strict';

import React from 'react';
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
        <h2>Frequency</h2>
        <audio id='master-of-puppets'
               src='./app/assets/master_of_puppets.mp3'></audio>
        <Graph data={ this.state.data }/>
        <button onClick={ this.play.bind(this) }>Play</button>
        <button onClick={ this.pause.bind(this) }>Pause</button>
      </div>
    );
  }
}

export default Visualizer;
