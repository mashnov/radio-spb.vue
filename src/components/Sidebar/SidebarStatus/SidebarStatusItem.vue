<template>
  <div
    class="sidebar-status-item"
    :class="isActive && 'sidebar-status-item_active'"
  >
    {{ name }}
  </div>
</template>

<script>
  export default {
    name: 'SidebarStatusItem',
    props: {
      isActive: {
        type: Boolean,
        default: false,
      },
      name: {
        type: String,
        default: '',
      },
    },
  };
</script>

<style lang="scss" scoped>
  .sidebar-status-item {
    display: block;
    width: 100%;
    height: 40px;
    text-align: center;
    text-shadow: 0 1px 1px #000;
    color: #e7e7e7;
    line-height: 40px;
    font-size: 19px;
    transition: color 1.5s,text-shadow 1s;
  }
  .sidebar-status-item_active {
    text-shadow: 0 0 15px gold, 0 1px 1px #000;
    color: #ffffff;
  }
</style>
