<template>
  <div id="app">
    <app-header></app-header>
    <router-view />
    <app-footer></app-footer>
  </div>
</template>

<script>
import appHeader from './components/Header.vue'
import appFooter from './components/Footer.vue'
export default {
  components: {
    'app-header': appHeader,
    'app-footer': appFooter,
  }
}
</script>
