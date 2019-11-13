<template>
    <div>
      <cryptoicon symbol="btc" color="orange" />
      <cryptoicon symbol="eth" size="72" color="blue" />
      <cryptoicon symbol="qos" size="72" color="red" />
      <cryptoicon symbol="Xrp" size="72"/>
      <el-button type="primary" @click="tab">New tab</el-button>
    </div>
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
</style>
