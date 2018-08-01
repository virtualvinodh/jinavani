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
          dhis.brahmiImg = image.src

          var image2 = new Image()
          var cropped = dhis.removeWhite(image)
          image2.src = cropped
          dhis.brahmiImg = cropped

          image2.onload = function () {
            dhis.$refs.imgDownload.click()
          }
        }
      })
    },
    removeWhite: function (imageObject) {
      var imgWidth = imageObject.width
      var imgHeight = imageObject.height
      var canvas = document.createElement('canvas')
      canvas.setAttribute('width', imgWidth)
      canvas.setAttribute('height', imgHeight)
      var context = canvas.getContext('2d')
      context.drawImage(imageObject, 0, 0)

      var imageData = context.getImageData(0, 0, imgWidth, imgHeight)
      var data = imageData.data
      var getRBG = function (x, y) {
        var offset = imgWidth * y + x
        return {
          red: data[offset * 4],
          green: data[offset * 4 + 1],
          blue: data[offset * 4 + 2],
          opacity: data[offset * 4 + 3]
        }
      }
      var isWhite = function (rgb) {
        // many images contain noise, as the white is not a pure #fff white
        return rgb.red > 200 && rgb.green > 200 && rgb.blue > 200
      }
      var scanY = function (fromTop) {
        var offset = fromTop ? 1 : -1

        // loop through each row
        for (var y = fromTop ? 0 : imgHeight - 1; fromTop ? (y < imgHeight) : (y > -1); y += offset) {
        // loop through each column
          for (var x = 0; x < imgWidth; x++) {
            var rgb = getRBG(x, y)
            if (!isWhite(rgb)) {
              if (fromTop) {
                return y
              } else {
                return Math.min(y + 1, imgHeight - 1)
              }
            }
          }
        }
        return null // all image is white
      }
      var scanX = function (fromLeft) {
        var offset = fromLeft ? 1 : -1
        // loop through each column
        for (var x = fromLeft ? 0 : imgWidth - 1; fromLeft ? (x < imgWidth) : (x > -1); x += offset) {
          // loop through each row
          for (var y = 0; y < imgHeight; y++) {
            var rgb = getRBG(x, y)
            if (!isWhite(rgb)) {
              if (fromLeft) {
                return x
              } else {
                return Math.min(x + 1, imgWidth - 1)
              }
            }
          }
        }
        return null // all image is white
      }

      var cropTop = scanY(true) - 20
      var cropBottom = scanY(false) + 20
      var cropLeft = scanX(true) - 20
      var cropRight = scanX(false) + 20
      var cropWidth = cropRight - cropLeft
      var cropHeight = cropBottom - cropTop

      canvas.setAttribute('width', cropWidth)
      canvas.setAttribute('height', cropHeight)
      // finally crop the guy
      canvas.getContext('2d').drawImage(imageObject,
        cropLeft, cropTop, cropWidth, cropHeight,
        0, 0, cropWidth, cropHeight)

      return canvas.toDataURL()
    },
    printDocument: function () {
      window.print()
    }
  }
}
</script>

<style>
</style>
