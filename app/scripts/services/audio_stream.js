'use strict';

import EventEmitter from 'events';

class AudioStream extends EventEmitter {
  constructor(options) {
    super();

    this.playing   = false;
    this.audio     = options.audio;
    this.context   = options.context;
    this.frequency = options.frequency;

    this.source    = options.context.createMediaElementSource(options.audio);
    this.analyzer  = options.context.createAnalyser();

    this.connect();
  }

  connect() {
    this.source.connect(this.analyzer);
    this.source.connect(this.context.destination);
  }

  toggle() {
    this.playing = !this.playing;
  }

  play() {
    this.toggle();
    this.audio.play();
  }

  pause() {
    this.toggle();
    this.audio.pause();
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
