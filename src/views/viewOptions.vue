<template>
  <div class="mt-3">
    <b-card-group deck>
      <div bg-variant="primary"  v-for="(item, index) in answerList" v-bind:key="index">
        <b-card bg-variant="light" class="text-center">
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
