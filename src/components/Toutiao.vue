<template>
<i :class="['toutiao',`toutiao-${icon}`]"></i>
</template>

<script>
// 全局组件封装   创建组件---全局引入---全局注册----父组件引用----子组件props接受值
export default {
  props: {
    icon: {
      type: String
    }
  },
  mounted () {
    // console.log(this.icon)
  }

}
</script>

<style>

</style>
