import { createApp } from 'vue'
import App from './App.vue'

import { invoke } from '@tauri-apps/api'

createApp(App).mount('#app')

invoke('greet', { name: 'World' })
  // `invoke` returns a Promise
  .then((response) => console.log(response))
