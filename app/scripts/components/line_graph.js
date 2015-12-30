'use strict';

import React from 'react';
import d3 from 'd3';
import AudioStream from '../services/audio_stream';

class LineGraph extends React.Component {
  constructor(props) {
    super(props);
  }

  path() {
    return this
             .props
             .line
             .x((data, index)=> { return this.props.xscale(index) })
             .y0(this.props.height)
             .y1((data, index)=> { return this.props.yscale(data); })
             .interpolate('linear');
  }

  render() {
    return (
      <svg
           className='line-graph'
           width={ this.props.width }
           height={ this.props.height }>
        <path d={ this.path()(this.props.data) }/>
      </svg>
    );
  }
}

export default LineGraph;
