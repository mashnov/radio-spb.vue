import { ROOT } from 'store/types';
import { frequencies } from 'store/apiResponse';

export default {
  [ROOT.REQUEST_FREQUENCIES]: () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(frequencies);
      }, 1100);
    });
  },
};
