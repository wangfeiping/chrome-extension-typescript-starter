<template>
    <vue-drawer-layout ref="drawerLayout">
    <div class="drawer" slot="drawer">
      <a href="javascript:void(0)" class="btn"
              @click="handleToggleDrawer">
          <unicon name="angle-double-left" fill="white"/>
      </a>
      <div>
          <unicon name="constructor" fill="royalblue"></unicon>
  　　　   <unicon name="car-wash" fill="limegreen"></unicon>
          <cryptoicon symbol="btc" color="orange" />
          <cryptoicon symbol="eth" size="72" color="blue" />
          <!-- cryptoicon symbol="qos" size="72" color="red" / -->
          <cryptoicon symbol="Xrp" size="72"/>
          <el-button type="primary" @click="tab">New tab</el-button>
      </div>
    </div>
    <div class="content" slot="content">
      <a href="javascript:void(0)" class="btn"
              @click="handleToggleDrawer">
          <unicon name="angle-double-right" fill="black"/>
      </a>
      <img v-bind:src="avatar" height="100vw">
    </div>
  </vue-drawer-layout>
</template>
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
// import Avatars from '@dicebear/avatars';
// import sprites from '@dicebear/avatars-bottts-sprites';

// let avatars = new Avatars(sprites());
// let svg = avatars.create('custom-seed');
// alert("svg")
  export default {
    data(){
      return {
        avatar: "https://avatars.dicebear.com/v2/bottts/example.svg"
      }
    },
    methods: {
      created () {
        console.log('New tab')
      },
      tab () {
        console.log('create tab')
        chrome.tabs.create({ url: 'pages/app.html' })
      },
      handleToggleDrawer() {
        this.$refs.drawerLayout.toggle();
      }
    }
  }
</script>
