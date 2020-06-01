<template>
  <div class="sidebar-frequencies">
    <div class="sidebar-frequencies__wrap">
      <SidebarFrequenciesList />
      <SidebarFrequenciesScale />
      <SidebarFrequenciesPointer />
      <SidebarFrequenciesAction />
    </div>
  </div>
</template>

<script>
  import SidebarFrequenciesList from 'components/Sidebar/SidebarFrequencies/SidebarFrequenciesList';
  import SidebarFrequenciesScale from 'components/Sidebar/SidebarFrequencies/SidebarFrequenciesScale';
  import SidebarFrequenciesPointer from 'components/Sidebar/SidebarFrequencies/SidebarFrequenciesPointer';
  import SidebarFrequenciesAction from 'components/Sidebar/SidebarFrequencies/SidebarFrequenciesAction';

  export default {
    name: 'SidebarFrequencies',
    components: {
      SidebarFrequenciesList,
      SidebarFrequenciesScale,
      SidebarFrequenciesPointer,
      SidebarFrequenciesAction,
    },
  };
</script>

<style lang="scss" scoped>
  .sidebar-frequencies {
    position: relative;
    display: block;
    padding: 20px;
    width: 100%;
    height: 100%;
    border-radius: 0 20px 20px 0;
    box-shadow: inset 0 0 30px 3px rgba(180, 180, 180, 0.2), 0 0 5px 1px #000;
    background-image: url('~images/leather.jpg');
    background-color: #1e1e1e;
  }
  .sidebar-frequencies:before {
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
  .sidebar-frequencies__wrap {
    position: absolute;
    width: calc(100% - 10px);
    height: calc(100% - 80px);
    top: 40px;
    left: 0;
  }
  @media (min-width: 768px) and (max-height: 480px) {
    .sidebar-frequencies {
      display: none;
    }
  }
  @media (max-width: 480px) and (max-height: 480px) {
    .sidebar-frequencies {
      display: none;
    }
  }
  @media (min-width: 480px) and (max-width: 768px) and (max-height: 480px) {
    .sidebar-frequencies {
      position: absolute;
      width: 220px;
      right: 0;
      top: 40px;
      bottom: 40px;
      height: auto;
      border-radius: 20px 0 0 20px;
    }
    .sidebar-frequencies:before {
      right: 0;
      left: auto;
      border-right: none;
      border-left: 1px dashed #8f6f17;
      border-radius: 15px 0 0 15px;
    }
  }
</style>
