import Route from "@ember/routing/route";
import logger from "gurukula/helpers/logger";
import $ from 'jquery';

export default Route.extend({
  model() {
    return this.fastFunction(1);
  },

  afterModel() {
    logger.log("async await route complete");
  },

  slowfunction(seconds) {
    return $.getJSON(`https://httpbin.org/delay/${seconds}`);
  },

  async fastFunction(seconds) {
    const text = await this.slowfunction(seconds);
    logger.log(text);
    return text;
  },

  actions: {
    modifyModel() {
      this.refresh();
    }
  }
});
