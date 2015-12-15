'use strict';

import React from 'react';
import ReactDom from 'react-dom';
import Visualizer from './components/visualizer';

const ROOT = document.getElementById('app');

const APP = (
  <section>
    <h1>Visualizer</h1>
    <Visualizer/>
  </section>
);

ReactDom.render(APP, ROOT);
