<template>
  <span class="brahmi-e-cont" v-html="convert(text, spelling)">
  </span>
</template>

<script>
export default {
  // name: 'ComponentName',
  props: ['text', 'spelling'],
  data () {
    return {
      consonantsT: ['ஜ', 'ஷ', 'ஸ', 'ஹ', 'ஶ'],
      consonantsB: ['ജ', 'ഷ', 'സ', 'ഹ', 'ശ'],
      vowelSignsT: ['ா', 'ி', 'ீ', 'ு', 'ூ', 'ெ', 'ே', 'ை', 'ொ', 'ோ', 'ௌ', ''],
      vowelSignsB: ['ാ', 'ി', 'ീ', 'ു', 'ൂ', 'േ', 'േ', 'ൈ', 'ോ', 'ോ', 'ൌ', '']
    }
  },
  methods: {
    convert: function (text, spelling) {
      var i, j, re
      var brahmiText = text

      brahmiText = brahmiText.replace('ஶ்ரீ', 'ശரீ')
      brahmiText = brahmiText.replace('ஸ்ரீ', 'ശரீ')

      for (i = 0; i < this.consonantsT.length; i++) {
        for (j = 0; j < this.vowelSignsT.length; j++) {
          re = new RegExp(this.consonantsT[i] + this.vowelSignsT[j], 'g')
          brahmiText = brahmiText.replace(re, this.consonantsB[i] + this.vowelSignsB[j])
        }
      }

      brahmiText = brahmiText.replace(/்/g, '')

      return brahmiText
    }
  }
}
</script>

<style>
.brahmi-e-cont {
  font-family: e-Brahmi T;
  font-size: 217%;
  line-height: 1.2em;
}
</style>
