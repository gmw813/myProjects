<template>
  <HelloWorld :timeParams="time" :formatParams="format" :stepParams="1000" ref="time"/>
  <button @click="startEvent">开始</button>
  <button @click="pauseEvent">停止</button>
  <button @click="resetEvent">重设</button>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data(){
    return{
      time:12000,
      format:'HH:mm:ss'
    }
  },
  methods:{
    startEvent(){
      this.$refs.time.start();
    },
    pauseEvent(){
      this.$refs.time.pause();
    },
    resetEvent(){
      this.$refs.time.reset(400000,'DD天HH小时mm分ss秒',1000)
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
