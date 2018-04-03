import {
  debug
} from '@ember/debug';
import EmberError from '@ember/error';

class logger {

  constructor() {
    console.clear();
  }

  debug(...args) {
    debug(...args);
  }

  warn(...args) {
    console.warn(...args);
  }

  error(...args) {
    console.error(...args);
  }

  log(...args) {
    console.log(...args);
  }

  info(...args) {
    console.info(...args);
  }
}

export default new logger();
