<template>
  <div
    class="sidebar-status"
    @click="setSelectFocus"
  >
    <div
      ref="list"
      class="sidebar-status__list"
    >
      <div
        :ref="stationOfflinePrefix"
        class="sidebar-status__item"
      >
        <SidebarStatusItem
          :name="offlineItem"
        />
      </div>
      <div
        v-for="item in stationsList"
        :key="item.id"
        :ref="`${stationRefPrefix}-${item.id}`"
        class="sidebar-status__item"
      >
        <SidebarStatusItem
          :name="item.title"
          :is-active="item.id === activeStationId"
        />
      </div>
    </div>
    <div class="sidebar-status__hidden">
      <select
        ref="select"
        :value="activeStationId"
        @change="selectStation"
      >
        <option
          :value="null"
          v-html="offlineItem"
        />
        <option
          v-for="item in stationsList"
          :key="item.id"
          :value="item.id"
          v-html="item.title"
        />
      </select>
    </div>
  </div>
</template>

<script>
  import { createNamespacedHelpers } from 'vuex';
  import { LIST } from 'store/types';

  import SidebarStatusItem from 'components/Sidebar/SidebarStatus/SidebarStatusItem';

  const {
    mapGetters: mapListGetters,
    mapActions: mapListActions,
  } = createNamespacedHelpers('list');

  const OFFLINE_ITEM = 'Offline';
  const STATION_REF_PREFIX = 'station';
  const STATION_OFFLINE_PREFIX = 'offline';

  export default {
    name: 'SidebarStatus',
    components: {
      SidebarStatusItem,
    },
    data() {
      return {
        offlineItem: OFFLINE_ITEM,
        stationRefPrefix: STATION_REF_PREFIX,
        stationOfflinePrefix: STATION_OFFLINE_PREFIX,
      };
    },
    computed: {
      ...mapListGetters({
        activeStationId: LIST.GET_ACTIVE_STATION,
        stationsList: LIST.GET_LIST_ITEMS,
      }),
    },
    watch: {
      activeStationId() {
        this.scrollToStationName();
      },
    },
    methods: {
      ...mapListActions({
        setActiveStationId: LIST.SET_ACTIVE_STATION,
        setPlayerState: LIST.SET_PLAYER_STATE,
      }),
      selectStation({ target }) {
        const { value } = target;
        this.setActiveStationId(value);
        this.setPlayerState(!!value);
      },
      setSelectFocus() {
        this.$refs.select.focus();
      },
      scrollToStationName() {
        const { activeStationId, stationRefPrefix, stationOfflinePrefix } = this;
        const stationRef = `${stationRefPrefix}-${activeStationId}`;
        let refNode = this.$refs[stationOfflinePrefix];

        if (activeStationId) {
          refNode = this.$refs[stationRef][0];
        }

        refNode.scrollIntoView();
      },
    },
  };
</script>

<style lang="scss" scoped>
  .sidebar-status {
    position: relative;
    display: block;
    padding: 20px;
    width: 100%;
    border-radius: 0 20px 20px 0;
    box-shadow: inset 0 0 30px 3px rgba(180, 180, 180, 0.2), 0 0 5px 1px #000;
    background-image: url('~images/leather.jpg');
    background-color: #1e1e1e;
  }
  .sidebar-status:before {
    content: "";
    position: absolute;
    display: block;
    top: 10px;
    left: 0;
    width: calc(100% - 10px);
    height: calc(100% - 20px);
    border-radius: 0 15px 15px 0;
    border-top: 1px dashed #8f6f17;
    border-right: 1px dashed #8f6f17;
    border-bottom: 1px dashed #8f6f17;
  }
  .sidebar-status__list {
    position: relative;
    display: block;
    width: 100%;
    height: 40px;
    overflow: hidden;
    scroll-behavior: smooth;
  }
  .sidebar-status__hidden {
    position: absolute;
    width: 0;
    height: 0;
    opacity: 0;
    overflow: hidden;
  }
</style>
