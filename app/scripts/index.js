'use strict';

import React from 'react';
import ReactDom from 'react-dom';
import Visualizer from './components/visualizer';

const ROOT = document.getElementById('app');

const APP = (
  <section>
    <Visualizer/>
  </section>
);

ReactDom.render(APP, ROOT);
