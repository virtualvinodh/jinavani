<template>
  <q-page>
    <q-window-resize-observable @resize="onResize" />
      <iframe src="../statics/e-brahmi-manual.pdf" width="100%" :height="height"> </iframe>
  </q-page>
</template>

<script>
import {QWindowResizeObservable} from 'quasar'

export default {
  // name: 'PageName',
  components: {
    QWindowResizeObservable
  },
  data () {
    return {
      height: '100px'
    }
  },
  methods: {
    onResize: function (size) {
      if (size.width > 992) {
        this.height = size.height - 140
      } else {
        this.height = size.height
      }
    }
  }
}
</script>

<style>
</style>
