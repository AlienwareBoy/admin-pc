<template>
  <div id="container">
    <div class="aside">
      <div class="system-icon">
        <img :src="logo" alt />
      </div>
      <div class="navigation">
        <el-row class="tac">
          <el-col :span="24">
            <div class="menu" v-for="(item, index1) in routes" :key="index1">
              <span>item.menuTitle</span>
              <span v-for="(path,index2) in item.menuList">{{ path.meta.title }}</span>
            </div>
            <!-- <el-menu default-active="2" menu-trigger="click" class="el-menu-vertical-demo" background-color="#3e294d"
              text-color="#fff" active-text-color="#FFD04B" unique-opened router>
              <el-submenu  v-for="(item, index1) in routes" :key="index1">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>{{ item.menuTitle}}</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item :index="item.path" v-for="(path,index2) in item.menuList" :key="index2">
                    {{ path.meta.title }}</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
            </el-menu> -->
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="main">
      <div class="header flex-space">
        <div class="path">
          <span>{{menuTitle}}</span>
          <span v-if="menuTitle">/</span>
          <span>{{ nowRouteName }}</span>
        </div>
        <div class="setting">
          <span class="userName" @click.stop="openSetting">用户名字</span>
          <div class="settingGroup" v-if="isOpenSetting">
            <ul>
              <li>退出登录</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="content">
        <keep-alive :include="include">
          <router-view v-if="$route.meta.keepAlive"></router-view>
        </keep-alive>
        <router-view v-if="!$route.meta.keepAlive" />
      </div>
    </div>
  </div>
</template>

<script>
  import {
    meauList
  } from 'UTIL/meauList.js'
  // import pageAside from 'COMPONENT/pageAside/pageAside'
  // import pageHeader from 'COMPONENT/pageHeader/pageHeader'
  export default {
    name: "",
    data() {
      return {
        logo: require("../../assets/images/logo.png"),
        uniqueOpened: true,
        isOpenSetting: false,
        menuTitle: '',
        include: [],

      };
    },
    components: {
      // pageAside,
      // pageHeader
    },
    watch: {
      $route: {
        handler: function (to, from) {
          console.log(to)
          this.menuTitle = to.meta.menu;
          if (to.meta.keepAlive) {
            !this.include.includes(to.name) && this.includes.push(to.name);
          }
        },
      },
      immediate: true
    },
    beforeRouteUpdate(to, from) {
      // console.log(to, 'to')
      // console.log(from, 'from')
      // console.log(to, 'to')
    },
    computed: {
      nowRouteName() {
        return this.$route.meta.title;
      },
      routes() {
        let allRoutes = this.$router.options.routes[1].children;
        let routeList = [];
        meauList.forEach(menuPath => {
          let menuTitle = '';
          let menuList = [];
          allRoutes.forEach(route => {
            if (route.meta.menuTitle === menuPath) {
              menuTitle = route.meta.menuTitle;
              menuList.push(route)
            }
          })
          menuList.forEach(nowRoute => {
            nowRoute.children = Object.assign({}, nowRoute.children)
          })
          const obj = Object.assign({}, {
            menuTitle,
            menuList
          })
          routeList.push(obj)
        })
        return routeList;
      }
    },
    methods: {
      openSetting() {
        this.isOpenSetting = !this.isOpenSetting
      },
      // toPath(item) {
      //   // return
      //   // console.log(,'path')
      //   console.log(`${this.$route.path}/${item.path}`,'-----1--------')
      //   this.$router.push({
      //     path: `/index/addUser`
      //   });
      // }
    },
    components: {},
    created() {

    }
  };

</script>

<style scoped lang="scss">
  @import "./index.scss";

</style>
