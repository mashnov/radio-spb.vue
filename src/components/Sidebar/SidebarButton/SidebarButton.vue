<template>
  <div class="sidebar-button">
    <div class="sidebar-button__button">
      <SidebarToggle
        :on-label="onText"
        :off-label="offText"
        :value="playerIsOn"
        :disabled="buttonIsDisabled"
        @change="toggleHandler"
      />
    </div>
  </div>
</template>

<script>
  import { createNamespacedHelpers } from 'vuex';
  import { LIST } from 'store/types';

  import SidebarToggle from 'components/Sidebar/SidebarButton/SidebarToggle';

  const ON_TEXT = 'on';
  const OFF_TEXT = 'off';

  const {
    mapGetters: mapListGetters,
    mapActions: mapListActions,
  } = createNamespacedHelpers('list');

  export default {
    name: 'SidebarButton',
    components: {
      SidebarToggle,
    },
    data() {
      return {
        onText: ON_TEXT,
        offText: OFF_TEXT,
      };
    },
    computed: {
      ...mapListGetters({
        stationsIsLoaded: LIST.GET_LIST_IS_LOADING,
        activeStationId: LIST.GET_ACTIVE_STATION,
        playerIsOn: LIST.GET_PLAYER_STATE,
        lastStationId: LIST.GET_LAST_STATION,
      }),
      buttonIsDisabled() {
        const { stationsIsLoaded, lastStationId } = this;
        return stationsIsLoaded || !lastStationId;
      },
    },
    methods: {
      ...mapListActions({
        setPlayerState: LIST.SET_PLAYER_STATE,
        setActiveStationId: LIST.SET_ACTIVE_STATION,
      }),
      toggleHandler(value) {
        const { lastStationId } = this;
        this.setPlayerState(value);
        if (!value) {
          this.setActiveStationId(null);
        }
        if (value && lastStationId) {
          this.setActiveStationId(lastStationId);
        }
      },
    },
  };
</script>

<style lang="scss" scoped>
  .sidebar-button {
    position: relative;
    display: block;
    padding: 20px;
    width: 100%;
    border-radius: 0 20px 20px 0;
    box-shadow: inset 0 0 30px 3px rgba(180, 180, 180, 0.2), 0 0 5px 1px #000;
    background-image: url('~images/leather.jpg');
    background-color: #1e1e1e;
  }
  .sidebar-button:before {
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
  .sidebar-button__button {
    position: relative;
    display: block;
    margin-left: auto;
    width: 100px;
    z-index: 1;
  }
</style>
