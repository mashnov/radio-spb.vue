import { LIST } from 'store/types';

export default {
  [LIST.MUTATE_LIST_ITEMS]: (state, array) => {
    state.list = array;
  },
  [LIST.MUTATE_LIST_IS_LOADING]: (state, value) => {
    state.listIsLoading = value;
  },
  [LIST.MUTATE_ACTIVE_STATION]: (state, id) => {
    state.activeStation = id;
  },
  [LIST.MUTATE_PLAYER_STATE]: (state, value) => {
    state.playerIsOn = value;
  },
  [LIST.MUTATE_LAST_STATION]: (state, value) => {
    state.lastStation = value;
  },
};
