import { ROOT } from 'store/types';

export default {
  [ROOT.GET_FREQUENCIES_IS_LOADING]: ({ frequenciesIsLoading }) => frequenciesIsLoading,
  [ROOT.GET_FREQUENCIES_ITEMS]: ({ frequencies }) => frequencies,
  [ROOT.GET_MIN_FREQUENCY]: ({ frequencies }) => Math.min(...frequencies),
  [ROOT.GET_MAX_FREQUENCY]: ({ frequencies }) => Math.max(...frequencies),
};
