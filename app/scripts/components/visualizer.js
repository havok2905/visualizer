'use strict';

import React from 'react';
import AudioStream from '../services/audio_stream';
import AudioContext from '../constants/audio_context';
import VisualizerActions from './visualizer_actions';
import Graph from './graph';

class Visualizer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }

  componentWillMount() {
    this.stream = new AudioStream({
      audio:     new Audio('/app/assets/master_of_puppets.mp3'),
      context:   new AudioContext(),
      frequency: new Uint8Array(200)
    });

    this.stream.listenToFrequencyUpdated(this.onChange.bind(this));
  }

  onChange() {
    this.setState({data: this.stream.frequency});
  }

  render() {
    return (
      <div className='visualizer'>
        <Graph data={ this.state.data }/>
        <VisualizerActions song={ this.props.song }
                          stream={ this.stream }/>
      </div>
    );
  }
}

export default Visualizer;
