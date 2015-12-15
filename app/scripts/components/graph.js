'use strict';

import React from 'react';
import AudioStream from '../services/audio_stream';

class Graph extends React.Component {
  constructor(props) {
    super(props);
  }

  boxes(data) {
    let boxElements = new Array(200);

    data.forEach((item, index) => {
      boxElements[index] = (
        <div key={ index }
             className='bar'
             style={{height: `${item}px`}}></div>
      );
    });
    console.log(boxElements);

    return boxElements;
  }

  render() {
    return (
      <div className='graph'>{ this.boxes(this.props.data) }</div>
    );
  }
}

export default Graph
