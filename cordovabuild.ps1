(Get-Content .\src\layouts\default.vue).replace('https://cdn.jsdelivr.net/gh/virtualvinodh/jinavani/src/statics/Adinatha-Tamil-Brahmi.otf', '../statics/Adinatha-Tamil-Brahmi.otf') | Set-Content .\src\layouts\default.vue

(Get-Content .\src\layouts\default.vue).replace('https://cdn.jsdelivr.net/gh/virtualvinodh/jinavani/src/statics/e-Brahmi-T.ttf', '../statics/e-Brahmi-T.ttf') | Set-Content .\src\layouts\default.vue

(Get-Content .\src\layouts\default.vue).replace('https://cdn.jsdelivr.net/gh/virtualvinodh/jinavani/src/statics/e-Velvi.ttf', '../statics/e-Velvi.ttf') | Set-Content .\src\layouts\default.vue

quasar build -m cordova -T android

cd src-cordova

cordova run android

cd ..

