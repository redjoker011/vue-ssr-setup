import Vue from 'vue'
import App from './App.vue'
import { createRouter } from './router.js'

export function createApp() {
  const router = createRouter();

  const app =new Vue({
    el: '#app',
    router,
    render: h => h(App)
  })

  return { app, router }
}
