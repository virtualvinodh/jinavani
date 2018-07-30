<template>
  <span class="tamil" v-html="text">
    Vinodh
  </span>
</template>

<script>
export default {
  // name: 'ComponentName',
  props: ['text'],
  data () {
    return {}
  }
}
</script>

<style scoped>
.tamil {
  font-size:70%;
}
</style>
