import { LIST } from 'store/types';
import Api from 'store/modules/list/api';

export default {
  [LIST.SET_LIST_ITEMS]({ commit }, array) {
    commit(LIST.MUTATE_LIST_ITEMS, array);
  },
  [LIST.SET_LIST_IS_LOADING]({ commit }, value) {
    commit(LIST.MUTATE_LIST_IS_LOADING, value);
  },
  [LIST.SET_ACTIVE_STATION]({ commit, dispatch }, id) {
    commit(LIST.MUTATE_ACTIVE_STATION, id);
    dispatch(LIST.SET_PLAYER_STATE, !!id);
    if (id) {
      commit(LIST.MUTATE_LAST_STATION, id);
    }
  },
  [LIST.SET_PLAYER_STATE]({ commit }, value) {
    commit(LIST.MUTATE_PLAYER_STATE, value);
  },
  [LIST.REQUEST_LIST]({ dispatch }) {
    dispatch(LIST.SET_LIST_IS_LOADING, true);
    Api[LIST.REQUEST_LIST]()
      .then((data) => {
        dispatch(LIST.SET_LIST_ITEMS, data);
        dispatch(LIST.SET_LIST_IS_LOADING, false);
      })
      .catch(({ response }) => {
        console.warn(response.data);
        dispatch(LIST.SET_LIST_IS_LOADING, false);
      });
  },
};
