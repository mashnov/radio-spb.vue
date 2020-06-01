<template>
  <transition name="preloader">
    <div
      v-if="isVisible"
      class="preloader"
    >
      <div class="preloader__item">
        <div class="preloader__back" />
        <div class="preloader__front" />
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'Preloader',
    props: {
      isVisible: {
        type: Boolean,
        default: false,
      },
    },
  };
</script>

<style lang="scss" scoped>
  .preloader {
    position: fixed;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 1;
  }
  .preloader-enter-active {
    animation: preloader-in 0.3s forwards;
  }
  .preloader-leave-active {
    animation: preloader-out 1s forwards;
  }
  .preloader__item {
    position: relative;
    display: block;
    width: 100px;
    height: 92px;
    margin: auto;
    border-radius: 50px/46px;
    box-shadow: 0 0 60px rgba(255, 210, 90, 0.5);
    background-color: rgba(255, 210, 90, 0.5);
    transform: translateZ(0);
    overflow: hidden;
  }
  .preloader__back {
    position: absolute;
    width: 481px;
    height: 100px;
    top: 0;
    left: -381px;
    background-image: url('~images/map-front.png');
    background-position: center;
    background-size: cover;
    z-index: 2;
    opacity: 0.9;
    animation: rotationFront 4s infinite linear;
  }
  .preloader__front {
    content: '';
    position: absolute;
    width: 481px;
    height: 100px;
    top: 0;
    left: -381px;
    background-image: url('~images/map-back.png');
    background-position: center;
    background-size: cover;
    z-index: 1;
    opacity: 0.3;
    animation: rotationBack 4s infinite linear;
  }

  @keyframes rotationFront {
    from {
      transform: translateX(20px);
    }
    to {
      transform: translateX(260px);
    }
  }

  @keyframes rotationBack {
    from {
      transform: translateX(460px);
    }
    to {
      transform: translateX(220px);
    }
  }

  @keyframes preloader-out {
    from {
      opacity: 1;
      transform: scale(1);
    }
    to {
      opacity: 0;
      transform: scale(5);
    }
  }
</style>
