<template>
  <div class="home">
    <navbar class="home-nav">
      <template v-slot:center>
        <div>知行帮</div>
      </template>
    </navbar>
  </div>
</template>

<script>
import Navbar from '../../components/common/Navbar.vue'

export default {
  name: 'Home',
  components: { Navbar },
  data() {
    return {}
  },
  computed: {},
  methods: {},
  mounted() {},
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {} //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>

<style lang="scss" scoped>
.home-nav {
  background: $color-tint;
  color: #fff;
}
</style>
