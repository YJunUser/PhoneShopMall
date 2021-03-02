<template>
  <div class="layout">
    <router-view></router-view>
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
import MainTabBar from './MainTabBar.vue'
export default {
  name: 'Layout',
  components: { MainTabBar },
  data() {
    return {}
  },
  computed: {},
  methods: {}
}
</script>

<style lang="scss" scoped></style>
