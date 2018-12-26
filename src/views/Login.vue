<template lang="pug">
#login

  q-card#login-card.shadow-12(color="white" text-color="black")
    q-card-title.card-header
      // Title
      .login-title Login
      div Sign in to your account
    q-card-main.card-body
      // input Login ID
      q-input#name(type="text" v-model="name" placeholder="Login ID" :before="[{icon: `fas fa-user`}]")

      // input Password
      q-input#password(type="password" v-model="password" placeholder="Password" initial-show-password=false :before="[{icon: `fas fa-lock`}]")

      // Error Message
      #error-msg
        span(v-html="errorMessage")

      // Login Button
      .btn-area
        q-btn#login-btn(label="Login" size="md" v-on:click="login()" color="primary")
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Url from "@/constants/Url";
import LoginModel from "@/model/Login";

import Axios, { AxiosResponse } from "axios";
import { AxiosPromise } from "axios";

@Component
export default class Login extends Vue {
  /** ログインID */
  private name: string = "";
  /** パスワード */
  private password: string = "";
  /** エラーメッセージ */
  private errorMessage: string = "";

  /**
   * ログイン処理
   */
  private async login() {
    // ログイン処理をstoreのactionで行うことで、ログイン状態をstoreで保持させる
    // dispatch()は非同期処理なので、ログイン結果をもらう場合は非同期処理の完了を待機する必要がある
    const loginModel: LoginModel = new LoginModel(this.name, this.password);
    const loginResult = await this.$store.dispatch("login", { axios: this.$axios, params: loginModel });

    // TODO ログイン結果に応じて処理を行う(例えばログイン失敗メッセージを表示するとか)
    if (!loginResult) {
      this.errorMessage = "login failure. <br> loginId or password incorrect.";
      return;
    }

    // 次画面へリダイレクト
    this.$router.push(Url.dashboard);
  }
}
</script>

<style scoped lang="stylus">
#login {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background: radial-gradient(#999, #445);

  #login-card {
    width: 300px;
    border: 1px solid rgba(0, 0, 0, 0.125);
  }

  .card-header {
    color: #fff;
    background: #343a40 !important;
    font-size: 0.5rem !important;

    .login-title {
      margin-bottom: 0.5rem;
      font-weight: 500;
      line-height: 1.2;
      font-size: 2.5rem;
    }
  }

  .card-body {
    .q-input {
      margin-top: 1rem;
    }

    .q-btn {
      margin-top: 1rem;
    }

    .btn-area {
      text-align: right;
    }
  }

  .login-input {
    padding-bottom: 1rem;
  }
}
</style>
