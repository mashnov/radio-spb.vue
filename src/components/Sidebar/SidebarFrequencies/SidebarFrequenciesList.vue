<template>
  <div class="sidebar-frequencies-list">
    <div
      v-for="(item, index) in frequenciesList"
      :key="index"
      :style="getItemTopPosition(item)"
      class="sidebar-frequencies-list__item"
    >
      <span>{{ item }}</span>
      <span>mHz</span>
    </div>
  </div>
</template>

<script>
  import { createNamespacedHelpers } from 'vuex';
  import { ROOT } from 'store/types';

  const {
    mapGetters: mapRootGetters,
  } = createNamespacedHelpers('root');

  export default {
    name: 'SidebarFrequenciesList',
    computed: {
      ...mapRootGetters({
        frequenciesList: ROOT.GET_FREQUENCIES_ITEMS,
        minFrequency: ROOT.GET_MIN_FREQUENCY,
        maxFrequency: ROOT.GET_MAX_FREQUENCY,
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
    },
  };
</script>

<style lang="scss" scoped>
  .sidebar-frequencies-list {
    position: absolute;
    top: 0;
    left: 20px;
    width: calc(50% - 20px - 10px);
    height: 100%;
  }
  .sidebar-frequencies-list__item {
    position: absolute;
    width: 100%;
    text-align: center;
    height: 26px;
    line-height: 26px;
    border-radius: 8px/13px;
    transform: translateY(-13px) scale(0.8);
    background: rgba(0, 0, 0, 0.5);
    box-shadow: inset 0 0 10px 2px #000, 0 0 2px 1px rgba(255, 255, 255, 0.2);
    transition: color 0.7s, text-shadow 0.9s, transform 0.9s;
  }
  .sidebar-frequencies-list__item:nth-child(2n+1) {
    display: none;
  }
  .sidebar-frequencies-list__item span {
    display: inline-block;
    vertical-align: middle;
    color: #f5f5f5;
    font-size: 13px;
  }
  .sidebar-frequencies-list__item span:last-child {
    font-size: 9px;
    margin-left: 3px;
  }
  @media (min-height: 540px) {
    .sidebar-frequencies-list__item {
      transform: translateY(-13px);
    }
  }
  @media (min-height: 768px) {
    .sidebar-frequencies-list__item:nth-child(2n+1) {
      display: block;
    }
  }
</style>
