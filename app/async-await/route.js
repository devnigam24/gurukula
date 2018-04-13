import Route from '@ember/routing/route';
import { Promise } from 'rsvp';
import logger from 'gurukula/helpers/logger';

export default Route.extend({

  model() {
    return this.fastFunction(1);
  },

  afterModel() {
    logger.log('async await route complete');
  },

  slowfunction(seconds) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('response text that was late');
        reject('error getting text');
      }, Number.parseInt(seconds) * 1000);
    });
  },

  async fastFunction(seconds) {
    const text = await this.slowfunction(seconds);
    return text;
  }

});
