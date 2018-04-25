import Route from "@ember/routing/route";
import logger from "gurukula/utils/logger";
import $ from 'jquery';

export default Route.extend({

  beforeModel() {
    logger.log("async await route beforeModel");
  },

  model() {
    return this.fastFunction(1);
  },

  afterModel() {
    logger.log("async await route afterModel");
  },

  slowfunction(seconds) {
    return $.getJSON(`https://httpbin.org/delay/${seconds}`);
  },

  async fastFunction(seconds) {
    return await this.slowfunction(seconds);
  }

});
