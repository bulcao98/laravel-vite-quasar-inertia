import { createApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { Quasar } from 'quasar';

// Import Quasar css
import 'quasar/src/css/index.sass'

//Import Quasar icons-set
import '@quasar/extras/fontawesome-v5/fontawesome-v5.css'

import '../css/app.css'

createInertiaApp({
  resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob('./Pages/**/*.vue')),
  setup({ el, App, props, plugin }) {
    return createApp({ render: () => h(App, props) })
      .use(plugin)
      .use(Quasar)
      .mount(el)
  },
});

console.log("app.js")
