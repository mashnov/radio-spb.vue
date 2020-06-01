<template>
  <div
    class="sidebar-toggle"
    :class="[
      value && 'sidebar-toggle_on',
      disabled && 'sidebar-toggle_disabled',
    ]"
  >
    <div
      class="sidebar-toggle__wrapper"
      @click="changeEvent"
    >
      <div class="sidebar-toggle__label">
        {{ onLabel }}
      </div>
      <div class="sidebar-toggle__switcher" />
      <div class="sidebar-toggle__label">
        {{ offLabel }}
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'SidebarToggle',
    props: {
      onLabel: {
        type: String,
        default: '',
      },
      offLabel: {
        type: String,
        default: '',
      },
      value: {
        type: Boolean,
        default: false,
      },
      disabled: {
        type: Boolean,
        default: false,
      },
    },
    methods: {
      changeEvent() {
        const { value, disabled } = this;
        if (!disabled) {
        this.$emit('change', !value);
        }
      },
    },
  };
</script>

<style lang="scss" scoped>
  .sidebar-toggle {
    display: block;
    width: 100%;
    border-radius: 30px/50px;
    background: rgba(0,0,0, 0.4);
    box-shadow: inset 0 0 10px 2px #000, 0 0 2px 1px rgba(255, 255, 255, 0.2);
    overflow: hidden;
  }
  .sidebar-toggle__wrapper {
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    width: 200%;
    height: 40px;
    transform: translateX(calc(-50% + 23px + 6px));
    transition: transform 0.15s linear;
  }
  .sidebar-toggle_on .sidebar-toggle__wrapper {
    transform: translateX(0);
  }
  .sidebar-toggle__switcher {
    display: block;
    width: 23px;
    height: 32px;
    margin: 0 3px;
    border-radius: 40px/50px;
    background: #e7e7e7;
    box-shadow: inset 0 0 5px 1px #9e9e9e;
    transition: transform 0.15s linear;
    cursor: pointer;
  }
  .sidebar-toggle__switcher:active {
    transform: translateX(1px) scaleX(1.05);
  }
  .sidebar-toggle_on .sidebar-toggle__switcher:active {
    transform: translateX(-1px) scaleX(1.05);
  }
  .sidebar-toggle__label {
    display: block;
    width: calc(50% - 23px - 6px);
    text-align: center;
    color: #e7e7e7;
    font-size: 19px;
    line-height: 32px;
    transition: color 0.7s, text-shadow 0.9s;
    text-transform: capitalize;
  }
  .sidebar-toggle_on .sidebar-toggle__label {
    text-shadow: 0 0 15px gold, 0 1px 1px #000;
    color: #ffffff;
  }
  .sidebar-toggle_disabled {
    cursor: not-allowed;
    opacity: 0.8;
  }
</style>
