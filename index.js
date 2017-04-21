const Intersection = require('./Functional/Intersection');

const PERIOD = 1800;
const NOTIFY_DURATION = 30; //seconds
const CHANGE = 300; //seconds = 5 minutes

function simulate(period, change, notify) {
  let elapsed = 0;
  let intersection = Intersection();
  while (elapsed < period) {
    elapsed += change - notify;
    console.log(intersection.next().value);
    elapsed += notify;
    console.log(intersection.next().value);
  }
}

let period = PERIOD;

let lastArgv = parseInt(process.argv.pop());
if (!isNaN(lastArgv)) {
  period = lastArgv;
}

simulate(period, CHANGE, NOTIFY_DURATION);
