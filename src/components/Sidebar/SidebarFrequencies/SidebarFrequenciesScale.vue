<template>
  <div class="sidebar-frequencies-scale">
    <div
      v-for="(item, index) in stationsList"
      :key="index"
      :style="getItemTopPosition(item.range)"
      :class="isActiveItem(item.id) && 'sidebar-frequencies-scale__item-active'"
      class="sidebar-frequencies-scale__item"
    >
      <span />
      <span />
    </div>
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
    name: 'SidebarFrequenciesScale',
    computed: {
      ...mapRootGetters({
        frequenciesList: ROOT.GET_FREQUENCIES_ITEMS,
        minFrequency: ROOT.GET_MIN_FREQUENCY,
        maxFrequency: ROOT.GET_MAX_FREQUENCY,
      }),
      ...mapListGetters({
        stationsList: LIST.GET_LIST_ITEMS,
        currentStation: LIST.GET_CURRENT_STATION,
      }),
    },
    methods: {
      getItemTopPosition(mhz) {
        const { minFrequency, maxFrequency } = this;
        const frequencyDif = minFrequency - maxFrequency;
        const realPosition = frequencyDif - (minFrequency - mhz);
        const percentPosition = realPosition / frequencyDif * 100;

        return { top: `${percentPosition}%` };
      },
      isActiveItem(id) {
        const { currentStation } = this;
        return currentStation.id === id;
      },
    },
  };
</script>

<style lang="scss" scoped>
  .sidebar-frequencies-scale {
    position: absolute;
    top: 0;
    right: 20px;
    width: calc(50% - 20px - 10px);
    height: 100%;
  }
  .sidebar-frequencies-scale__item {
    position: absolute;
    width: 100%;
    height: 5px;
    right: 0;
    margin-bottom: 2px;
  }
  .sidebar-frequencies-scale__item span {
    position: absolute;
    width: calc(50% - 15px);
    height: 100%;
    border-radius: 2px;
    background: #251a10;
    box-shadow: inset 0 0 10px 2px #000, 0 0 2px 1px rgba(255, 255, 255, 0.2);
  }
  .sidebar-frequencies-scale__item span:first-child {
    left: 0;
  }
  .sidebar-frequencies-scale__item span:last-child {
    right: 0;
  }
  .sidebar-frequencies-scale__item:nth-child(2n-1) span:first-child {
    display: none;
  }
  .sidebar-frequencies-scale__item:nth-child(2n) span:last-child {
    display: none;
  }
  .sidebar-frequencies-scale__item span:before {
    content: '';
    position: absolute;
    height: 1px;
    width: 0;
    top: 2px;
    background: #f5f5f5;
    box-shadow: 0 0 10px 1px rgba(255,215,0,.4);
    transition: width 0.15s linear;
    transition-delay: 0s;
  }
  .sidebar-frequencies-scale__item span:first-child:before {
    right: 3px;
  }
  .sidebar-frequencies-scale__item span:last-child:before {
    left: 3px;
  }
  .sidebar-frequencies-scale__item-active span:before {
    width: calc(100% - 6px);
    transition-delay: 0.8s;
  }
  @media (min-height: 1024px) {
    .sidebar-frequencies-scale__item:nth-child(2n-1) span:first-child {
      display: block;
    }
    .sidebar-frequencies-scale__item:nth-child(2n) span:last-child {
      display: block;
    }
  }
</style>
