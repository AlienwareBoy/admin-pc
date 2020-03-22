<template>
  <div class="aside">
    <div class="system-icon">
      <img :src="logo" alt />
    </div>
    <div class="navigation">
      <el-row class="tac">
        <el-col :span="24">
          <el-menu default-active="2" menu-trigger="click" class="el-menu-vertical-demo" background-color="#3e294d"
            text-color="#fff" active-text-color="#FFD04B" unique-opened router>
            <el-submenu :index="index1" v-for="(item, index1) in routes" :key="index1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>{{ item.menuTitle}}</span>
              </template>
              <el-menu-item-group>
                <!-- @click="toPath(path)" -->
                <el-menu-item :index="path.path" v-for="(path,index2) in item.menuList" :key="index2">
                  {{ path.meta.title }}</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'pageAside',
    data() {
      return {
        logo: require("../../assets/images/logo.png")
      }
    },
    components: {}
  }

</script>

<style scoped lang="scss">
    @import './pageAside.scss';
</style>
