import { LIST } from 'store/types';
import { stations } from 'store/apiResponse';

export default {
  [LIST.REQUEST_LIST]: () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(stations);
      }, 1200);
    });
  },
};
