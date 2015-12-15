'use strict';

import React from 'react';
import ReactDom from 'react-dom';
import Visualizer from './components/visualizer';

const ROOT = document.getElementById('app');

const APP = (
  <div>
    <h1>Visualizer</h1>
    <Visualizer/>
  </div>
);

ReactDom.render(APP, ROOT);
