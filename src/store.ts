import Vue from "vue";
import Vuex from "vuex";
import { AxiosResponse } from "axios";
import Url from "@/constants/Url";
import LoginModel from "@/model/Login";
import { AxiosInstance } from "axios";
import User from "@/model/User";
import createPersistedState from "vuex-persistedstate"; // storeの情報保存先を変更するプラグイン

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loggedIn: false,
    user: null
  },
  // stateの値を変更するだけのものはmutationsで行う
  // mutationsは同期処理のみ
  mutations: {
    login: state => {
      state.loggedIn = true;
    },
    logout: state => {
      state.loggedIn = false;
    },
    setUser: (state, user) => {
      state.user = user;
    }
  },
  // ビジネスロジックがあるものはactionで行う
  // actionは非同期処理可能
  actions: {
    login: async (context: any, payload: any): Promise<any> => {
      try {
        /*
        const axios: AxiosInstance = payload.axios;
        const loginModel: LoginModel = payload.params;

        // ログインが成功するとユーザーIDが返ってくる
        const loginReseponse: AxiosResponse<any> = await axios.post(
          `${Url.restLogin}`,
          JSON.stringify(loginModel)
        );

        // 更にユーザーの情報を取得し、取得できればログインできたとみなす
        const userResponse: AxiosResponse<User> = await axios.get(
          `${Url.restUser}/${loginReseponse.data.id}`
        );
        */
        context.commit("login");
        //context.commit("setUser", userResponse.data);
      } catch (error) {
        console.log("login error");
        console.log(error);
        return false;
      }

      return true;
    }
  },
  // ログイン済みか否かをセッションに持たせる
  plugins: [createPersistedState({ storage: window.sessionStorage })]
});
