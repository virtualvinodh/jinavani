<template>
    <q-page padding>
        <div class="q-mb-lg">
          <q-btn
            round
            size="xl"
            color="dark"
          >
            <vatteluttu text="ஶ்ரீ" class="demo1"> </vatteluttu>
          </q-btn>
          <div class="invoc q-ma-sm q-display-1"><vatteluttu text="ஜிநாய நம"> </vatteluttu> </div>
          <q-btn
            round
            size="xl"
            color="dark"
          >
            <img src="../statics/jina-tss.png" width="50px" class="flip-horizontal"/>
          </q-btn>
        </div>
        <div class="q-body-1 quote-comm q-mb-md">
              அகார எழுத்து முதலாய் இருக்கிறாப் போலே
              உலகத்துக்கெல்லாம் சர்வக்ஞனான சுவாமியே என்றவாறு
              <div class="q-ma-sm">திருக்குறள் ஜைன உரை</div>
        </div>

        <div class="q-body-1">When the great Jina preaches in the Samavasarana, it is said that the divine sound emanating from him gets perceived by the multitude of beings present in their own native tongues. This sound is often called as <i>Jinavani</i>. In a similar vein, we hope to shed light on the ancient Tamil scripts and make it perceivable to the beings in the present day. On a related note, many of the Tamil-Brahmi and Vatteluttu inscriptions are also of Jaina in nature.</div> <br/>

        <div class="q-body-1">ஜினேஸ்வரன் தமது சமவசரணத்தில் அமர்ந்து உபதேசிக்கும் போது, சர்வக்ஞனான சுவாமியிடம் இருந்து வெளிப்பட்ட திவ்விய  சப்தத்தை அங்கிருக்கும் அனைத்து ஜீவன்களும் தத்தமது மொழியினில் புரிந்துகொள்வனராம். இந்த சப்தத்தையே  <i>ஜினவாணி</i> என்றழைப்பர். இது போலவே, பண்டைய தமிழ் எழுத்துக்களை இக்காலத்தவரும் புரிந்து கொள்ளும் விதமாக இயற்றப்பட்ட  காரணத்தினால் <span><brahmi text="ஜினவாணி" class="q-mr-sm"></brahmi>
          <strong><vatteluttu text="ஜினவாணி" class="q-mr-sm"></vatteluttu></strong></span> ஜினவாணி என்றழைக்கப்பட்டது. பல்வேறு தமிழ் பிராமி மற்றும் வட்டெழுத்து கல்வெட்டுகளும் ஜைன சமய தொடர்புடையவையே.</div> <br/>

         <div class="q-body-1">The source code is released under GNU AGPL and can be found in <a href="https://github.com/virtualvinodh/jinavani">Github</a>.</div>

        <div class="q-display-1 q-mt-lg q-mb-md">Notes</div >
        <div class="q-body-1">The forms presented here for Tamil-Brahmi & Vatteluttu are based on fonts that contain normalized glyphs and reconstructions. The forms occuring in the actual inscriptions can be significantly different with high levels of variation in their appearence.</div> <br/>

        <div class="q-body-1">Due to a bug with the USE rendering engine in Windows, Adinatha Tamil-Brahmi font currently doesn't work on Windows 10 applications and also Edge/IE. However, it should work with open source softwares such as LibreOffice and browsers such as Chrome/Firefox.</div>

        <div class="q-display-1 q-mt-lg q-mb-md">Feedback</div>
        <div class="q-body-1">Please send your feedback/comments to vinodh@virtualvinodh.com</div>

  </q-page>
</template>

<script>
import Vatteluttu from '../components/Vatteluttu'
import Brahmi from '../components/Brahmi'
import QToolTip from 'quasar'

export default {
  // name: 'PageName',
  components: {
    Vatteluttu,
    Brahmi,
    QToolTip
  }
}
</script>

<style>
.invoc {
  display:inline;
}
.invoc-img {
  margin-top: -30px;
  display:inline-block;
}
.quote-comm {
  text-align: left;
  width: 450px;
  font-size: 12px;
}
</style>
