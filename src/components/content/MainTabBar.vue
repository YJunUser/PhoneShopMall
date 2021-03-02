<template>
  <div class="main-tab-bar">
    <tabbar>
      <tabbar-item path="/layout/home">
        <template v-slot:text>
          <div>首页</div>
        </template>
        <template v-slot:img>
          <span class="iconfont iconrhome"></span>
        </template>
      </tabbar-item>
      <tabbar-item path="/layout/category">
        <template v-slot:text>
          <div>分类</div>
        </template>
        <template v-slot:img>
          <span class="iconfont icontubiao13"></span>
        </template>
      </tabbar-item>
      <tabbar-item path="/layout/goods">
        <template v-slot:text>
          <div>购物</div>
        </template>
        <template v-slot:img>
          <span class="iconfont icongouwuche"></span>
        </template>
      </tabbar-item>
      <tabbar-item path="/layout/profile">
        <template v-slot:text>
          <div>我的</div>
        </template>
        <template v-slot:img>
          <span class="iconfont iconicon_huabanfuben"></span>
        </template>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
import Tabbar from '../common/Tabbar.vue'
import TabbarItem from '../common/TabbarItem.vue'

export default {
  name: 'MainTabBar',
  components: { Tabbar, TabbarItem },
  data() {
    return {}
  },
  computed: {},
  methods: {
    
  },
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

<style lang="scss" scoped></style>
