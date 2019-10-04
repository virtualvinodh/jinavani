<template>
  <span class="brahmi-cont" v-html="convert(text, spelling)">
  </span>
</template>

<script>
export default {
  // name: 'ComponentName',
  props: ['spelling', 'text'],
  data () {
    return {
      vowelsT: ['அ', 'ஆ', 'இ', 'ஈ', 'உ', 'ஊ', 'எ', 'ஏ', 'ஐ', 'ஒ', 'ஓ', 'ஔ', 'ஃ'],
      vowelsB: ['𑀅', '𑀆', '𑀇', '𑀈', '𑀉', '𑀊', '𑀏𑁆', '𑀏', '𑀐', '𑀑𑁆', '𑀑', '𑀒', '𑀂'],
      consonantsT: [ 'த⁴', 'க', 'ங', 'ச', 'ஜ', 'ஞ', 'ட', 'ண', 'த', 'ந', 'ன',
        'ப', 'ம', 'ய', 'ர', 'ற', 'ல', 'ள', 'ழ', 'வ', 'ஷ', 'ஸ', 'ஹ', 'ஶ'],
      consonantsB: ['𑀥', '𑀓', '𑀗', '𑀘', '𑀚', '𑀜', '𑀝', '𑀡', '𑀢', '𑀦', '𑀷',
        '𑀧', '𑀫', '𑀬', '𑀭', '𑀶', '𑀮', '𑀴', '𑀵', '𑀯', '𑀱', '𑀲', '𑀳', '𑀰'],
      vowelSignsT: ['ா', 'ி', 'ீ', 'ு', 'ூ', 'ெ', 'ே', 'ை', 'ொ', 'ோ', 'ௌ', '்'],
      vowelSignsB: ['𑀸', '𑀺', '𑀻', '𑀼', '𑀽', '𑁂𑁆', '𑁂', '𑁃', '𑁄𑁆', '𑁄', '𑁅', '𑁆']
    }
  },
  methods: {
    convert: function (text, spelling) {
      var i, re
      var brahmiText = text

      brahmiText = brahmiText.replace('ஸ்ரீ', 'ஶ்ரீ')

      for (i = 0; i < this.vowelSignsT.length; i++) {
        re = new RegExp('⁴' + this.vowelSignsT[i], 'g')
        // brahmiText = brahmiText.replace(re, this.vowelSignsB[i] + '⁴')
      }

      for (i = 0; i < this.vowelsT.length; i++) {
        re = new RegExp(this.vowelsT[i], 'g')
        brahmiText = brahmiText.replace(re, this.vowelsB[i])
      }

      for (i = 0; i < this.consonantsT.length; i++) {
        re = new RegExp(this.consonantsT[i], 'g')
        brahmiText = brahmiText.replace(re, this.consonantsB[i])
      }

      for (i = 0; i < this.vowelSignsT.length; i++) {
        re = new RegExp(this.vowelSignsT[i], 'g')
        brahmiText = brahmiText.replace(re, this.vowelSignsB[i])

        re = new RegExp('⁴' + this.vowelSignsT[i], 'g')
        brahmiText = brahmiText.replace(re, this.vowelSignsB[i])
      }

      if (spelling === 'middle') {
        brahmiText = brahmiText.replace(/𑁆/g, '')
      }

      if (spelling === 'early') {
        for (i = 0; i < this.consonantsB.length; i++) {
          re = new RegExp(this.consonantsB[i], 'g')
          brahmiText = brahmiText.replace(re, this.consonantsB[i] + '𑀸')
        }

        for (i = 0; i < this.vowelSignsB.length; i++) {
          re = new RegExp('𑀸' + this.vowelSignsB[i], 'g')
          brahmiText = brahmiText.replace(re, this.vowelSignsB[i])
        }
        brahmiText = brahmiText.replace(/𑁆/g, '')
      }

      this.$emit('converted', brahmiText)

      return brahmiText
    }
  }
}
</script>

<style>
.brahmi-cont {
  font-family: Adinatha Tamil Brahmi;
  font-size: 130%;
  line-height: 2em;
}
</style>
