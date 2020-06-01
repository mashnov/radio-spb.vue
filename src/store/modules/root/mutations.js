import { ROOT } from 'store/types';

export default {
  [ROOT.MUTATE_FREQUENCIES_IS_LOADING]: (state, value) => {
    state.frequenciesIsLoading = value;
  },
  [ROOT.MUTATE_FREQUENCIES_ITEMS]: (state, array) => {
    state.frequencies = array;
  },
};
