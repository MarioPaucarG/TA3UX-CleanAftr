import '../dist/circle-progress.js'

const x = new CircleProgress('.progress1', {
    max: 100,
    value: Math.floor(Math.random() * 100),
    textFormat: 'vertical'
  });

const y =  new CircleProgress('.progress2', {
    max: 100,
    value: Math.floor(Math.random() * 100),
    textFormat: 'percent'
  });

const q =  new CircleProgress('.progress3', {
    max: 100,
    value: Math.floor(Math.random() * 100),
    textFormat: 'percent'
  });

const r =  new CircleProgress('.progress4', {
    max: 100,
    value: Math.floor(Math.random() * 100),
    textFormat: 'percent'
  });