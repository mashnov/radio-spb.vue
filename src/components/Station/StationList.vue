<template>
  <div class="stations-list">
    <div class="stations-list__wrapper">
      <div
        v-for="item in stationsList"
        :key="item.id"
        class="stations-list__item"
        @click="toggleStation(item.id)"
      >
        <StationsItem
          :title="item.title"
          :image="item.image"
          :is-active="isItemActive(item.id)"
        />
      </div>
    </div>
  </div>
</template>

<script>
  import { createNamespacedHelpers } from 'vuex';
  import { LIST } from 'store/types';

  import StationsItem from 'components/Station/StationsItem';

  const {
    mapGetters: mapListGetters,
    mapActions: mapListActions,
  } = createNamespacedHelpers('list');

  export default {
    name: 'StationList',
    components: {
      StationsItem,
    },
    computed: {
      ...mapListGetters({
        stationsList: LIST.GET_LIST_ITEMS,
        activeStationId: LIST.GET_ACTIVE_STATION,
      }),
    },
    methods: {
      ...mapListActions({
        setActiveStationId: LIST.SET_ACTIVE_STATION,
        setPlayerState: LIST.SET_PLAYER_STATE,
      }),
      isItemActive(id) {
        const { activeStationId } = this;
        return id === activeStationId;
      },
      toggleStation(id) {
        const { activeStationId } = this;
        const playerState = id !== activeStationId;
        const stationId = playerState ? id : null;
        this.setActiveStationId(stationId);
        this.setPlayerState(playerState);
      },
    },
  };
</script>

<style lang="scss" scoped>
  .stations-list {
    position: relative;
    width: calc(100% - 260px);
    padding: 40px 0;
    margin: 0 0 0 260px;
  }
  .stations-list__wrapper {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    padding: 20px 5px 20px 20px;
    width: 100%;
    min-height: calc(100vh - 80px);
    border-radius: 20px 0 0 20px;
    box-shadow: inset 0 0 30px 3px rgba(180, 180, 180, 0.2), 0 0 5px 1px #000;
    background-image: url('~images/leather.jpg');
    background-color: #1e1e1e;
  }
  .stations-list__wrapper:before {
    content: "";
    position: absolute;
    display: block;
    top: 10px;
    right: 0;
    width: calc(100% - 10px);
    height: calc(100% - 20px);
    border-radius: 15px 0 0 15px;
    border-top: 1px dashed #8f6f17;
    border-left: 1px dashed #8f6f17;
    border-bottom: 1px dashed #8f6f17;
  }
  .stations-list__item {
    display: block;
    width: 100%;
    margin: 5px 0;
  }
  @media (min-width: 480px) {
    .stations-list__wrapper {
      padding: 20px;
    }
    .stations-list__item {
      width: calc(100% / 2 - 20px);
      margin: 10px;
    }
  }
  @media (min-width: 768px) {
    .stations-list__item {
      width: calc(100% / 3 - 20px);
    }
  }
  @media (min-width: 992px) {
    .stations-list__item {
      width: calc(100% / 4 - 20px);
    }
  }
  @media (min-width: 1200px) {
    .stations-list__item {
      width: calc(100% / 5 - 20px);
    }
  }
  @media (min-width: 1400px) {
    .stations-list__item {
      width: calc(100% / 6 - 20px);
    }
  }
  @media (min-width: 480px) and (max-width: 768px) and (max-height: 480px) {
    .stations-list {
      display: none;
    }
  }
</style>
