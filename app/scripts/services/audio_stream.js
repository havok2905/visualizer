'use strict';

import EventEmitter from 'events';

class AudioStream extends EventEmitter {
  constructor(audio) {
    super();

    let context = new (window.AudioContext || window.webkitAudioContext)();

    this.context   = context;
    this.source    = context.createMediaElementSource(audio);
    this.analyzer  = context.createAnalyser();
    this.frequency = new Uint8Array(200);

    this.source.connect(this.analyzer);
    this.source.connect(this.context.destination);
  }

  listenToFrequencyUpdated(callback) {
    this.on('frequency-updated', callback);
  }

  updateFrequency() {
    this.analyzer.getByteFrequencyData(this.frequency);
    this.emit('frequency-updated');
  }

  averageFrequency() {
    let frequencyLength = this.frequency.length + 1;
    let frequencyTotal  = this.frequency.reduce((a, b)=> (a + b));

    return frequencyTotal / frequencyLength;
  }
}

export default AudioStream;
