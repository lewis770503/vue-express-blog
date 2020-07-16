<template>
  <div>
    <!--訊息-->
    <div
      class="modal fade errorModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <p class="h3">{{ msg }}</p>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              關閉
            </button>
          </div>
        </div>
      </div>
    </div>
    <!--訊息 //-->
    <div class="row justify-content-center">
      <div class="col-sm-6">
        <ValidationObserver v-slot="{ invalid }">
          <form @submit.prevent="signin()">
            <div class="form-group">
              <label for="exampleInputEmail1">Email</label>
              <ValidationProvider
                rules="required|email"
                v-slot="{ errors }"
                name="Email"
              >
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  placeholder="請輸入 email"
                  v-model="user.email"
                />
                <div class="text-danger pt-1">{{ errors[0] }}</div>
              </ValidationProvider>
            </div>
            <div class="form-group">
              <label for="password">密碼</label>
              <ValidationProvider
                rules="required"
                v-slot="{ errors }"
                name="密碼"
              >
                <input
                  type="password"
                  class="form-control"
                  id="password"
                  placeholder="請輸入密碼"
                  v-model="user.password"
                />
                <div class="text-danger pt-1">{{ errors[0] }}</div>
              </ValidationProvider>
            </div>
            <div class="text-right mt-3">
              <button type="submit" class="btn btn-primary" :disabled="invalid">
                登入
              </button>
            </div>
          </form>
        </ValidationObserver>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
export default {
  name: "Login",
  metaInfo: {
    title: "登入",
  },
  data() {
    return {
      user: {
        email: "",
        password: "",
      },
      msg: "",
      success: "",
      isLoading: false,
      loadingbgColor: "#fff",
      loadingColor: "#000",
      error: "",
      session: "",
    };
  },
  methods: {
    signin() {
      const api = `/api/auth/login`;
      const vm = this;
      this.$http
        .post(api, vm.user)
        .then((response) => {
          if (response.data.success) {
            this.$session.start();
            this.$session.set("jwt", response.data.token);
            vm.$router.push({ name: "Archives" });
          } else {
            vm.success = response.data.success;
            vm.msg = response.data.msg;
            $(".errorModal").modal("show");
          }
        })
        .catch((err) => {
          this.error = err.message;
        });
    },
    userInsert() {
      this.session = this.$session.get("jwt");
      if (this.session !== undefined) {
        this.$router.push({ name: "Archives" });
      }
    },
  },
  async created() {
    this.userInsert();
  },
};
</script>

<style></style>
