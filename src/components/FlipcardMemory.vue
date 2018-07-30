<template>
  <vue-flip :active-click="true" width="140px" height="120px" transition="2s" class="q-ma-sm flip cursor-pointer">
        <div slot="front">
          <q-card inline class="cards" color="tertiary">
            <q-card-main>
            </q-card-main>
          </q-card>
        </div>
        <div slot="back">
          <q-card inline class="cards">
            <q-card-main align="center">
              <font size="7"><component :text="text" spelling="late" :is="script"></component></font>
            </q-card-main>
          </q-card>
        </div>
  </vue-flip>
</template>

<script>
import Brahmi from '../components/Brahmi'
import Vatteluttu from '../components/Vatteluttu'
import Tamil from '../components/Tamil'
import VueFlip from 'vue-flip'
import {QCard, QCardTitle, QCardMain, QCardMedia, QCardActions} from 'quasar'

export default {
  // name: 'ComponentName',
  props: ['text', 'script', 'grantha'],
  components: {
    Brahmi,
    Vatteluttu,
    VueFlip,
    QCard,
    QCardTitle,
    QCardMain,
    QCardMedia,
    QCardActions,
    Tamil
  },
  data () {
    return {}
  }
}
</script>

<style scoped>
.cards {
  width:140px;
  height:120px;
}
.flip {
  display: inline-block;
}
</style>
