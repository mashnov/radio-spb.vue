import { ROOT } from 'store/types';
import Api from 'store/modules/root/api';

export default {
  [ROOT.SET_FREQUENCIES_IS_LOADING]({ commit }, value) {
    commit(ROOT.MUTATE_FREQUENCIES_IS_LOADING, value);
  },
  [ROOT.SET_FREQUENCIES_ITEMS]({ commit }, array) {
    commit(ROOT.MUTATE_FREQUENCIES_ITEMS, array);
  },
  [ROOT.REQUEST_FREQUENCIES]({ dispatch }) {
    dispatch(ROOT.SET_FREQUENCIES_IS_LOADING, true);
    Api[ROOT.REQUEST_FREQUENCIES]()
      .then((data) => {
        dispatch(ROOT.SET_FREQUENCIES_ITEMS, data);
        dispatch(ROOT.SET_FREQUENCIES_IS_LOADING, false);
      })
      .catch(({ response }) => {
        console.warn(response.data);
        dispatch(ROOT.SET_FREQUENCIES_IS_LOADING, false);
      });
  },
};
