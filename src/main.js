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

new Vue({
  render: h => h(App),
}).$mount('#app');
