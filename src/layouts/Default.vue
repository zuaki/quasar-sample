<template lang="pug">
#layout-default
  q-layout(view="hHh Lpr lFf")
    q-layout-header#header
      q-toolbar.header(:glossy="false" inverted=false)
        q-btn(flat dense round @click="leftDrawerOpen = !leftDrawerOpen" aria-label="Menu" icon="fas fa-bars")
        q-toolbar-title.text-weight-bold Groupware

    q-layout-drawer#sidebar(v-model="leftDrawerOpen" :width="sidebarWidth")
      q-list(no-border link inset-delimiter dark=true)

        q-card#user-card(color="white" text-color="black")
          q-card-main
            #user-name ユーザー名A
            .text-right
              q-btn(dense label="ログアウト" size="md" @click="logout()" color="grey-4" text-color="black")

        q-list(no-border link inset-delimiter)
          q-item-separator

          q-item(to="/user")
            q-item-side(icon="fas fa-user")
            q-item-main(label="ユーザー")

          q-item(to="/worktime")
            q-item-side(icon="fas fa-user")
            q-item-main(label="勤怠")

    q-page-container
      router-view
</template>

<script lang="ts">
import Quasar from "quasar";
import { Component, Vue } from "vue-property-decorator";
import { AxiosResponse } from "axios";
import Url from "@/constants/Url";
import User from "@/model/User";

@Component
export default class LayoutDefault extends Vue {
  /** デスクトップで表示しているか否か */
  private leftDrawerOpen: any = this.$q.platform.is.desktop;
  /** サイドバーの横幅(px) */
  private sidebarWidth: number = 220;

  /**
   * vue lifecycle created
   */
  private created() {
    this.$router.push(Url.top);
  }

  /**
   * ログアウトしてログインページへ遷移
   */
  private async logout() {
    const logoutResult = await this.$store.commit("logout");
    this.$router.push(Url.root);
  }

  /**
   * viewの表示
   */
  private openURL(url: string): void {
    Quasar.openURL(url);
  }
}
</script>

<style lang="stylus">
@import '../styles/quasar.styl';

#layout-default {
  // header style
  #header {
    height: 55px;
    background-color: #ffffff;

    .q-toolbar {
      color: #ffffff !important;
      background: #343a40 !important;
    }

    .q-toolbar-title {
      font-size: 1.2rem;
    }
  }

  // sidebar style
  #sidebar {
    background-color: #464c50 !important;

    .q-item-side {
      color: $text-base-white;
    }

    #user-card {
      font-size: 1.1rem;
      width: 80%;
      margin: auto;
      margin-top: 0.5rem;

      #user-name {
        margin-bottom: 0.8rem;
      }
    }
  }
}
</style>
