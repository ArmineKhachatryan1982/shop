// import '../css/app.css';
// import './bootstrap';
// //=========== es em avelacrel jquery i hamar
// import $ from 'jquery'
// window.$ = $
// window.jQuery = $
// // import './assets/plugins.js'
// // import './assets/main.js'



// // =================

// import { createInertiaApp } from '@inertiajs/vue3';
// import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
// import { createApp, h } from 'vue';
// import { ZiggyVue } from '../../vendor/tightenco/ziggy';

// const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

// createInertiaApp({
//     title: (title) => `${title} - ${appName}`,
//     resolve: (name) =>
//         resolvePageComponent(
//             `./Pages/${name}.vue`,
//             import.meta.glob('./Pages/**/*.vue'),
//         ),
//     setup({ el, App, props, plugin }) {
//         return createApp({ render: () => h(App, props) })
//             .use(plugin)
//             .use(ZiggyVue)
//             .mount(el);


//     },
//     progress: {
//         color: '#4B5563',
//     },
// });
import '../css/app.css';
import './bootstrap';

import $ from 'jquery';
window.$ = $;
window.jQuery = $;

import { createInertiaApp } from '@inertiajs/vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createApp, h } from 'vue';
import { ZiggyVue } from '../../vendor/tightenco/ziggy';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
  title: (title) => `${title} - ${appName}`,
  resolve: (name) =>
    resolvePageComponent(
      `./Pages/${name}.vue`,
      import.meta.glob('./Pages/**/*.vue'),
    ),
  setup({ el, App, props, plugin }) {
    const vueApp = createApp({ render: () => h(App, props) });
    vueApp.use(plugin).use(ZiggyVue);
    vueApp.mount(el);

    // Подключаем старые jQuery-скрипты после монтирования
    const pluginScript = document.createElement('script');
    pluginScript.src = '/assets/js/plugins.js';
    pluginScript.async = false;
    document.body.appendChild(pluginScript);

    const mainScript = document.createElement('script');
    mainScript.src = '/assets/js/main.js';
    mainScript.async = false;
    document.body.appendChild(mainScript);
  },
  progress: {
    color: '#4B5563',
  },
});
