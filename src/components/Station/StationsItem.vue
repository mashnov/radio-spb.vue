<template>
  <div
    :class="isActive && 'stations-item_active'"
    class="stations-item"
  >
    <img
      :src="image"
      :alt="title"
    />
  </div>
</template>

<script>
  export default {
    name: 'StationItem',
    props: {
      title: {
        type: String,
        default: '',
      },
      image: {
        type: String,
        default: '',
      },
      isActive: {
        type: Boolean,
        default: false,
      },
    },
  };
</script>

<style lang="scss" scoped>
  .stations-item {
    display: block;
    width: 100%;
    padding: 5px;
    background-color: rgba(20, 20, 20, 0.5);
    box-shadow: inset 0 0 5px #000, 0 0 20px rgba(255, 255, 255, 0.03);
    border-radius: 220px/90px;
    cursor: pointer;
  }
  .stations-item img {
    display: block;
    width: 100%;
    border-radius: 200px/90px;
    opacity: 0.7;
    transform: scale(0.9);
    transition: opacity 0.15s linear, transform 0.15s linear, ;
  }
  .stations-item:hover img {
    opacity: 1;
  }
  .stations-item_active img {
    opacity: 1;
    transform: scale(1);
  }
  .stations-item_active:hover img {
    transform: scale(0.9);
  }
  @media (min-width: 480px) {
    .stations-item {
      padding: 10px;
    }
  }
  @media (min-width: 768px) {
    .stations-item {
      padding: 15px;
    }
  }
</style>
