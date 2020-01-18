(Get-Content .\src\layouts\default.vue).replace('../statics/Adinatha-Tamil-Brahmi.otf', 'https://cdn.jsdelivr.net/gh/virtualvinodh/jinavani/src/statics/Adinatha-Tamil-Brahmi.otf') | Set-Content .\src\layouts\default.vue

(Get-Content .\src\layouts\default.vue).replace('../statics/e-Brahmi-T.ttf', 'https://cdn.jsdelivr.net/gh/virtualvinodh/jinavani/src/statics/e-Brahmi-T.ttf') | Set-Content .\src\layouts\default.vue

(Get-Content .\src\layouts\default.vue).replace('../statics/e-Velvi.ttf', 'https://cdn.jsdelivr.net/gh/virtualvinodh/jinavani/src/statics/e-Velvi.ttf') | Set-Content .\src\layouts\default.vue

quasar build

cd ./dist

gcloud app deploy --project=tamiljinavani --quiet

cd ..