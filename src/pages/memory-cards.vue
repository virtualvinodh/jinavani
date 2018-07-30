<template>
  <q-page padding>
  <q-field
  icon="cloud"
  label="Count"
  helper="Enter the number of letters that you want to test"
  :count="3"
>
  <q-input suffix="letters" v-model="countTotal" @input="reset"/>
</q-field>
Script
    <q-btn-toggle
      class="q-ma-md"
      v-model = "script"
      toggle-color="faded"
      :options="[
        {label: 'Tamil-Brahmi', value: 'brahmi'},
        {label: 'Vatteluttu', value: 'vatteluttu'},
      ]"
    />
  <p class="q-body-1 q-ma-md">Find matching cards. Click on the cards to flip them.</p>
  <transition
   enter-active-class="animated fadeIn"
   leave-active-class="animated fadeOut"
   mode="out-in"
    >
    <span :key="resetV">
    <transition-group
    name="flip-list"
    >
      <flipcard-memory v-for="(i,index) in randomList" :key="index" inline class="cards q-ma-sm" :ref="'q' + index"
        @click.native="select(index, i)"
        :text="compounds[i]" :script="script" >
      </flipcard-memory>
    </transition-group>
    </span>
  </transition>
  <br/>
  <q-btn label = "Play again" class="q-ma-lg" color="faded" @click="reset"></q-btn>
  <br/>
  </q-page>
</template>

<script>
import {QCard, QCardTitle, QCardMain, QCardMedia, QCardActions, QField, QInput, QBtnToggle, QToggle, Notify} from 'quasar'
import Brahmi from '../components/Brahmi'
import Controls from '../components/Controls'
import BrahmiE from '../components/BrahmiE'
import Tamil from '../components/Tamil'
import FlipcardMemory from '../components/FlipcardMemory'
import Vatteluttu from '../components/Vatteluttu'
var _ = require('underscore')

export default {
  // name: 'PageName',
  components: {
    QCard,
    QCardTitle,
    QCardMain,
    QCardMedia,
    QCardActions,
    Brahmi,
    BrahmiE,
    Vatteluttu,
    QField,
    QInput,
    QBtnToggle,
    QToggle,
    Controls,
    Tamil,
    FlipcardMemory
  },
  plugins: [Notify],
  mounted: function () {
    this.randomListGen()
  },
  computed: {
    compounds: function () {
      var compounds = []
      var short = ['ெ', 'ொ']
      for (let i = 0; i < this.consonants.length; i++) {
        for (let j = 0; j < this.vowelSigns.length; j++) {
          if (!this.grantha.includes(this.consonants[i]) || !short.includes(this.vowelSigns[j])) {
            compounds.push(this.consonants[i] + this.vowelSigns[j])
          }
        }
      }

      compounds.push('ஶ்ரீ')

      compounds = compounds.concat(this.vowels)
      compounds = compounds.concat(this.consonants)

      return compounds
    }
  },
  data () {
    return {
      countTotal: 9,
      script: 'vatteluttu',
      autoclick: false,
      selected: ['', ''],
      matched: [],
      randomList: [],
      randomListOld: [],
      resetV: true,
      vowels: ['அ', 'ஆ', 'இ', 'ஈ', 'உ', 'ஊ', 'எ', 'ஏ', 'ஐ', 'ஒ', 'ஓ', 'ஔ', 'ஃ'],
      consonants: ['க', 'ங', 'ச', 'ஞ', 'ட', 'ண', 'த', 'ந',
        'ப', 'ம', 'ய', 'ர', 'ல', 'வ', 'ழ', 'ள', 'ற', 'ன', 'ஜ', 'ஷ', 'ஸ', 'ஹ'],
      vowelSigns: ['ா', 'ி', 'ீ', 'ு', 'ூ', 'ெ', 'ே', 'ை', 'ொ', 'ோ', 'ௌ', '்'],
      grantha: ['ஜ', 'ஷ', 'ஸ', 'ஹ', 'ஶ']
    }
  },
  methods: {
    getRandomInt: function (min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min
    },
    getRandomCompound: function () {
      return this.getRandomInt(0, this.compounds.length - 1)
    },
    randomListGen: function () {
      this.randomListOld = this.randomList.slice()
      this.randomList = []
      while (this.randomList.length < this.countTotal) {
        let random = this.getRandomCompound()
        if (!this.randomList.includes(random) && !this.randomListOld.includes(random)) {
          this.randomList.push(random)
        }
      }
      this.randomList = this.randomList.concat(this.randomList)
      this.randomList = this.shuffle(this.shuffle(this.randomList))
    },
    verify: function () {
    },
    reset: function () {
      this.resetV = !this.resetV
      this.randomListGen()
    },
    shuffleCard: function () {
      this.randomList = this.shuffle(this.randomList)
    },
    show: function () {
      this.$refs.q1[0].$el.click()
      console.log(this.$refs.q1)
    },
    select: function (index, compound) {
      if (!this.autoclick) {
        if (index === this.selected[0] || this.matched.includes(index)) {
          this.$refs['q' + index][0].$el.click()
        } else if (this.selected[0] === '') {
          this.selected[0] = index
          this.selected[1] = compound
          console.log(index + 'clicked')
        } else {
          if (compound === this.selected[1]) {
            var dis = this
            this.$q.notify({
              type: 'positive',
              message: 'Matched ' + dis.compounds[compound] + ' !',
              position: 'center',
              timeout: 250
            })

            this.matched.push(index)
            this.matched.push(this.selected[0])

            this.selected[0] = ''
            this.selected[1] = ''
          } else {
            console.log(index + 'clicked')

            this.$q.notify({
              type: 'negative',
              message: 'Not a match',
              position: 'center',
              timeout: 250
            })

            var dhis = this

            setTimeout(function () {
              dhis.autoclick = true
              dhis.$refs['q' + index][0].$el.click()
              dhis.$refs['q' + dhis.selected[0]][0].$el.click()

              dhis.selected[0] = ''
              dhis.selected[1] = ''

              dhis.autoclick = false
            }, 2000)
          }
        }
      }
    },
    shuffle: function (arr) {
      return _.shuffle(arr)
    }
  }
}
</script>

<style>
.cards {
  width: 100px;
}
.flip-list-move {
  transition: transform 1s;
}

</style>
