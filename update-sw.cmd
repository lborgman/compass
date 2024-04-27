@echo =================================
@findstr "SW_VERSION" .\sw-workbox-input.js | findstr const
npx workbox-cli injectManifest 