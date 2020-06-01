<template>
  <div class="sidebar-frequencies-pointer">
    <div
      class="sidebar-frequencies-pointer__line"
      :style="getLineWidth"
    />
  </div>
</template>

<script>
  import { createNamespacedHelpers } from 'vuex';
  import { LIST, ROOT } from 'store/types';

  const {
    mapGetters: mapRootGetters,
  } = createNamespacedHelpers('root');

  const {
    mapGetters: mapListGetters,
  } = createNamespacedHelpers('list');

  export default {
    name: 'SidebarFrequenciesPointer',
    computed: {
      ...mapRootGetters({
        frequenciesList: ROOT.GET_FREQUENCIES_ITEMS,
        minFrequency: ROOT.GET_MIN_FREQUENCY,
        maxFrequency: ROOT.GET_MAX_FREQUENCY,
      }),
      ...mapListGetters({
        stationsList: LIST.GET_LIST_ITEMS,
        activeStationId: LIST.GET_ACTIVE_STATION,
        currentStation: LIST.GET_CURRENT_STATION,
      }),
      currentFrequency() {
        return parseFloat(this.currentStation.range) || 0;
      },
      getLineWidth() {
        const { minFrequency, maxFrequency, currentFrequency } = this;

        if (!currentFrequency) {
          return { height: 0 };
        }

        const frequencyDif = minFrequency - maxFrequency;
        const realPosition = frequencyDif - (minFrequency - currentFrequency);
        const percentPosition = realPosition / frequencyDif * 100;
        const bottomPosition = 100 - percentPosition;

        return { height: `calc(${bottomPosition}% - 5px)` };
      },
    },
  };
</script>

<style lang="scss" scoped>
  .sidebar-frequencies-pointer {
    position: absolute;
    height: 100%;
    width: 11px;
    top: 0;
    right: 25%;
    overflow: hidden;
    border-radius: 15px/10px;
    background: #251a10;
    box-shadow: inset 0 0 10px 2px #000, 0 0 2px 1px rgba(255, 255, 255, 0.2);
  }
  .sidebar-frequencies-pointer__line {
    position: absolute;
    width: 1px;
    height: 0;
    background: #f5f5f5;
    bottom: 5px;
    left: 5px;
    border-radius: 5px;
    box-shadow: 0 0 10px 1px rgba(255,215,0,.6);
    transition: height .9s;
  }
</style>
