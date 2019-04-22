#!/bin/sh
ng build --prod --output-hashing=none --extract-css --progress --output-path=dist-popup-webcomponent && cat dist-popup-webcomponent/runtime.js dist-popup-webcomponent/polyfills.js dist-popup-webcomponent/main.js > demo/popup-webcomponent.js
cp dist-popup-webcomponent/styles.css demo/styles.css
cp dist-popup-webcomponent/favicon.ico demo/favicon.ico
