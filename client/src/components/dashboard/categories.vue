<template>
  <div>
    <loading
      loader="dots"
      :active.sync="isLoading"
      :can-cancel="false"
      :is-full-page="true"
      :background-color="loadingbgColor"
      :color="loadingColor"
    ></loading>
    <div class="row justify-content-center">
      <div class="col-md-6">
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
        <table class="table mb-3">
          <thead>
            <tr>
              <th>名稱</th>
              <th>路徑</th>
              <th width="80"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in categories" :key="item.id">
              <td class="align-middle">{{ item.name }}</td>
              <td>
                <input
                  type="text"
                  class="form-control form-control-sm"
                  :value="item.path"
                />
              </td>
              <td class="align-middle">
                <form @submit.prevent="deleteCategory(item.id)">
                  <button type="submit" class="btn btn-outline-danger btn-sm">
                    刪除
                  </button>
                </form>
              </td>
            </tr>
          </tbody>
        </table>
        <ValidationObserver v-slot="{ invalid }" class="form-bg">
          <form @submit.prevent="createCategory">
            <table class="table">
              <tr>
                <td class="align-middle"><b>新增</b></td>
                <td>
                  <label for="name">分類名稱</label>
                  <ValidationProvider
                    rules="required"
                    name="名稱"
                    v-slot="{ errors }"
                  >
                    <input
                      type="text"
                      class="form-control create-input"
                      v-model="formData.name"
                      placeholder="請輸入分類名稱"
                    />
                    <div class="text-danger pt-1">{{ errors[0] }}</div>
                  </ValidationProvider>
                </td>
                <td colspan="2">
                  <label for="path">路徑</label>
                  <ValidationProvider
                    rules="required"
                    name="路徑"
                    v-slot="{ errors }"
                  >
                    <input
                      type="text"
                      class="form-control create-input"
                      v-model="formData.path"
                      placeholder="請輸入分類路徑"
                    />
                    <div class="text-danger pt-1">{{ errors[0] }}</div>
                  </ValidationProvider>
                </td>
              </tr>
            </table>

            <div class="text-right pb-3 pr-3">
              <button type="submit" class="btn btn-primary" :disabled="invalid">
                新增分類
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
  name: "Categories",
  metaInfo: {
    title: "管理文章分類",
  },
  data() {
    return {
      categories: {},
      formData: {
        name: "",
        path: "",
      },
      msg: "",
      success: true,
      isLoading: false,
      loadingbgColor: "#fff",
      loadingColor: "#000",
    };
  },
  methods: {
    getCategories() {
      this.isLoading = true;
      const vm = this;
      const api = `/api/dashboard/categories`;
      this.$http
        .get(api)
        .then((response) => {
          vm.categories = response.data.category;
          this.isLoading = false;
        })
        .catch((err) => {
          this.error = err.message;
        });
    },
    createCategory() {
      const vm = this;
      const api = `/api/dashboard/categories/create`;
      const order = vm.formData;
      vm.isLoading = true;
      this.$http.post(api, { data: order }).then((response) => {
        console.log("已建立:", response);
        if (response.data.success) {
          $(".create-input").val("");
          this.getCategories();
        } else {
          $(".create-input").val("");
          vm.msg = response.data.msg;
          vm.success = response.data.success;
          $(".errorModal").modal("show");
          vm.isLoading = false;
        }
      });
    },
    deleteCategory(id) {
      const vm = this;
      const api = `/api/dashboard/categories/delete/${id}`;
      var enter = confirm("確認刪除此分類嗎?");
      if (enter) {
        vm.isLoading = true;
        this.$http.post(api).then((response) => {
          if (response.data.success) {
            vm.msg = response.data.msg;
            vm.success = response.data.success;
            $(".errorModal").modal("show");
            vm.getCategories();
          } else {
            vm.msg = response.data.msg;
            vm.success = response.data.success;
            $(".errorModal").modal("show");
            vm.isLoading = false;
          }
        });
      }
    },
  },
  async created() {
    this.getCategories();
  },
};
</script>

<style>
.form-bg {
  display: block;
  background-color: rgb(255, 240, 226);
}
</style>
