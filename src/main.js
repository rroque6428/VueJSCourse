import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false;

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

new Vue({
  render: h => h(App),
}).$mount('#app');
