<template>
  <div class="home">
    <div class="container">
      <p class="title">业务后台登录</p>
      <span class="default">默认账号:admin,密码123456</span>
      <el-form ref="form" :model="form" :rules="rules" class="mar-t20">
        <el-form-item label="账号" prop="account">
          <el-input v-model="form.account"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="form.password"></el-input>
        </el-form-item>
        <el-form-item label="类型" prop="type">
          <el-radio-group v-model="form.type">
            <el-radio label="0">登录</el-radio>
            <el-radio label="1">注册</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('form')" style="width:100%;">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { mapState,mapGetters,mapActions } from "vuex";
import { commonApi } from "../../api/login";
export default {
  name: "login",
  data () {
    var validatePass=(rule,value,callback) => {
      if(value==="") {
        callback(new Error("请输入密码"));
      } else {
        if(this.form.password!=="") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    return {
      nums: 0,
      form: {},
      rules: {
        account: [
          {
            required: true,
            message: "请输入账号",
            trigger: "blur"
          }
        ],
        password: [
          {
            required: true,
            message: "请输入密码",
            trigger: "blur"
          }
        ],
        type: [
          {
            required: true,
            message: "请先选择类型",
            trigger: "change"
          }
        ]
      }
    };
  },
  methods: {
    ...mapActions("userInfo",["addUserInfo"]),
    async login () {
      const { data }=await commonApi.login(this.form);
      console.log(data);
      localStorage.setItem("token",data.data.token);
      localStorage.setItem("userInfo",JSON.stringify(data.data));
      this.addUserInfo(data.data);
      this.$router.push({
        path: "/dashboard"
      });
    },
    async register () {
      const result=await commonApi.register(this.form);
      console.log(result);
    },
    submitForm (formName) {
      this.$refs[formName].validate(avalid => {
        if(avalid) {
          this.form.type==="0"? this.login():this.register();
        }
      });
    }
  }
};
</script>

<style scoped lang="scss">
@import "./login.scss";
</style>
