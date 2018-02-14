"use strict";

import Ember from 'ember';

export default Ember.Route.extend({

  beforeModel() {
    console.log('beforeModel');
  },

  model() {
    return Ember.RSVP.hash({
      testArray: ['1', '2', '3', 'a', 'z'],
      testText: this.fastFunction(3.5)
    });
  },

  afterModel() {
    console.log('afterModel');
  },

  slowfunction(seconds) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('response text test that was late');
      }, Number.parseInt(seconds) * 1000);
    });
  },

  async fastFunction(seconds) {
    const text = await this.slowfunction(seconds);
    console.log(text);
    return text;
  }

});
