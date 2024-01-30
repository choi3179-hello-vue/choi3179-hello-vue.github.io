# choi3179-hello-vue.github.io

This template should help get you started developing with Vue 3 in Vite.

## How To Contribute
- WSL Ubuntu 22.04 LTS
- vim
- html/css
- vue.js

## How To Deploy
### STG dev  ( choi3179-hello-vue.web.app )
```bash
# manual firebase cmd*
$ firebase deploy
=== Deploying to 'html5-standard'...

i  deploying hosting
i  hosting[choi3179-hello-vue]: beginning deploy...
i  hosting[choi3179-hello-vue]: found 4 files in docs
✔  hosting[choi3179-hello-vue]: file upload complete
i  hosting[choi3179-hello-vue]: finalizing version...
✔  hosting[choi3179-hello-vue]: version finalized
i  hosting[choi3179-hello-vue]: releasing new version...
✔  hosting[choi3179-hello-vue]: release complete

✔  Deploy complete!

Project Console: https://console.firebase.google.com/project/html5-standard/overview
Hosting URL: https://choi3179-hello-vue.web.app
```
### STG prod ( choi3179.github.io )

|STG|BRANCH|TRIGGER|URL|
|------|---|---|---|
|DEV|Branch of PR|manual firebase cmd|[choi3179-hello-vue.web.app](https://choi3179-hello-vue.web.app)|
|PROD|main|Auto Github Action|[choi3179-hello-vue.github.io](https://choi3179-hello-vue.github.io)|
  
#### Project Setup
```sh
npm install
```

#### Compile and Hot-Reload for Development
```sh
npm run dev
```

#### Compile and Minify for Production
```sh
npm run build
```
