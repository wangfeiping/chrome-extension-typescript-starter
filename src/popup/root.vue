<template>
    <vue-drawer-layout ref="drawerLayout">
    <div class="drawer" slot="drawer">
      <a href="javascript:void(0)" class="btn"
           @click="handleToggleDrawer"><cryptoicon symbol="eth" size="32" color="white" /></a>
      <div>
          <cryptoicon symbol="btc" color="orange" />
          <cryptoicon symbol="eth" size="72" color="blue" />
          <cryptoicon symbol="qos" size="72" color="red" />
          <cryptoicon symbol="Xrp" size="72"/>
          <el-button type="primary" @click="tab">New tab</el-button>
      </div>
    </div>
    <div class="content" slot="content">
      <div class="text">This is content.</div>
      <a href="javascript:void(0)" class="btn"
           @click="handleToggleDrawer">Show Drawer</a>
    </div>
  </vue-drawer-layout>
</template>
<script>
  export default {
    data: () => ({
    }),
    computed: { },
    created () {
      console.log('New tab')
    },
    mounted () { },
    methods: {
      tab () {
        chrome.tabs.create({ url: 'pages/app.html' })
      }
    }
  }
</script>
<style lang="scss">
  div {
    color: blue
  }
  .drawer {
    position: absolute;
    background-color:#000000;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
</style>
<script>
  export default {
    methods: {
      handleToggleDrawer() {
        this.$refs.drawerLayout.toggle();
      }
    }
  }
</script>
