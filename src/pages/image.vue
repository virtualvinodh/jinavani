<template>
  <q-page>
     <h5 class="q-ma-md"> Image Overlay : பட உரை </h5>
      <div class="q-body-1 q-ma-md">தாங்கள் விரும்பும் படத்தில் தமிழ்-பிராமி அல்லது வட்டெழுத்து உரையை சேர்க்க. முதலில் படத்தை தேர்வு செய்யவும், பிறகு உரையினை உள்ளிடுக, இறுதியாக நிறத்தை தேர்வு செய்க. <br/> <br/>
      The text can be moved around and zoomed as you wish.
      </div>
      <q-uploader url="" clearable extensions=".jpg, .jpeg, .png, .bmp" @add="showConvertImage" stack-label="Select Image/தேர்வு செய்க" auto-expand
               hide-upload-button ref="uploadF" :style="{width:'250px'}" class="q-ma-md" @remove:cancel="removeFile"/>
      <q-input class="q-ma-md" v-model="textInput" stack-label="Text/உரை" placeholder="தமிழில் உள்ளிடுக"> </q-input>
      <q-color v-model="color" class="q-ma-md" @input="changeColor" stack-label="Color/நிறம்"></q-color><br/>
      <controls v-model="options" :extra="false" class="q-ml-md print-hide"></controls>
      <q-btn label="Download image" class="q-ml-md print-hide" @click="printDocument"></q-btn>
      <canvas id="c" :width="canvasWidth" :height="canvasWidth" class="q-ma-md"></canvas>
      <br/><br/>

      <canvas id="d" :width="canvasWidth" :height="canvasWidth" class="q-ma-md" :style="{'display': 'none'}"></canvas>
      <vatteluttu text="" v-show="true"></vatteluttu>
      <brahmi text="" v-show="true"></brahmi>
      <component :text="sanitize(textInput)" :spelling="options.spelling"
          :is="options.script === 'brahmi' ? options.font : options.script" @converted="convert" v-show="false"></component>
      <a :href="brahmiImg" ref="imgDownload" :style="{'display': 'none'}" download="text.png"><button>Download</button></a>
  </q-page>
</template>

<style>
</style>

<script>
import {QEditor, QRadio, QBtn, QField, QBtnToggle, QToggle, QSlider, QInput, QColorPicker, QUploader, QColor} from 'quasar'
import {fabric} from 'fabric'
import Brahmi from '../components/Brahmi'
import BrahmiE from '../components/BrahmiE'
import Vatteluttu from '../components/Vatteluttu'
import sanitizeHtml from 'sanitize-html'
import Controls from '../components/Controls'

import { saveAs } from 'file-saver'

export default {
  name: 'PageIndex',
  components: {
    QEditor,
    QColor,
    QColorPicker,
    QUploader,
    QInput,
    QRadio,
    Brahmi,
    QBtn,
    QField,
    QBtnToggle,
    QToggle,
    BrahmiE,
    Vatteluttu,
    Controls,
    QSlider
  },
  plugins: ['Notify'],
  data () {
    return {
      textInput: 'ஜினவாணி',
      textOutput: '',
      fontSize: 100,
      color: '#2469E0',
      options: {},
      brahmiImg: '',
      imageFile: '',
      canvas: '',
      canvas2: '',
      canvasWidth: 300,
      canvasHeightN: 300,
      scaleFactor: 1,
      aspectRatio: 1,
      canvasJson: ''
    }
  },
  mounted: function () {
    this.canvas = new fabric.Canvas('c')
    this.canvas2 = new fabric.Canvas('d')

    this.canvasJson = JSON.stringify(this.canvas)
  },
  methods: {
    sleep: function (ms) {
      return new Promise(resolve => setTimeout(resolve, ms))
    },
    sanitize: function (html) {
      sanitizeHtml.defaults.allowedTags.push('font')
      console.log(sanitizeHtml.defaults.allowedAttributes)
      console.log(typeof sanitizeHtml.defaults.allowedAttributes)
      sanitizeHtml.defaults.allowedAttributes['font'] = ['size']
      return sanitizeHtml(html)
    },
    removeFile: function () {
      this.canvas.clear()
      this.canvas.renderAll()
      this.canvas.loadFromJSON(this.canvasJson)
      this.canvas.renderAll()
    },
    changeColor: function (text) {
      this.textInput += '\u200B'
    },
    convert: function (text) {
      this.textOutput = text
      var dhis = this
      this.canvas.forEachObject(function (obj) {
        if (obj.id && obj.id === 'text') {
          obj.text = text
          obj.fill = dhis.color

          if (dhis.options.script === 'vatteluttu') {
            obj.fontFamily = 'e-Velvi'
          }

          if (dhis.options.script === 'brahmi') {
            obj.fontFamily = 'Adinatha Tamil Brahmi'
          }
        }
      })

      this.textInput = this.textInput.replace('\u200B', '')

      dhis.canvas.renderAll()
    },
    showConvertImage: function (files) {
      this.imageFile = files[0].__img

      this.aspectRatio = this.imageFile.height / this.imageFile.width

      this.canvasHeightN = this.canvasWidth * this.aspectRatio

      this.scaleFactor = this.canvasWidth / this.imageFile.width

      this.canvas.setBackgroundImage(this.imageFile.src, this.canvas.renderAll.bind(this.canvas), {
        width: this.imageFile.width,
        height: this.imageFile.height,
        scaleX: this.scaleFactor,
        scaleY: this.scaleFactor
      })

      this.canvas.setHeight(this.canvasHeightN)

      var textbox = new fabric.Textbox('Vinodh', {
        id: 'text',
        fill: this.color,
        width: 100,
        borderColor: 'red',
        cornerColor: 'green',
        cornerSize: 10,
        transparentCorners: false
      })

      this.canvas.add(textbox).setActiveObject(textbox)

      this.canvas.renderAll()
    },
    printDocument2: function () {
      this.canvas2.getElement().toBlob(function (blob) {
        saveAs(blob, 'canvas.png')
      })
    },
    printDocument: async function () {
      this.$q.notify({
        type: 'info',
        message: 'Image is being generated. Please wait.',
        position: 'center',
        timeout: 2000
      })

      var dhis = this
      this.canvas2.clear()
      this.canvas2.renderAll()
      this.canvas2.loadFromJSON(this.canvasJson)
      this.canvas2.renderAll()

      // var image = new Image()

      // Scale images to the original size

      var newScaleFactor = 1
      var textFactor = newScaleFactor / this.scaleFactor

      this.canvas2.setHeight(this.imageFile.width * this.aspectRatio)
      this.canvas2.setWidth(this.imageFile.width)

      this.canvas2.setBackgroundImage(this.imageFile.src, this.canvas2.renderAll.bind(this.canvas2), {
        width: this.imageFile.width,
        height: this.imageFile.height,
        scaleX: newScaleFactor,
        scaleY: newScaleFactor
      })

      this.canvas2.renderAll()

      var textbox = new fabric.Textbox('Vinodh', {
        id: 'text',
        fill: this.color,
        width: 100,
        borderColor: 'red',
        cornerColor: 'green',
        cornerSize: 10,
        transparentCorners: false
      })

      this.canvas2.add(textbox)

      var top
      var left
      var scaleX
      var scaleY
      this.canvas.forEachObject(function (obj) {
        top = obj.top
        left = obj.left
        scaleX = obj.scaleX
        scaleY = obj.scaleY
      })

      this.canvas2.forEachObject(function (obj) {
        obj.scaleX = scaleX * textFactor
        obj.scaleY = scaleY * textFactor
        obj.top = top * textFactor
        obj.left = left * textFactor

        if (dhis.options.script === 'vatteluttu') {
          obj.fontFamily = 'e-Velvi'
        }

        if (dhis.options.script === 'brahmi') {
          obj.fontFamily = 'Adinatha Tamil Brahmi'
        }

        obj.text = dhis.textOutput
        obj.fill = dhis.color
      })

      this.canvas2.renderAll()

      await this.sleep(1000)

      this.printDocument2()

      /*  image.src = this.canvas2.toDataURL('image/png', 1)
      dhis.brahmiImg = image.src

      console.log(this.brahmiImg)

      image.onload = function () {
        dhis.brahmiImg = image.src
        var image2 = new Image()
        image2.src = image.src

        image2.onload = function () {
          // dhis.$refs.imgDownload.click()
        }
      } */
    }
  }
}
</script>

<style>
</style>
