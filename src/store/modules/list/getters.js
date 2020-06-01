import find from 'lodash/find';
import { LIST } from 'store/types';

export default {
  [LIST.GET_LIST_ITEMS]: ({ list }) => list,
  [LIST.GET_LIST_IS_LOADING]: ({ listIsLoading }) => listIsLoading,
  [LIST.GET_ACTIVE_STATION]: ({ activeStation }) => activeStation,
  [LIST.GET_PLAYER_STATE]: ({ playerIsOn }) => playerIsOn,
  [LIST.GET_LAST_STATION]: ({ lastStation }) => lastStation,
  [LIST.GET_CURRENT_STATION]: (store) => {
    const { list, activeStation } = store;
    return find(list, { id: activeStation }) || {};
  },
};
