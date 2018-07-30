<template>
  <span class="vatteluttu" v-html="convert(text, spelling)">
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
      vowelSignsT: ['ா', 'ி', 'ீ', 'ு', 'ூ', 'ெ', 'ே', 'ை', 'ொ', 'ோ', 'ௌ', '்', ''],
      vowelSignsB: ['ാ', 'ി', 'ീ', 'ു', 'ൂ', 'േ', 'േ', 'ൈ', 'ോ', 'ോ', 'ൌ', '്', '']
    }
  },
  methods: {
    convert: function (text, spelling) {
      var i, j, re
      var brahmiText = text

      brahmiText = brahmiText.replace('ஶ்ரீ', 'ശ്രീ')
      brahmiText = brahmiText.replace('ஸ்ரீ', 'ശ്രീ')

      for (i = 0; i < this.consonantsT.length; i++) {
        for (j = 0; j < this.vowelSignsT.length; j++) {
          re = new RegExp(this.consonantsT[i] + this.vowelSignsT[j], 'g')
          brahmiText = brahmiText.replace(re, this.consonantsB[i] + this.vowelSignsB[j])
        }
      }

      return brahmiText
    }
  }
}
</script>

<style scoped>
@font-face {
  font-family: e-Velvi;
  src: url('../statics/e-Velvi.ttf');
}
.vatteluttu {
  font-family: e-Velvi;
  font-size: 133%;
  line-height: 1.35em;
}
</style>
