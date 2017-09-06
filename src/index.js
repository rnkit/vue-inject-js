import VueInjectJs from './vue-inject-js.vue'

export default VueInjectJs
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component('vue-inject-js', VueInjectJs);
}
