<template>
  <vue-flip :active-click="true" width="140px" height="120px" transition="2s" class="q-ma-sm flip cursor-pointer">
        <div slot="front">
          <q-card inline class="cards" :color="grantha && script1 === 'vatteluttu' ? 'faded': ''">
            <q-card-main align="center" :style="script1 === 'tamil' ? 'tamil' : ''">
              <font size="7"><component :text="text" spelling="late" :is="script1"></component></font>
            </q-card-main>
          </q-card>
        </div>
        <div slot="back">
          <q-card inline class="cards" color="tertiary">
            <q-card-main align="center" :style="script2 === 'tamil' ? 'tamil' : ''">
              <font size="7"><component :text="text" spelling="late" :is="script2"></component></font>
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
  props: ['text', 'script1', 'grantha', 'script2'],
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
.tamil {
  font-size:75%;
}
</style>
