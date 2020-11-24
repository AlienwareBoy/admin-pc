<template>
   <div class="">
        <span>学生表格</span>
   </div>
</template>

<script>
import { commonApi } from "../../api/login";
export default {
   name: 'studentTable',
   data() {
       return {}
   },
  components: {},
  async mounted(){
     const result =await commonApi.test();
     console.log(result)
  }
}
</script>

<style scoped lang="stylus">
</style>
