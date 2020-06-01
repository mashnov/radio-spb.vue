<template>
  <div id="app">
    <Preloader :is-visible="preloaderIsVisible" />
    <template v-if="!preloaderIsVisible">
      <Sidebar />
      <StationList />
      <Audio />
    </template>
  </div>
</template>

<script>
  import { createNamespacedHelpers } from 'vuex';
  import { ROOT, LIST } from 'store/types';

  import Preloader from 'components/Preloader/Preloader';
  import Sidebar from 'components/Sidebar/Sidebar';
  import StationList from 'components/Station/StationList';
  import Audio from 'components/Audio/Audio';

  const {
    mapGetters: mapRootGetters,
    mapActions: mapRootActions,
  } = createNamespacedHelpers('root');

  const {
    mapGetters: mapListGetters,
    mapActions: mapListActions,
  } = createNamespacedHelpers('list');

  export default {
    name: 'App',
    components: {
      Preloader,
      Sidebar,
      StationList,
      Audio,
    },
    computed: {
      ...mapRootGetters({
        frequenciesIsLoaded: ROOT.GET_FREQUENCIES_IS_LOADING,
      }),
      ...mapListGetters({
        stationsIsLoaded: LIST.GET_LIST_IS_LOADING,
      }),
      preloaderIsVisible() {
        const { frequenciesIsLoaded, stationsIsLoaded } = this;
        return frequenciesIsLoaded || stationsIsLoaded;
      },
    },
    mounted() {
      this.getFrequencies();
      this.getStations();
    },
    methods: {
      ...mapRootActions({
        getFrequencies: ROOT.REQUEST_FREQUENCIES,
      }),
      ...mapListActions({
        getStations: LIST.REQUEST_LIST,
      }),
    },
  };
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Lobster&amp;subset=cyrillic');

  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
    appearance: none;
  }
  html {
    user-select: none;
    font-weight: 400;
    font-family: 'Lobster', cursive;
    background-image: url('~images/wood.jpg');
    background-attachment: fixed;
    background-color: #1e1e1e;
  }
  body {
    -webkit-tap-highlight-color: transparent;
  }
</style>
