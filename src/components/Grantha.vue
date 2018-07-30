<template>
  <span class="grantha">
    <slot></slot>
  </span>
</template>

<script>
export default {
  // name: 'ComponentName',
  data () {
    return {}
  }
}
</script>

<style scoped>
@font-face {
  font-family: Noto Sans Grantha Beta;
  src: url('../statics/NotoSansGranthaBeta-Regular.otf');
}
.grantha {
  font-family: Noto Sans Grantha Beta
}
</style>
