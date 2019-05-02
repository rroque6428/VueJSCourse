import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource';

import VueRouter from 'vue-router';
import { routes } from './routes.js';

Vue.config.productionTip = false;

// HTTP Requests via vue-resource (Axios is the alternative)
Vue.use(VueResource);
Vue.http.options.root = 'https://vuejs-proj-a1b02.firebaseio.com/data.json';

// Router plugin
Vue.use(VueRouter);
const router = new VueRouter({
  routes: routes
});

// Global object for Common acess by all components
export const eventBus = new Vue({
  data() {
    return {
      selectedServer: null
    }
  },
  methods: {
    selectServer(server) {
      this.$emit("serverWasSelected", server);
      this.selectedServer = server;
    }
  }
});

// Global Directive
Vue.directive('highlight', {
  bind(el, binding) {
    // el.style.backgroundColor = 'green';
    // el.style.backgroundColor = binding.value;
    let delay = 0;

    if (binding.modifiers['delayed']) {
      // eslint-disable-next-line
      console.log(binding.modifiers);
      delay = 3000;
    }

    if (binding.modifiers['blink']) {
      delay = 2000;
    } else {
      setTimeout(() => {
        if (binding.arg == 'background') {
          el.style.backgroundColor = binding.value;
        } else {
          el.style.color = binding.value;
        }
      }, delay);
    }
  }
});

Vue.filter('countLetters', (s) => {
  if (s) {
    return `${s} (${s.length})`;
  }
  return ''
});

new Vue({
  router: router,
  render: h => h(App)
}).$mount('#app');
