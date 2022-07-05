<template>
  <div class="login-container">
        <van-nav-bar
  title="登录"
/>
<van-form @submit="onSubmit" ref="form" >
  <van-field
    v-model="user.mobile"
    name="mobile"
    placeholder="请输入手机号"
    :rules="rules.mobile"
    required
  >
  <template #left-icon>
    <Toutiao icon="shouji"/>
  </template>
  </van-field>
  <van-field
    v-model="user.code"
    name="code"
    placeholder="请输入验证码"
    :rules="rules.code"
    required
    type= number
    maxlength=6
  >
   <template #left-icon>
    <Toutiao icon="yanzhengma"/>
  </template>
  <template #button>
    <van-count-down :time="5000"  format=" ss s" v-if="isShowCountDown" @finish="isShowCountDown=false"/>
     <van-button size="middle" native-type="button" class="send-sms-btn" @click="sendSmsCode" v-else :loading="isDisabled">获取验证码</van-button>
  </template>
  </van-field>
  <div style="margin: 16px;">
    <van-button  block type="info" native-type="submit">登录</van-button>
  </div>
</van-form>
  </div>
</template>

<script>
import { login, getSmsCount } from '@/api/index'
import { Toast } from 'vant'
export default {
  name: 'LoginPage',
  components: {},
  props: {},
  data () {
    return {
      isShowCountDown: false,
      isDisabled: false,

      //   username: '',
      //   password: '',
      rules: {
        mobile: [{
          required: true,
          message: '手机号不能为空'
        }, {
          pattern: /^1[3456789]\d{9}$/,
          message: '手机格式不对'
        }],
        code: [{
          required: true,
          message: '验证码不能为空'
        }, {
          pattern: /^\d{6}$/,
          message: '验证码格式不对'
        }]
      },
      user: {
        mobile: '13911111112',
        code: '246810'
      }
    }
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {
    async  onSubmit (value) {
      // 表单验证
      try {
        await login(value)
        // const res = await login(this.user)
        Toast.success('登录成功')
      } catch (e) {
        console.log(e)
        Toast.fail(e?.response?.data?.message || '服务器端错误')
      }
    },
    async sendSmsCode () {
      try {
        await this.$refs.form.validate('mobile')
      } catch (e) { console.log(e); return }
      try {
        this.isDisabled = true
        await getSmsCount(this.user.mobile)
        this.isShowCountDown = true
        // console.log('验证码发送中')
        this.$toast.success('验证码发送成功')
      } catch (e) {
        this.$toast.fail(e.response.data.message || '出错了')
        this.isShowCountDown = false
      } finally {
        this.isDisabled = false
      }
    }
  }
}
</script>
<style scoped lang="less">
.login-container {
  .toutiao {
    font-size: 37px;
  }
}
.send-sms-btn {
    width: 152px;
    height: 46px;
    line-height: 46px;
    background-color: #ededed;
    font-size: 22px;
    color: #666;
    border:1px solid #07c160;
  }
</style>
