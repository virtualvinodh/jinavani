<template>
  <q-page>
    <q-editor
     :toolbar="this.$q.platform.is.mobile ? toolbarMobile: toolbarNormal"
     class="q-ma-sm print-hide"
     v-model="textInput"/>
      <div ref="brahmiText" class="q-pa-md" id="printbrahmi">
        <component :text="sanitize(textInput)" :spelling="options.spelling"
          :is="options.script === 'brahmi' ? options.font : options.script"></component>
      </div>
      <QBtn color="light" class="q-ml-md q-mb-md print-hide" label="Download as image" @click="imageConvert"> </QBtn>
      <!-- <QBtn color="light" class="q-ml-md q-mb-md print-hide" label="Print" @click="printDocument"> </QBtn> -->
      <controls v-model="options" :extra="true" class="q-ml-md print-hide"></controls>
      <a :href="brahmiImg" ref="imgDownload" :style="{'display': 'none'}" download="text.png"><button>Download</button></a>
  </q-page>
</template>

<style>
</style>

<script>
import {QEditor, QRadio, QBtn, QField, QBtnToggle, QToggle} from 'quasar'
import Brahmi from '../components/Brahmi'
import BrahmiE from '../components/BrahmiE'
import Vatteluttu from '../components/Vatteluttu'
import sanitizeHtml from 'sanitize-html'
import html2canvas from 'html2canvas'
import Controls from '../components/Controls'

export default {
  name: 'PageIndex',
  components: {
    QEditor,
    QRadio,
    Brahmi,
    QBtn,
    QField,
    QBtnToggle,
    QToggle,
    BrahmiE,
    Vatteluttu,
    Controls
  },
  plugins: ['Notify'],
  data () {
    return {
      textInput: 'தமிழில் உள்ளிடுக',
      options: {},
      brahmiImg: '',
      toolbarNormal: [
        ['bold', 'italic', 'strike'],
        ['hr', 'quote'],
        [
          {
            icon: 'format size',
            list: 'no-icons',
            options: ['size-1', 'size-2', 'size-3', 'size-5', 'size-6']
          }
        ],
        [
          {
            icon: 'format size',
            list: 'no-icons',
            options: ['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6']
          }
        ],
        ['unordered', 'ordered'],
        ['outdent', 'indent'],
        ['removeFormat']
      ],
      // removed the align option below
      toolbarMobile: [
        ['bold', 'italic'],
        [
          {
            icon: 'format size',
            options: ['size-1', 'size-2', 'size-3', 'size-4', 'size-5', 'size-6', 'size-7']
          }
        ],
        [
          {
            label: 'Others',
            options: ['removeFormat', 'hr', 'quote', 'strike',
              'unordered', 'ordered', 'outdent', 'indent']
          }
        ]
      ]
    }
  },
  methods: {
    sanitize: function (html) {
      sanitizeHtml.defaults.allowedTags.push('font')
      console.log(sanitizeHtml.defaults.allowedAttributes)
      console.log(typeof sanitizeHtml.defaults.allowedAttributes)
      sanitizeHtml.defaults.allowedAttributes['font'] = ['size']
      return sanitizeHtml(html)
    },
    imageConvert: function () {
      var node = this.$refs.brahmiText
      console.log(node)
      var dhis = this

      html2canvas(node).then(function (canvas) {
        var image = new Image()
        image.src = canvas.toDataURL('image/png', 1)
        dhis.brahmiImg = image.src
        image.onload = function () {
          dhis.$refs.imgDownload.click()
        }
      })
    },
    printDocument: function () {
      window.print()
    }
  }
}
</script>

<style>
</style>
