'use strict';

import React from 'react';
import AUDIO_CONTEXT from '../constants/audio_context';
import GRAPH_CONFIG from  '../constants/graph_config';
import AudioStream from '../services/audio_stream';
import VisualizerActions from './visualizer_actions';
import LineGraph from './line_graph';

class Visualizer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }

  componentWillMount() {
    this.stream = new AudioStream({
      audio:     new Audio('/app/assets/master_of_puppets.mp3'),
      context:   new AUDIO_CONTEXT(),
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
        <LineGraph line={ GRAPH_CONFIG.line }
                   xscale={ GRAPH_CONFIG.xscale }
                   yscale={ GRAPH_CONFIG.yscale }
                   width={ GRAPH_CONFIG.width }
                   height={ GRAPH_CONFIG.height }
                   data={ this.state.data }
        />
        <VisualizerActions song={ this.props.song }
                          stream={ this.stream }/>
      </div>
    );
  }
}

export default Visualizer;
