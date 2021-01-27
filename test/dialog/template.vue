<template>
  <div class="temp">
    <div class="content">
      <h1>This is an temp page</h1>
      <h1>This is an temp page</h1>
      <h1>This is an temp page</h1>
      <h1>This is an temp page</h1>
      <h1>This is an temp page</h1>
      <h1>This is an temp page</h1>
      <h1>This is an temp page</h1>
      <div class="btn-group">
        <button @click="tempClickYes">确定</button>
        <button @click="tempClickNo">取消</button>
        <button @click="tempClickOther">再弹一个</button>
      </div>
    </div>
  </div>
</template>
<script>
import dialog2 from '../dialog2'
export default {
  name: 'demo',
  props: {
    title: '',
    callbackResolve: null,
    callbackReject: null,
  },
  methods: {
    tempClickYes() {
      this.callbackResolve(['我确定了'])
    },
    tempClickNo() {
      this.callbackResolve(['我取消了'])
      // this.callbackReject(err))
    },
    tempClickOther() {
      dialog2({ title: '222' }).then(val => {
        console.log('222:' + val)
      })
    },
  },
}
</script>
<style lang="less">
.temp {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 99;
  .content {
    border: 1px solid #777;
    position: fixed;
    box-sizing: border-box;
    padding: 1em;
    min-width: 30em;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border-radius: 0.4em;
    background: #fff;
    z-index: 50001;
    .btn-group {
      margin-top: 1em;
      float: right;
      overflow: hidden;
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
      .btn-confirm {
        margin-left: 1em;
      }
    }
  }
}
</style>
