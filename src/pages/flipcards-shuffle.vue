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
Front
    <q-btn-toggle
      class="q-ma-sm"
      v-model = "script1"
      toggle-color="faded"
      :options="[
        {label: 'Tamil-Brahmi', value: 'brahmi'},
        {label: 'Vatteluttu', value: 'vatteluttu'},
        {label: 'Tamil', value: 'tamil'}
      ]"
    />
Back
    <q-btn-toggle
      class="q-ma-sm"
      v-model = "script2"
      toggle-color="faded"
      :options="[
        {label: 'Tamil-Brahmi', value: 'brahmi'},
        {label: 'Vatteluttu', value: 'vatteluttu'},
        {label: 'Tamil', value: 'tamil'}
      ]"
    />
    <q-btn label = "Shuffle" class="q-ma-md" color="faded" @click="shuffleCard"></q-btn>
    <q-btn label = "New Set" class="q-ma-md" color="faded" @click="reset"></q-btn>

    <br/>
    <p class="q-body-1 q-ma-md">Guess a character of the card and then click on the card to check your answer</p>
  <transition
   enter-active-class="animated fadeIn"
   leave-active-class="animated fadeOut"
   mode="out-in"
    >
    <span :key="resetV">
    <transition-group
    name="flip-list"
    >
      <flipcard v-for="i in randomList" :key="i" inline class="cards q-ma-sm"
       :text="compounds[i]" :script1="script1" :script2="script2">
      </flipcard>
    </transition-group>
    </span>
  </transition>
  </q-page>
</template>

<script>
import {QCard, QCardTitle, QCardMain, QCardMedia, QCardActions, QField, QInput, QBtnToggle, QToggle, Notify, QBtn} from 'quasar'
import Brahmi from '../components/Brahmi'
import Controls from '../components/Controls'
import BrahmiE from '../components/BrahmiE'
import Tamil from '../components/Tamil'
import Vatteluttu from '../components/Vatteluttu'
import Flipcard from '../components/Flipcard'

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
    QBtn,
    Tamil,
    Flipcard
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
      countTotal: 18,
      script1: 'brahmi',
      script2: 'tamil',
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
      this.randomList2 = this.shuffle(this.randomList)
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
