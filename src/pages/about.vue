<template>
    <q-page padding>
        <div class="q-mb-lg">
          <div class="invoc q-ma-sm q-display-1"><vatteluttu text="ஶ்ரீ ജിനായ നമഃ"> </vatteluttu> </div>
        </div>
        <div>
        <div style="float: left" class="q-mr-sm"><img src="../statics/jina-tss.png" width="60px"/></div>
        <div class="q-body-1 quote-comm q-mb-md">
              அகார எழுத்து முதலாய் இருக்கிறாப் போலே <br/>
              உலகத்துக்கெல்லாம் சர்வக்ஞனான சுவாமியே என்றவாறு
              <div class="q-ma-sm">திருக்குறள் ஜைன உரை</div>
        </div>
        </div>
        <br/>
        <div class="q-body-1">The app converts the modern Tamil script into its ancient predecessors namely, Tamil-Brahmi and Vatteluttu. Furthermore, it is also an educational tool to learn and practice these ancient Tamil scripts. You can also read Tamil classics such as Thirukkural and Tholkappiyam in both of these scripts in the app.</div> <br/>

        <div class="q-body-1">When the great Jina preaches in the Samavasarana, it is said that the divine sound emanating from him gets perceived by the multitude of beings present in their own native tongues. This sound is often called as Jinavani. In a similar vein, we hope to shed light on the ancient Tamil scripts and make it perceivable to the beings in the present day. This is to pay homage to the Jaina nature of many of the Tamil-Brahmi and Vatteluttu inscriptions.</div> <br/>

        <div class="q-body-1">இந்தச் செயலியானது நவீனகாலத்து தமிழ் எழுத்துக்களை தமிழ்-பிராமியிலும் வட்டெழுத்திலும் மாற்றும் திறன் கொண்டது. இதைத்தவிர்த்து, இதை தமிழ்-பிராமி மற்றும் வட்டெழுத்து எழுத்துக்களை கற்று பயிற்சி செய்யும் கருவியாகவும் பயன்படுத்தலாம். திருக்குறள் மற்றும் தொல்காப்பியத்தையும் கூட இதனூடாக இப்பழமையான எழுத்துக்களில் கண்டு களிக்கலாம்.</div> <br/>

        <div class="q-body-1">ஜினேஸ்வரன் தமது சமவசரணத்தில் அமர்ந்து உபதேசிக்கும் போது, சர்வக்ஞனான சுவாமியிடம் இருந்து வெளிப்பட்ட திவ்விய  சப்தத்தை அங்கிருக்கும் அனைத்து ஜீவன்களும் தத்தமது மொழியினில் புரிந்துகொள்வனராம். இந்த சப்தத்தையே  <i>ஜினவாணி</i> என்றழைப்பர். இது போலவே, பண்டைய தமிழ் எழுத்துக்களை இக்காலத்தவரும் புரிந்து கொள்ளும் விதமாக இயற்றப்பட்ட  காரணத்தினால் <span><font size="1"><brahmi text="ஜினவாணி" class="q-mr-sm"></brahmi></font>
          <font size="1"><strong><vatteluttu text="ஜினவாணி" class="q-mr-sm"></vatteluttu></strong></font></span> ஜினவாணி என்றழைக்கப்பட்டது. பல்வேறு தமிழ் பிராமி மற்றும் வட்டெழுத்து கல்வெட்டுகளின் ஜைன சமய தொடர்பை பிரதிபலிக்கும் விதமாக பெயர் இடப்பட்டது. </div> <br/>

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
  font-size:125%;
}
.invoc-img {
  margin-top: -30px;
  display:inline-block;
}
.quote-comm {
  text-align: left;
  font-size: 12px;
}
</style>
