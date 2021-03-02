<template>
  <div class="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Tabbar'
}
</script>

<style lang="scss" scoped>
.tab-bar {
  background: $color-tabbar-background;
  height: $tabbar-height;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  align-items: center;
}
</style>
