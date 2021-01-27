<template>
  <div id="app">
    <div class="introduce">
      <img src="./assets/logo.png" alt="" />
      <h1>Demo App for portal</h1>
      <h2>Click the button below</h2>
    </div>
    <div class="btn-group">
      <button @click="single">Click me!</button>
    </div>
  </div>
</template>

<script>
import dialog from './dialog'

export default {
  name: 'App',
  methods: {
    single() {
      dialog({ title: '111' }, { unmountDelay: 300 }).then(val => {
        console.log('111:' + val)
      })
    },
  },
}
</script>

<style lang="less">
body,
html {
  height: 100%;
  width: 100%;
  padding: 0;
  margin: 0;
}
#app {
  width: 640px;
  height: 100%;
  margin: 0 auto;
  text-align: center;
  position: relative;
  .introduce {
    padding-top: 80px;
  }
  .btn-group {
    button {
      display: inline-block;
      height: 35px;
      width: 80px;
      line-height: 23px;
      margin-left: 10px;
      margin-top: 6px;
      font-size: 13px;
      padding: 0 9px;
      cursor: pointer;
      -webkit-border-radius: 2px;
      -moz-border-radius: 2px;
      border-radius: 2px;
      color: #fff;
      background: #4395ff;
      border: 0;
      outline: none;
    }
    button:hover {
      background: #3485fb;
    }
  }
}
</style>
