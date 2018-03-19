import Route from '@ember/routing/route';
import { hash, Promise } from 'rsvp';
import { debug, warn } from '@ember/debug';

export default Route.extend({

  beforeModel() {
    console.clear();
    debug('debug beforeModel');
    warn('warn beforeModel');
    // log('log beforeModel');
    // error('error beforeModel');
    // info('info beforeModel');
  },

  model() {
    return hash({
      testArray: ['1', '2', '3', 'a', 'z'],
      testText: this.fastFunction(3.5)
    });
  },

  afterModel() {
    // debug('debug afterModel');
  },

  slowfunction(seconds) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('response text test that was late');
        reject('error getting text');
      }, Number.parseInt(seconds) * 1000);
    });
  },

  async fastFunction(seconds) {
    const text = await this.slowfunction(seconds);
    return text;
  }

});
