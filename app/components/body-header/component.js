import Ember from "ember";
import logger from "gurukula/helpers/logger";

export default Ember.Component.extend({
  tagName: "header",
  actions: {
    changeModel() {
      logger.log("called");
    }
  }
});
