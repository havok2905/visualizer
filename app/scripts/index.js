'use strict';

import React from 'react';
import ReactDom from 'react-dom';
import Visualizer from './components/visualizer';
import SONG from './constants/song';

const ROOT = document.getElementById('app');

const APP = (
  <div>
    <h1>Aduio Visualizer</h1>
    <Visualizer song={ SONG }/>
  </div>
);

ReactDom.render(APP, ROOT);
