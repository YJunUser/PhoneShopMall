<template>
  <div class="tabbar-item" @click="changeActive">
    <div :class="{ itemImg: !isActive, itemImgActive: isActive }">
      <slot name="img"></slot>
    </div>
    <div :class="{ itemTitle: !isActive, itemTitileActive: isActive }">
      <slot name="text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabbarItem',
  components: {},
  props: {
    path: {
      type: String,
      default() {
        return ''
      },
      required: true
    }
  },
  data() {
    return {
      active: false
    }
  },
  
  computed: {
    isActive() {
      return this.$route.fullPath.indexOf(this.path) !== -1
    }
  },
  methods: {
    changeActive() {
      this.$router.replace({ path: this.path })
    }
  }
}
</script>

<style lang="scss" scoped>
.tabbar-item {
  cursor: pointer;
}
.itemTitle {
  font-size: 15px;
}
.itemImg {
  font-size: 30px;
}
.itemTitileActive {
  font-size: 15px;
  color: $color-active;
}
.itemImgActive {
  font-size: 30px;
  color: $color-active;
}
</style>
