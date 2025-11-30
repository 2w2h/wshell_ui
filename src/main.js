import { createApp } from 'vue'
import App from './App.vue'
import 'highlight.js/styles/base16/solarized-dark.css'
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import hljsVuePlugin from "@highlightjs/vue-plugin";
import { GridLayout, GridItem } from 'vue-grid-layout-v3'

hljs.registerLanguage('javascript', javascript);

const app = createApp(App)

app.use(hljsVuePlugin)
app.component('GridLayout', GridLayout)
app.component('GridItem', GridItem)

app.mount('#app')
