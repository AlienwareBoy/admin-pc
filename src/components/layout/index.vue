<template>
  <div id="container">
    <div class="aside">
      <div class="system-icon">
        <img :src="logo" alt />
      </div>
      <keep-alive>
        <div class="navigation">
          <el-row class="tac">
            <el-col :span="24">
              <el-menu background-color="#3e294d" text-color="#fff" active-text-color="#FFD04B" menu-trigger="click" class="el-menu-vertical-demo" router>
                <template v-for="navMenu in routes">
                  <el-submenu :data="navMenu" :index="navMenu.name" :key="navMenu.meta.id">
                    <template slot="title">
                      <i class="el-icon-location"></i>
                      <span> {{navMenu.meta.menuTitle}}</span>
                    </template>
                    <template v-for="(route,index2) in navMenu.children">
                      <el-menu-item :index="navMenu.path+'/'+ route.name" :key="index2">
                        {{ route.meta.title }}
                      </el-menu-item>
                    </template>
                  </el-submenu>
                </template>
              </el-menu>
            </el-col>
          </el-row>
        </div>
      </keep-alive>

    </div>
    <div class="main">
      <div class="header flex-space">
        <div class="path">
          <span>{{menuTitle}}</span>
          <span v-if="menuTitle">/</span>
          <span>{{ nowRouteName }}</span>
        </div>
        <div class="setting">
          <span class="userName">您好,{{userName}}</span>
          <span @click.stop="outAdminClick">退出</span>
        </div>
      </div>
      <div class="content">
        <keep-alive :include="includes">
          <router-view v-if="$route.meta.keepAlive"></router-view>
        </keep-alive>
        <router-view v-if="!$route.meta.keepAlive" />
        <!-- <span>欢迎使用vue管理后台</span>
        <router-view></router-view> -->
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapAction } from 'vuex'
import { meauList } from '@/utils/meauList.js'
export default {
  name: 'Layout',
  data() {
    return {
      logo: require('../../assets/images/logo.png'),
      uniqueOpened: true,
      isOpenSetting: false,
      menuTitle: '',
      includes: []
    }
  },
  watch: {
    $route: {
      handler: function(to, from) {
        this.menuTitle = to.meta.menu
        if (to.meta.keepAlive) {
          !this.includes.includes(to.name) && this.includes.push(to.name)
        }
      }
    },
    immediate: true
  },
  computed: {
    ...mapState('userInfo', ['userName']),
    ...mapGetters('userInfo', ['routes']),
    nowRouteName() {
      return this.$route.meta.title
    }
  },
  methods: {
    outAdminClick() {
      sessionStorage.removeItem('userInfo')
      location.href='/login'
    },
    filterRoutes(filterRoutes, role) {
      let res = []
      filterRoutes.forEach(route => {
        const roles = route.meta.roles
        roles.includes(role) ? res.push(route) : ''
      })
      return res
    },
    openSetting() {
      this.isOpenSetting = !this.isOpenSetting
    },
    select(e) {
      console.log(e)
    }
  },
  components: {}
}
</script>

<style scoped lang="scss">
@import './index.scss';
</style>
