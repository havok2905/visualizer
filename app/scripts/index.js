'use strict';

import React from 'react';
import ReactDom from 'react-dom';
import Visualizer from './components/visualizer';
import SONG from './constants/song';

const ROOT = document.getElementById('app');

const APP = (
  <section>
    <Visualizer song={ SONG }/>
  </section>
);

ReactDom.render(APP, ROOT);
