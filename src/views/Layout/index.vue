<template>
<div class="layout-container">
    <router-view/>
    <van-tabbar class="layout-tabbar" v-model="active" route>
  <van-tabbar-item icon="home-o"  to="/home">
    <template #icon>
        <Toutiao icon="shouye"/>
    </template>首页
  </van-tabbar-item>
  <van-tabbar-item icon="search" to="/qa">
      <template #icon>
        <Toutiao icon="wenda"/>
    </template>问答
  </van-tabbar-item>
  <van-tabbar-item icon="friends-o" to="/viedo">
      <template #icon>
        <Toutiao icon="shipin"/>

    </template> 视频
  </van-tabbar-item>
  <van-tabbar-item icon="setting-o" to="/my">
      <template #icon>
        <Toutiao icon="wode"/>
    </template>我的
  </van-tabbar-item>
</van-tabbar>
</div>
</template>

<script>
export default {
  data () {
    return {
      active: 0
    }
  }

}
</script>

<style scoped lang="less">
.layout-container {
  .layout-tabbar {
    i.toutiao {
      font-size: 40px;
    }
    span.text {
      font-size: 20px;
    }
  }
}
</style>