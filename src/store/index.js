import Vue from 'vue';
import Vuex from 'vuex';

import root from 'store/modules/root';
import list from 'store/modules/list';

const strict = process.env.NODE_ENV !== 'production';

Vue.use(Vuex);

export default new Vuex.Store({
  strict,
  modules: {
    root,
    list,
  },
});
