<template lang="pug">
#user-setting
  #setting.card.shadow-lg
    .card-header.bg-dark
    .card-body
      User
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import User from "@/components/User.vue";

@Component({
  components: {
    User,
  },
})
export default class UserSetting extends Vue {

}
</script>

<style scoped lang="stylus">
@import '../styles/common.styl';

#setting {
  common-contents-half();
}
</style>
