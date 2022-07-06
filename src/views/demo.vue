<template>
  <div>
    <!-- demo
    <hr>
    <h6>{{count}}</h6>
    <h5>{{userInfo.name}}</h5>
    <hr>
     <van-field v-model.number="num"  />
    <button @click="count1">count++</button>
    <button @click="userName">修改名字</button>
    <button @click="count2">修改num</button> -->
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
      num: 0
    }
  },
  computed: {
    ...mapState(['count', 'userInfo'])

  },
  mounted () {
    console.log(this.count)
    console.log(this.userInfo)
  },
  methods: {
    count2 () {
      this.$store.commit('changeCount2', this.num)
    },
    count1 () {
      this.$store.commit('changeCount')
    },
    userName () {
      this.$store.commit('changeName')
    }
  }

}
</script>

<style>

</style>