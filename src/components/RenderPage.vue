<template>
  <div class="book-content">
    <div class="print-hide">
      <q-page-sticky position="top-right" :offset="[18,18]">
        <controls v-model="options" :extra="false"> </controls>
      </q-page-sticky>
      <br/><br/><br/>
    </div>
        <component :text="text" :spelling="options.spelling"
          :is="options.script === 'brahmi' ? options.font : options.script">
        </component>
  </div>
</template>

<style>
</style>

<script>
import Brahmi from '../components/Brahmi'
import BrahmiE from '../components/BrahmiE'
import Vatteluttu from '../components/Vatteluttu'
import Controls from '../components/Controls'
import {QPageSticky} from 'quasar'

export default {
  props: ['name'],
  components: {
    Brahmi,
    BrahmiE,
    Vatteluttu,
    Controls,
    QPageSticky
  },
  data () {
    return {
      options: {},
      text: ''
    }
  },
  created: function () {
    var dhis = this
    this['old'] = Date.now()

    var path = ''

    if (this.$q.platform.is.cordova) {
      path = './statics/'
    } else {
      path = '../statics/'
    }

    this.$axios.get(path + this.name + '.html', {})
      .then(function (response) {
        dhis.text = response.data
      })
      .catch(function (error) {
        console.log(error)
      })
  },
  methods: {
  }
}
</script>
