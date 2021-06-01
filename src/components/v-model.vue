<template>
      <input type="text" @input="$emit('input', $event.target.value)" v-model="username" >
</template>

<script>
export default {
  name: 'modelItem',
  props:{
      username:String
  },
  data(){
    return {
      
    }
  },
  components: {},
  created(){},
  mounted(){},
  methods: {}
}
</script>
<style lang='scss' scoped>
</style>
