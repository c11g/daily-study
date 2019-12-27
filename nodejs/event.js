const EventEmitter = require('events');

const myEvent = new EventEmitter();

myEvent.addListener('event1', _ => {
  console.log('fire event1');
});

myEvent.addListener('event2', _ => {
  console.log('fire event2');
});

myEvent.on('event2', _ => {
  console.log('fire event2 + 1');
});

myEvent.emit('event1');
myEvent.emit('event2');

myEvent.once('event3', _ => {
  console.log('fire event3');
});

myEvent.emit('event3');
myEvent.emit('event3');

console.log(myEvent.listenerCount('event2'));

myEvent.removeAllListeners('event2');

console.log(myEvent.listenerCount('event2'));

myEvent.emit('event2');