<template>
  <div>
    <q-btn-toggle
      class="q-mb-md"
      v-model = "script"
      toggle-color="faded"
      @input = "update"
      :options="[
        {label: 'Tamil-Brahmi', value: 'brahmi'},
        {label: 'Vatteluttu', value: 'vatteluttu'},
      ]"
    /> <br/>
    <transition
            appear
            enter-active-class="animated fadeIn"
            leave-active-class="animated fadeOut"
          >
    <q-toggle v-model="advanced" icon="settings" color="faded"
      label="Advanced Settings" left-label class="q-ml-sm q-mb-md" v-show="script === 'brahmi' && extra" />
    </transition>
    <transition-group
            appear
            enter-active-class="animated fadeIn"
            leave-active-class="animated fadeOut"
          >
          <q-field
              icon="font_download"
              label="Font"
              helper="எழுத்துரு"
              :label-width="3"
              v-show="script === 'brahmi' && advanced === true"
              key="font"
          >
          <q-btn-toggle
            v-model="font"
            label="Vinodh"
            toggle-color="faded"
            @input = "update"
            :options="[
              {label: 'Adinatha', value: 'brahmi'},
              {label: 'E-Brahmi', value: 'brahmi-e'},
            ]"
          />
          </q-field>
          <q-field
              class="q-mt-sm"
              icon="spellcheck"
              label="Spelling"
              helper="எழுத்துமுறைமை"
              :label-width="3"
              v-show="script === 'brahmi' && advanced === true"
              key="Spelling"
            >
              <q-radio v-model="spelling" val="early" label="Early : ஸாலாகான" @input="updateR" :disabled="font === 'brahmi-e'"/> &nbsp;
              <q-radio v-model="spelling" val="middle" label="Middle : ஸாலகன"  @input="updateR" :disabled="font === 'brahmi-e'" /> &nbsp;
              <q-radio v-model="spelling" val="late" label="Late : ஸாலகன்" @input="updateR" :disabled="font === 'brahmi-e'" />
            </q-field>
        </transition-group>
    <br/>
  </div>
</template>

<script>
import {QRadio, QField, QBtnToggle, QToggle} from 'quasar'

export default {
  // name: 'ComponentName',
  components: {
    QRadio,
    QField,
    QBtnToggle,
    QToggle
  },
  props: ['extra'],
  data () {
    return {
      script: 'brahmi',
      font: 'brahmi',
      spelling: 'late',
      advanced: false
    }
  },
  mounted: function () {
    this.update()
  },
  methods: {
    update: function () {
      var options = {}

      options['script'] = this.script
      options['font'] = this.font
      options['spelling'] = this.spelling

      if (this.font === 'brahmi-e') {
        this.spelling = 'middle'
      }

      if (this.font === 'brahmi') {
        this.spelling = 'late'
      }

      this.$emit('input', options)
    },
    updateR: function () {
      var options = {}

      options['script'] = this.script
      options['font'] = this.font
      options['spelling'] = this.spelling

      this.$emit('input', options)
    }
  }
}
</script>

<style>
</style>
