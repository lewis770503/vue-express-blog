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
    <ValidationObserver v-slot="{ invalid }">
      <form
        class="row justify-content-center"
        @submit.prevent="createArticle(articleId)"
      >
        <div class="col-md-6">
          <label for="title">請輸入標題</label>
          <ValidationProvider
            rules="required"
            name="標題名稱"
            v-slot="{ errors }"
          >
            <input
              type="text"
              class="form-control"
              placeholder="標題"
              v-model="articleData.title"
            />
            <div class="text-danger pt-1">{{ errors[0] }}</div>
          </ValidationProvider>
          <hr />
          <ValidationProvider rules="required" name="內容" v-slot="{ errors }">
            <ckeditor
              :editor="editor"
              v-model="articleData.content"
              :config="editorConfig"
            ></ckeditor>
            <div class="text-danger pt-1">{{ errors[0] }}</div>
          </ValidationProvider>
        </div>
        <div class="col-md-3">
          <div class="card mb-3">
            <h6 class="card-header">分類</h6>
            <div class="card-body">
              <div class="form-check" v-for="item in categories" :key="item.id">
                <ValidationProvider
                  rules="required"
                  name="category"
                  v-slot="{ errors }"
                >
                  <label class="form-check-label">
                    <input
                      class="form-check-input"
                      type="radio"
                      :value="item.id"
                      v-model="articleData.category"
                    />
                    {{ item.name }}
                  </label>
                  <div class="text-danger pt-1">{{ errors[0] }}</div>
                </ValidationProvider>
              </div>
            </div>
          </div>
          <div class="card mb-3">
            <h6 class="card-header">是否公開</h6>
            <div class="card-body">
              <div class="btn-group btn-group-toggle w-100">
                <div class="form-check">
                  <ValidationProvider
                    rules="required"
                    name="status"
                    v-slot="{ errors }"
                  >
                    <label class="form-check-label">
                      <input
                        type="radio"
                        value="draft"
                        v-model="articleData.status"
                      />
                      草稿
                    </label>
                  </ValidationProvider>
                </div>
                <div class="form-check">
                  <ValidationProvider
                    rules="required"
                    name="status"
                    v-slot="{ errors }"
                  >
                    <label class="form-check-label">
                      <input
                        type="radio"
                        value="public"
                        v-model="articleData.status"
                      />
                      公開
                    </label>
                  </ValidationProvider>
                </div>
              </div>
            </div>
          </div>

          <div class="btn-group w-100 mb-3">
            <button
              type="submit"
              :disabled="invalid"
              class="btn btn-outline-primary w-100"
            >
              儲存
            </button>
          </div>
          <div class="btn-group w-100">
            <a
              href="/dashboard/archives"
              class="btn btn-outline-primary w-100"
              title="回列表"
              >回列表</a
            >
          </div>
        </div>
      </form>
    </ValidationObserver>
  </div>
</template>
<script>
import $ from "jquery";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import "@ckeditor/ckeditor5-build-classic/build/translations/zh";

export default {
  name: "Article",
  metaInfo: {
    title: "管理文章",
  },
  data() {
    return {
      editor: ClassicEditor,
      picked: "",
      articleData: {
        title: "",
        status: "",
        content: "",
        category: "",
      },
      editorConfig: {
        language: "zh",
      },
      categories: {},
      articleId: "",
      msg: "",
      success: "",
      isLoading: false,
      loadingbgColor: "#fff",
      loadingColor: "#000",
    };
  },
  methods: {
    getArticle(id) {
      let vm = this,
        api = "";
      if (id == "create") {
        api = `/api/dashboard/article/create`;
      } else {
        api = `/api/dashboard/article/${id}`;
      }
      this.$http
        .get(api)
        .then((response) => {
          vm.categories = response.data.categories;
          if (!response.data.success) {
            vm.msg = response.data.msg;
            $(".errorModal").modal("show");
          }
          if (response.data.article !== undefined) {
            vm.articleData = response.data.article;
          }
          this.isLoading = false;
        })
        .catch((err) => {
          this.error = err.message;
        });
    },
    createArticle(id) {
      let vm = this,
        api = "";
      if (id === "create") {
        api = `/api/dashboard/article/create`;
      } else {
        api = `/api/dashboard/article/update/${id}`;
      }
      const order = vm.articleData;
      vm.isLoading = true;
      this.$http.post(api, { data: order }).then((response) => {
        if (response.data.success) {
          this.$router.push({
            name: "Article",
            params: { articleId: response.data.articleId },
          });
          this.articleId = response.data.articleId;
          this.getArticle(this.articleId);
          vm.isLoading = false;
        }
      });
    },
  },
  async created() {
    this.articleId = this.$route.params.articleId;
    this.getArticle(this.articleId);
  },
};
</script>

<style>
.ck-editor__editable {
  min-height: 300px;
}
</style>
