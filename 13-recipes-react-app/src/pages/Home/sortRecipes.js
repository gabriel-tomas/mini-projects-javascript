import { shuffle } from 'lodash';
export default (items, quantity) => {
  return shuffle(items).slice(0, quantity);
};
