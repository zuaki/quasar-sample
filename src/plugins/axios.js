"use strict";

import Vue from "vue";
import axios from "axios";

// Full config:  https://github.com/axios/axios#request-config
// axios.defaults.baseURL = process.env.baseURL || process.env.apiUrl || '';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

let config = {
  // baseURL: process.env.baseURL || process.env.apiUrl || ""
  // timeout: 60 * 1000, // Timeout
  // withCredentials: true, // Check cross-site Access-Control
};

const _axios = axios.create(config);

/**
 * vue-axios-plugin への追加コード
 * ※その他、このjsでVueに追加した$axiosが使えるように、定義ファイルも追加しています
 *   参照：/src/@types/axios/index.d.ts
 */
// start
import setting from "../../public/setting.json";

// axiosのデフォルト設定を追加
_axios.defaults.baseURL = setting.url.restUrl;
_axios.defaults.headers.post["Content-Type"] = "application/json;charset=utf-8";

// 開発時のCORS対策
// REST APIモックサーバーをlocalhost:3000等で起動していると、UI側がlosalhost:8080で起動しているので
// ドメインが異なるという扱いになり、CORSでエラーになるため対応した
if (setting.dev === true) {
  _axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
}
// end

_axios.interceptors.request.use(
  function(config) {
    // Do something before request is sent
    return config;
  },
  function(error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
_axios.interceptors.response.use(
  function(response) {
    // Do something with response data
    return response;
  },
  function(error) {
    // Do something with response error
    return Promise.reject(error);
  }
);

Plugin.install = function(Vue, options) {
  Vue.axios = _axios;
  window.axios = _axios;
  Object.defineProperties(Vue.prototype, {
    axios: {
      get() {
        return _axios;
      }
    },
    $axios: {
      get() {
        return _axios;
      }
    }
  });
};

Vue.use(Plugin);

export default Plugin;
