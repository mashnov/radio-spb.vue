<template>
  <div class="sidebar">
    <div class="sidebar__status">
      <SidebarStatus />
    </div>
    <div class="sidebar__frequencies">
      <SidebarFrequencies />
    </div>
    <div class="sidebar__button">
      <SidebarButton />
    </div>
  </div>
</template>

<script>
  import SidebarStatus from 'components/Sidebar/SidebarStatus/SidebarStatus';
  import SidebarFrequencies from 'components/Sidebar/SidebarFrequencies/SidebarFrequencies';
  import SidebarButton from 'components/Sidebar/SidebarButton/SidebarButton';

  export default {
    name: 'Sidebar',
    components: {
      SidebarStatus,
      SidebarFrequencies,
      SidebarButton,
    },
  };
</script>

<style lang="scss" scoped>
  .sidebar {
    position: fixed;
    width: 240px;
    padding: 40px 0;
  }
  .sidebar__status {
    display: block;
    width: 100%;
    margin: 0 0 20px 0;
  }
  .sidebar__frequencies {
    display: block;
    width: 100%;
    height: calc(100vh - 280px);
  }
  .sidebar__button {
    display: block;
    width: 100%;
    margin: 20px 0 0 0;
  }
  @media (min-width: 480px) and (max-width: 768px) and (max-height: 480px) {
    .sidebar {
      position: static;
    }
  }
</style>
