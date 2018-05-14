<template>
  <div>
      <h1>{{name}}</h1>
      <input type="text" v-model="ipt">
      <button @click="changeIpt">搜索</button>
      <ul>
          <li v-for="(item, index) in info" :key="index">{{item.description}} : <span v-html="item.symbol"></span>{{item.rate_float}}</li>
      </ul>
  </div>
</template>

<script>
    export default {
        data (){
            return {
                name: 'index',
                ipt: '',
                info: null
            }
        },
        methods: {
            changeIpt (){
                this.$http.get('https://api.coindesk.com/v1/bpi/currentprice.json'
                ).then( res => {
                    this.info = res.data.bpi
                })
                this.ipt = ''
            }
        },
        mounted (){
            this.changeIpt()
        }
    }
</script>

<style lang="less" scoped>
    h1{
        color: red;
    }
</style>
