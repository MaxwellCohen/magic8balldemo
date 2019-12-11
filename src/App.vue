<template>
  <div id="app">
    <b-navbar toggleable="lg" type="dark" variant="info">
      <router-link to="/">
        <b-navbar-brand>Magic 8 Ball</b-navbar-brand>
      </router-link>

            <router-link to="/edit">Edit</router-link>
    </b-navbar>
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Magic8BallPage from "./views/magic8ballpage.vue"; // @ is an alias to /src

import { NavPlugin } from "bootstrap-vue";
import { CardPlugin } from 'bootstrap-vue'
Vue.use(CardPlugin)
Vue.use(NavPlugin);

@Component({
  components: {
    Magic8BallPage
  }
})
export default class Home extends Vue {}
</script>

<style lang="scss" >
@import "node_modules/bootstrap/scss/bootstrap";
@import "node_modules/bootstrap-vue/src/index.scss";
</style>
