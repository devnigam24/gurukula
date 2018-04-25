import { helper } from '@ember/component/helper';

export function json(object) {
  return JSON.stringify(object);
}

export default helper(json);
