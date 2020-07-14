<template>
  <div class="home">
    <div class="container">
      <p class="title">业务后台登录</p>
      <span class="default">默认账号:admin,密码123456</span>
      <el-form ref="ruleForm" :model="form" :rules="rules" class="mar-t20">
        <el-form-item label="账号" prop="account">
          <el-input v-model="form.account"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="form.password"></el-input>
        </el-form-item>
        <el-form-item label="用户身份选择" prop="nowUser">
          <el-radio-group v-model="form.nowUser">
            <el-radio label="admin">管理员</el-radio>
            <el-radio label="user">用户</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')" style="width:100%;">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'
export default {
  name: 'login',
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (this.form.password !== '') {
          this.$refs.ruleForm.validateField('checkPass')
        }
        callback()
      }
    }
    return {
      nums: 0,
      form: {
        account: '1',
        password: '1',
        nowUser: ''
      },
      rules: {
        account: [
          {
            required: true,
            message: '请输入账号',
            trigger: 'blur'
          }
        ],
        password: [
          {
            required: true,
            message: '请输入密码',
            trigger: 'blur'
          }
        ],
        nowUser: [
          {
            required: true,
            message: '请先选择用户身份',
            trigger: 'change'
          }
        ]
      }
    }
  },
  components: {},
  computed: {},
  mounted() {},
  methods: {
    ...mapActions('userInfo', ['addUserInfo']),
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.addUserInfo({
            userName: '诡异',
            userid: 1,
            role: this.form.nowUser
          })
          sessionStorage.setItem(
            'userInfo',
            JSON.stringify({
              userName: '诡异',
              userid: 1,
              role: this.form.nowUser
            })
          )
          this.$router.push({
            path: '/dashboard/index'
          })
        } else {
          console.log('请填写完整')
          return false
        }
      })
    }
  }
}
</script>

<style scoped lang="scss">
@import './login.scss';
</style>
