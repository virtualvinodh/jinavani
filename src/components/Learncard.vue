<template>
  <q-card inline class="cards q-ma-sm non-selectable" :color="grantha && script1 === 'vatteluttu' ? 'faded': ''">
    <q-card-title>
      <component :text="fixdha(text)" spelling="late" :is="script2" :style="script2 === 'tamil' ? 'tamil' : ''"></component>
    </q-card-title>
    <q-card-main align="center">
      <font size="6"><component :text="text" spelling="late" :is="script1"></component></font>
    </q-card-main>
  </q-card>
</template>

<script>
import Brahmi from '../components/Brahmi'
import Vatteluttu from '../components/Vatteluttu'
import Tamil from '../components/Tamil'
import {QCard, QCardTitle, QCardMain, QCardMedia, QCardActions} from 'quasar'

export default {
  // name: 'ComponentName',
  props: ['text', 'script1', 'script2', 'grantha'],
  components: {
    Brahmi,
    Vatteluttu,
    QCard,
    QCardTitle,
    QCardMain,
    QCardMedia,
    QCardActions,
    Tamil
  },
  data () {
    return {
      vowelSigns: ['ா', 'ி', 'ீ', 'ு', 'ூ', 'ெ', 'ே', 'ை', 'ொ', 'ோ', 'ௌ', '்']
    }
  },
  methods: {
    fixdha: function (text) {
      for (let i = 0; i < this.vowelSigns.length; i++) {
        let re = new RegExp('⁴' + this.vowelSigns[i], 'g')
        text = text.replace(re, this.vowelSigns[i] + '⁴')
      }
      return text
    }
  }
}
</script>

<style scoped>
.cards {
  width:140px;
  height:170px;
}
.tamil {
  font-size: 100%;
}
</style>
