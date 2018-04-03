import Route from '@ember/routing/route';
import logger from 'gurukula/helpers/logger'

export default Route.extend({
  model() {
    logger.debug('debug');
    logger.warn('warn');
    logger.log('log');
    logger.info('info');
    logger.error('error');
  },
});
