<template>
  <div
    ref="component"
    class="sidebar-frequencies-pointer"
    @click="clickHandler"
  />
</template>

<script>
  import { createNamespacedHelpers } from 'vuex';
  import { LIST, ROOT } from 'store/types';

  const {
    mapGetters: mapRootGetters,
  } = createNamespacedHelpers('root');

  const {
    mapGetters: mapListGetters,
    mapActions: mapListActions,
  } = createNamespacedHelpers('list');

  export default {
    name: 'SidebarFrequenciesAction',
    computed: {
      ...mapRootGetters({
        frequenciesList: ROOT.GET_FREQUENCIES_ITEMS,
        minFrequency: ROOT.GET_MIN_FREQUENCY,
        maxFrequency: ROOT.GET_MAX_FREQUENCY,
      }),
      ...mapListGetters({
        stationsList: LIST.GET_LIST_ITEMS,
      }),
    },
    methods: {
      ...mapListActions({
        setActiveStationId: LIST.SET_ACTIVE_STATION,
        setPlayerState: LIST.SET_PLAYER_STATE,
      }),
      clickHandler({ layerY }) {
        const { minFrequency, maxFrequency, findStation } = this;
        const { height } = this.$refs.component.getBoundingClientRect();
        const percentPosition = layerY / height * 100;
        const frequencyDif = minFrequency - maxFrequency;
        const frequency = parseFloat((frequencyDif / 100 * percentPosition + maxFrequency).toFixed(1));
        const station = findStation(frequency);
        this.setActiveStationId(station.id);
        this.setPlayerState(true);
      },
      findStation(frequency) {
        const { stationsList, minFrequency, maxFrequency } = this;
        const closestStation = stationsList.filter((currentStation, index) => {
          const prevStation = stationsList[index - 1] || {};
          const nextStation = stationsList[index + 1] || {};
          const prevFrequency = prevStation.range || minFrequency;
          const nextFrequency = nextStation.range || maxFrequency;
          return frequency < nextFrequency && frequency > prevFrequency;
        });

        if (closestStation.length > 1) {
          closestStation.sort((prevStation, nextStation) => {
            const prevFrequencyDif = Math.abs(frequency - prevStation.range);
            const nextFrequencyDif = Math.abs(frequency - nextStation.range);
            return prevFrequencyDif - nextFrequencyDif;
          });
        }

        return closestStation[0];
      },
    },
  };
</script>

<style lang="scss" scoped>
  .sidebar-frequencies-pointer {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
  }
</style>
