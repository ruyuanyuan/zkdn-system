<template>
  <div class="yun-home-page">
    <el-container>
      <el-aside width="240px">
        <div class="yun-logo">系统管理</div>
        <div class="yun-menu">
          <el-menu
            :default-active="activeMenu"
            background-color="#092276"
            text-color="#fff"
            active-text-color="#2B66F0"
            :router="true"
          >
            <el-menu-item v-for='menu in menuList' :key='menu.path' :index="menu.path">
              <div class="yun-meun-item">
                <!-- <i class="yun-icon yun-icon-event"></i> -->
                 <SvgIcon :iconClass='menu.icon'></SvgIcon>
                <span slot="title">{{menu.label}}</span>
              </div>
            </el-menu-item>
          </el-menu>
        </div>
      </el-aside>
      <el-container>
        <el-header>
          <div class="yun-home">
            <SvgIcon iconClass='home'></SvgIcon>首页
          </div>
          <div class='yun-theme'>
            <el-dropdown @command="handleCommand">
              <span class="el-dropdown-link">
                主题<i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="theme-blue">深蓝</el-dropdown-item>
                <el-dropdown-item command="theme-green">墨绿</el-dropdown-item>
                <el-dropdown-item command="theme-red">鲜红</el-dropdown-item>
                <el-dropdown-item command="theme-dark">暗夜</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
          <div class="yun-user" @click="toUserInfo">
            <div class='userimg'><img  src="@/assets/img/header.png" alt="" /></div>陈凯歌
          </div>
          <div class="yun-logout" @click="logoutEvent">退出</div>
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeMenu:'/menu1',
      powerList:[],
      menupower:[],
       menuList:[
        {
          path:'/menu1',
          icon:'department',
          label:'菜单1'
        },
        {
          path:'/menu2',
          icon:'user',
          label:'菜单2'
        },
        {
          path:'/menu3',
          icon:'role',
          label:'菜单3'
        },
      ],
    };
  },
  created(){
    this.handleCommand('theme-blue')
    console.log()
  },
  methods: {
    toUserInfo() {
      this.$router.push("/userInfo");
    },
   logoutEvent() {
      
    },
    handleCommand(command){
      window.document.documentElement.setAttribute('data-theme', command);
    },

  },
  watch: {
    $route: {
      immediate: true,
      handler: function(val, oldVal){
        this.activeMenu = this.$route.meta.model
      },
      deep: true
    }
  },

};
</script>
<style lang="scss" scoped>
.yun-home-page {
  width: 100%;
  height: 100%;
}
.yun-page {
  width: 100%;
  height: auto;
}
.el-container {
  width: 100%;
  height: 100%;
}
.el-aside {
  // background: #092276;
  @include background_color('background_color1');
  .yun-logo {
    width: 240px;
    height: 72px;
    font-size: 24px;
    color: #fff;
    font-weight: bold;
    line-height: 72px;
    text-align: center;
    // background: #2b66f0;
    @include background_color('background_color2');
  }
  /deep/.el-submenu {
    padding: 10px 20px;
    .el-submenu__title {
      padding: 0 !important;
      height: 36px;
      line-height: 36px;
    }
    .el-menu-item {
      padding: 10px 0px !important;
      height: 56px;
      line-height: 16px;
      .yun-meun-item {
        padding: 9px 15px 9px 45px;
      }
      &.is-active {
        .yun-meun-item {
          padding: 9px 15px 9px 45px;
        }
      }
    }
    .yun-meun-item {
      width: 184px;
      height: 36px;
      line-height: 16px;
      padding: 9px 15px;
      border-radius: 4px;
    }
  }
  /deep/.el-menu-item {
    padding: 10px 20px;
    height: 56px;
    line-height: 16px;
     @include background_color('background_color1');
    .yun-meun-item {
      width: 184px;
      height: 36px;
      line-height: 16px;
      padding: 9px 15px;
      border-radius: 4px;
      display: flex;
      align-items: center;
      svg{
        margin-right:15px;
      }
    }
    &.is-active {
      .yun-meun-item {
        background: #fff;
        width: 184px;
        height: 36px;
        line-height: 16px;
        padding: 9px 15px;
        border-radius: 4px;
        @include font_color('font_color1');
      }
    }
  }
}
.el-container {
  overflow: hidden;
}
.el-header {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 72px !important;
  background: #fff;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.2);
  .yun-home {
    color: #1851f5;
    font-size: 14px;
    display: flex;
    align-items: center;
    margin-right: 30px;
    cursor: pointer;
    svg {
      width: 14px;
      height: 14px;
      margin-right: 8px;
    }
  }
  .yun-theme{
     margin-right: 30px;
  }
  .yun-user {
    display: flex;
    align-items: center;
    font-size: 14px;
    color: #484d5e;
    margin-right: 30px;
    cursor: pointer;
    .userimg{
      border-radius:50%;
      width: 32px;
      height: 32px;
      margin-right: 10px;
      padding:4px;
      display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
       img {
        max-width: 100%;
        max-height: 100%;
      }
    }
   
  }
  .yun-logout {
    width: 72px;
    height: 32px;
    border-radius: 100px;
    border: 1px solid #dcdfe6;
    font-size: 14px;
    color: #484d5e;
    text-align: center;
    line-height: 30px;
    text-align: center;
    cursor: pointer;
  }
}
.el-main {
  height: calc(100% - 100px);
  background: #f4f6fa;
  overflow: auto;
}
</style>