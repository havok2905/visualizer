'use strict';

import d3 from 'd3';

let width = 1100;
let height = 300;

const GRAPH_CONFIG = {
  height: height,

  width: width,

  line: d3.svg.area(),

  xscale: d3
            .scale
            .linear()
            .domain([0, 200])
            .range([0, 1100]),

  yscale: d3
            .scale
            .linear()
            .domain([0, height])
            .range([height, 0])
};

export default GRAPH_CONFIG;
