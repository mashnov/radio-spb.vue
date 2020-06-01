<template>
  <div class="audio">
    <audio
      ref="audio"
      :src="src"
      :title="title"
    />
  </div>
</template>

<script>
  import { createNamespacedHelpers } from 'vuex';
  import { LIST } from 'store/types';

  const {
    mapGetters: mapListGetters,
  } = createNamespacedHelpers('list');

  export default {
    name: 'Audio',
    data() {
      return {
        src: null,
        title: null,
        isPlaying: false,
      };
    },
    computed: {
      ...mapListGetters({
        playerState: LIST.GET_PLAYER_STATE,
        currentStation: LIST.GET_CURRENT_STATION,
      }),
    },
    watch: {
      playerState() {
        this.setAudioParams();
      },
      currentStation() {
        this.setAudioParams();
      },
    },
    methods: {
      setAudioParams() {
        const { playerState, currentStation, isPlaying } = this;

        if (isPlaying) {
          this.$refs.audio.pause();
          this.$refs.audio.currentTime = 0;
          this.isPlaying = false;
        }

        if (playerState) {
          this.title = currentStation.title;
          this.src = currentStation.stream;
          this.$nextTick(() => {
            this.$refs.audio.play();
            this.isPlaying = true;
          });
        }
      },
    },
  };
</script>

<style lang="scss" scoped>
  .audio {
    position: absolute;
    width: 0;
    height: 0;
    opacity: 0;
    overflow: hidden;
  }
</style>
