<template>
  <div class='container'>
      <div class="title">标题</div>
      <div class="content">
          <slot></slot>
      </div>
  </div>
</template>

<script>
export default {
  name: 'container',
  data(){
    return {}
  },
  components: {},
  created(){},
  mounted(){},
  methods: {}
}
</script>
<style lang='scss' scoped>
</style>
