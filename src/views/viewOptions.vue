<template>
  <div class="mt-3">
    <b-card-group  class="row">
      <div class=" col-lg-3 col-md-4 col-sm-12 mt-3" v-for="(item, index) in answerList" v-bind:key="index">
        <b-card bg-variant="light" class="text-center w-100">
          <b-card-text>{{ item.text }}</b-card-text>
        </b-card>
      </div>
    </b-card-group>
  </div>
</template>
<script lang="ts">
import { mapActions } from "vuex";
import { Action } from "vuex-class";
import { Component, Prop, Vue } from "vue-property-decorator";
import * as types from "./components/vuex/types";
import { CardPlugin } from "bootstrap-vue";
Vue.use(CardPlugin);

@Component({})
export default class magic8Ball extends Vue {
  private answerList: types.answer[] = [];
  @Action("getAllAnswers", { namespace: "magic8ball" })
  private getAllAnswers: any;

  mounted() {
    this.getAllAnswers().then((v: types.answer[]) => (this.answerList = v));
  }
}
</script>

<style lang="scss">
</style>