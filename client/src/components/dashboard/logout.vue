<template>
  <div>
    <div class="row justify-content-center">
      <div class="col-sm-6 text-center">
        <h2>確認登出</h2>
        <a
          href="javascript:;"
          @click.prevent="
            hasHistory() ? $router.go(-1) : $router.push({ name: 'Login' })
          "
          class="btn btn-dark mr-4"
          >取消登出</a
        >
        <a href="javascript:;" @click.prevent="signOut" class="btn btn-danger"
          >確認登出</a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Logout",
  metaInfo: {
    title: "登出",
  },
  data() {
    return {
      session: "",
    };
  },
  methods: {
    hasHistory() {
      return window.history.length > 2;
    },
    signOut() {
      const api = `/api/auth/signout`;
      const vm = this;
      let token = this.$session.get("jwt");
      this.$http
        .post(api, {
          token: token,
        })
        .then((response) => {
          if (response.data.success) {
            this.$session.remove("jwt");
            vm.$router.push({ name: "Login" });
          }
        })
        .catch((err) => {
          this.error = err.message;
        });
    },
  },
};
</script>

<style></style>
