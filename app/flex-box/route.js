import Route from "@ember/routing/route";
import logger from "gurukula/utils/logger";

export default Route.extend({
  model() {
    return ["box1", "box2", "box3"];
  },

  afterModel() {
    logger.log("flexbox route complete");
  }
});
