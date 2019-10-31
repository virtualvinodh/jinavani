<template>
  <q-layout view="hHr Lpr fFf">
    <q-window-resize-observable @resize="onResize" />

    <q-layout-header class="">
      <q-toolbar
        color="dark"
      >
        <q-btn
          flat
          dense
          round
          aria-label="Menu"
          @click.native="leftDrawerOpen = !leftDrawerOpen"
        >
          <q-icon name="menu" />

        </q-btn>

        <div class="q-ma-xs">
          <q-btn
            round
            size="lg"
            color="dark"
            to="/editor"
          >
            <vatteluttu text="ஶ்ரீ" class="demo1"> </vatteluttu>
          </q-btn>
        </div>
        <q-toolbar-title>
          Jinavani : ஜினவாணி
          <div slot="subtitle">கல்வெட்டுச்செயலி </div>
        </q-toolbar-title>
      </q-toolbar>
    </q-layout-header>

    <q-layout-drawer
      v-model="leftDrawerOpen"
      class=""
      side="left"
      width="200"
      :content-class="$q.theme === 'mat' ? 'bg-grey-2' : null"
    >
      <q-list
        no-border
        link
        inset-delimiter
      > <!-- link to other tools -->
        <!-- Options to create pseudo epigraphs -->
        <!-- Icon -->
        <q-item to="/editor">
          <q-item-side icon="edit" />
          <q-item-main label="Editor" sublabel="சொற்செயலி" />
        </q-item>
        <q-item to="/image">
          <q-item-side icon="image" />
          <q-item-main label="Image" sublabel="படம்" />
        </q-item>
        <q-collapsible icon="school" label="Learn" sublabel="கற்க" >
            <q-item to="/learn-brahmi">
              <q-item-main label="Tamil-Brahmi" sublabel="தமிழ்-பிராமி" />
            </q-item>
            <q-item to="/learn-vatteluttu">
              <q-item-main label="Vatteluttu" sublabel="வட்டெழுத்து" />
            </q-item>
        </q-collapsible>
        <q-collapsible icon="how to reg" label="Practice" sublabel="பயிற்சி செய்க" >
            <q-item to="/practice-brahmi">
              <q-item-main label="Tamil-Brahmi : Fill" sublabel="தமிழ்-பிராமி நிரப்புக" />
            </q-item>
            <q-item to="/practice-vatteluttu">
              <q-item-main label="Vatteluttu : Fill" sublabel="வட்டெழுத்து நிரப்புக" />
            </q-item>
            <q-item to="/match-letter">
              <q-item-main label="Match" sublabel="பொருத்துக" />
            </q-item>
            <q-item to="/flipcards-shuffle">
              <q-item-main label="Flipcards" sublabel="திருப்புக" />
            </q-item>
            <q-item to="/memory-cards">
              <q-item-main label="Memorize" sublabel="நினைவில் கொள்க " />
            </q-item>
        </q-collapsible>
        <q-collapsible icon="book" label="Books"  sublabel="நூல்கள்" >
          <q-item to="/thirukkural">
            <q-item-main label="Thirukkural" sublabel="திருக்குறள்" />
          </q-item>
          <q-item to="/tholkaappiyam">
            <q-item-main label="Tholkaappiyam" sublabel="தொல்காப்பியம்" />
          </q-item>
        </q-collapsible>
        <q-collapsible icon="build" label="Manuals" sublabel="கையேடுகள்" >
          <q-item to="/adinatha-manual">
            <q-item-main label="Adinatha Font Manual" sublabel="ஆதிநாதர் கையேடு" />
          </q-item>
          <q-item to="/e-brahmi-manual">
            <q-item-main label="e-Brahmi Font Manual" sublabel="இ-பிராமி கையேடு" />
          </q-item>
          <q-item to="/e-velvi-manual">
            <q-item-main label="Vattelutu Font Manual" sublabel="வட்டெழுத்து கையேடு" />
          </q-item>
            <q-item @click.native="openURL('http://www.virtualvinodh.com/wp/tamil-script-evolution/')" link>
              <q-item-main label="Tamil Script Evolution" sublabel="தமிழ் எழுத்துக்கள்  வளர்ச்சி" />
            </q-item>
          </q-collapsible>
        <q-collapsible icon="developer board" label="Other Tools" sublabel="பிற கருவிகள்">
            <q-item @click.native="openURL('http://www.virtualvinodh.com/aksharamukha')" link>
              <q-item-main label="Aksharamukha" sublabel="அக்ஷரமுகம்" />
            </q-item>
            <q-item @click.native="openURL('http://www.avalokitam.com')" link>
              <q-item-main label="Avalokitam" sublabel="அவலோகிதம்" />
            </q-item>
            <q-item @click.native="openURL('http://www.anunaadam.appspot.com')" link>
              <q-item-main label="Anunaadam" sublabel="அனுநாதம்" />
            </q-item>
            <q-item @click.native="openURL('http://fonts.udhayam.in')" link>
              <q-item-main label="Udayam Fonts" sublabel="உதயம் எழுத்துரு" />
            </q-item>
        </q-collapsible>
         <q-item to="/download">
          <q-item-side icon="cloud download" />
          <q-item-main label="Download" sublabel="தகவலிறக்கம்" />
        </q-item>
         <q-item to="/about">
          <q-item-side icon="info" />
          <q-item-main label="About" sublabel="பற்றி" />
        </q-item>
      </q-list>
      <br/>
<social-sharing url="http://tamiljinavani.appspot.com"
                      title="Jinavani : ஜினவாணி"
                      description="Tamil Epigraphic Editor : தமிழ்க் கல்வெட்டுச் சொற்செயலி"
                      quote="Tamil Epigraphic Editor : தமிழ்க் கல்வெட்டுச் சொற்செயலி"
                      hashtags="jinavani,tamil,brahmi,tamilepigraphy"
                      inline-template>
  <div class="social">
      <network network="facebook" class="q-ma-md cursor-pointer">
        <img src="../statics/facebook.svg" width="20px">
      </network>
      <network network="whatsapp" class="q-ma-md mobile-only">
        <img src="../statics/whatsapp.svg" width="20px">
      </network>
      <network network="twitter" class="q-ma-md cursor-pointer">
        <img src="../statics/twitter.svg" width="20px">
      </network>
  </div>
</social-sharing>
    </q-layout-drawer>

    <q-page-container class="page">
      <div :class="$q.platform.is.mobile ? 'alert2': 'alert'" v-if="visibleAlert2" class="q-ma-sm">
      <q-alert
          color="grey-7"
          icon="euro_symbol"
          appear
          :actions="[{ label: 'Hide', handler: hideAlert }]"
          class="q-mb-sm"
        > <a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=HZVFCCB2F4SL6&source=url">Donate</a> to support Jinavani! </q-alert>
      </div>
      <router-view/>
    </q-page-container>
    <q-layout-footer v-show="showFooter" class="print-hide">
        <q-toolbar color="tertiary" class="footer-quote">
          © 2018 <a href="http://www.virtualvinodh.com">Vinodh Rajan</a>&nbsp;&nbsp;&nbsp;vinodh@virtualvinodh.com. This software is released under GNU AGPL 3.0 license.
          <q-btn
          round
          size="md"
          text-color="white"
          color="dark"
          class="print-only q-ml-sm q-mr-sm"
        >
          <vatteluttu text="ஶ்ரீ" class="demo1"> </vatteluttu>
          </q-btn>
          <div class="print-only">
            Jinavani : ஜினவாணி <br/>
            http://tamiljinavani.appspot.com
          </div>
        </q-toolbar>
    </q-layout-footer>

  </q-layout>
</template>

<script>
import { openURL, QLayoutFooter, QTooltip, QWindowResizeObservable, QCollapsible, QAlert } from 'quasar'
import Brahmi from '../components/Brahmi'
import Vatteluttu from '../components/Vatteluttu'
import SocialSharing from 'vue-social-sharing'

export default {
  name: 'LayoutDefault',
  components: {
    QLayoutFooter,
    Brahmi,
    QTooltip,
    Vatteluttu,
    QWindowResizeObservable,
    QCollapsible,
    SocialSharing,
    QAlert
  },
  data () {
    return {
      leftDrawerOpen: true,
      visibleAlert2: true,
      showFooter: true
    }
  },
  mounted: function () {
    if (localStorage.visibleAlert2) {
      this.visibleAlert2 = JSON.parse(localStorage.visibleAlert2)
    }
  },
  methods: {
    openURL,
    hideAlert: function () {
      this.visibleAlert2 = false
      localStorage.visibleAlert2 = JSON.stringify(this.visibleAlert2)
    },
    onResize: function (size) {
      if (size.width < 992) {
        this.showFooter = false
      } else {
        this.showFooter = true
      }
    }
  }
}
</script>

<style>
.alert {
}
.alert2 {
}
.alert a:link {
  color:white;
}
.alert a:visited {
  color:white;
}
.alert2 a:link {
  color:white;
}
.alert2 a:visited {
  color:white;
}

.footer-img {
  height: 20px;
}
.footer-quote {
  font-size: 12px;
}
.page {
  margin-left: 10px;
}
.footer-quote {
  text-align: right;
  float:center;
}
.quotef {
  float: center;
}
.demo1 {
    color: white;
    background-color: #424242;
    text-shadow: 0px 1px 0px rgba(0,0,0,.5);
}
.social {
  text-align: center;
}
.q-body-1 {
  line-height: 1.75em;
}
@font-face {
  font-family: Adinatha Tamil Brahmi;
  src: url('https://cdn.jsdelivr.net/gh/virtualvinodh/jinavani/src/statics/Adinatha-Tamil-Brahmi.otf');
}
@font-face {
  font-family: e-Brahmi T;
  src: url('https://cdn.jsdelivr.net/gh/virtualvinodh/jinavani/src/statics/e-Brahmi-T.ttf');
}
@font-face {
  font-family: e-Velvi;
  src: url('https://cdn.jsdelivr.net/gh/virtualvinodh/jinavani/src/statics/e-Velvi.ttf');
  font-display: block;
}
</style>
