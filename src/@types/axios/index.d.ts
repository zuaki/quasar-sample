import Vue from "vue";
import { AxiosInstance } from "axios";

/**
 * axiosプラグイン(/src/plugin/axios.js)でVueのプロパティとして生やした$axios
 * をtypescriptで使えるように型定義する
 */
declare module "../../../node_modules/vue/types/vue" {
  interface Vue {
    $axios: AxiosInstance;
  }
}
