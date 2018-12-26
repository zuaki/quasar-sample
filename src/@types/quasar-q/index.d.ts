import Vue from "vue";

declare module "../../../node_modules/vue/types/vue" {
  interface Vue {
    $q: any;
  }
}
