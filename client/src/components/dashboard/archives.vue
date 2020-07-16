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
      <div class="col-md-6 mb-3">
        <div class="btn-group w-100">
          <a
            href="javascript:;"
            class="btn btn-outline-secondary w-100 rounded-0
            "
            :class="{ active: status === 'public' }"
            @click.prevent="getList('public', 1)"
            title="已發佈"
            >已發佈</a
          >
          <a
            href="javascript:;"
            class="btn btn-outline-secondary w-100 rounded-0"
            :class="{ active: status === 'draft' }"
            @click.prevent="getList('draft', 1)"
            title="已發佈"
            >草稿</a
          >
          <router-link
            :to="{ name: 'Article', params: { articleId: 'create' } }"
            class="btn btn-primary w-25"
          >
            新增文章
          </router-link>
        </div>
        <div class="card my-3" v-for="item in articles" :key="item.id">
          <h4 class="card-header">
            {{ item.title }}
          </h4>
          <div class="card-body">
            <div class="card-edit" v-html="item.content"></div>
            <div>
              <span class="card-icon bi bi-person-fill"></span>
              <span>
                {{ item.user }}
              </span>
              <span class="card-icon bi bi-calendar3-fill"></span>
              {{ item.update_time | moment("YYYY/MM/DD h:mm:ss") }}
              <span class="card-icon bi bi-tag-fill"></span>
              <span>
                {{ categories[item.category].name }}
              </span>
            </div>
          </div>
          <div class="card-footer p-0 btn-group">
            <a
              href="javascript:;"
              class="btn btn-outline-danger rounded-0 deletePost w-25"
              @click.prevent="deleteArticle(item.id)"
              >刪除</a
            >
            <router-link
              :to="{ name: 'Article', params: { articleId: item.id } }"
              class="btn btn-outline-secondary w-100 rounded-0"
              >編輯</router-link
            >
            <router-link
              :to="{ name: 'detail', params: { wordId: item.id } }"
              class="btn btn-outline-secondary w-100 rounded-0"
              target="_blank"
              >預覽</router-link
            >
          </div>
        </div>
      </div>
      <div class="col-md-12">
        <nav class="my-2" aria-label="Page navigation example">
          <ul class="pagination justify-content-center">
            <li class="page-item" :class="{ disabled: !pagination.hasPrev }">
              <a
                class="page-link"
                href=""
                tabindex="-1"
                @click.prevent="getList(status, pagination.currentPage - 1)"
                >Previous</a
              >
            </li>
            <li
              class="page-item"
              v-for="item in pagination.maxPage"
              :class="{ active: item == pagination.currentPage }"
            >
              <a
                class="page-link"
                href=""
                @click.prevent="getList(status, item + pagination.pageNum)"
              >
                {{ item + pagination.pageNum }}
              </a>
            </li>
            <li class="page-item" :class="{ disabled: !pagination.hasNext }">
              <a
                class="page-link"
                href=""
                @click.prevent="getList(status, pagination.currentPage + 1)"
                >Next</a
              >
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";

export default {
  name: "Articles",
  metaInfo: {
    title: "文章列表",
  },
  data() {
    return {
      categories: {},
      articles: {},
      isLoading: false,
      loadingbgColor: "#fff",
      loadingColor: "#000",
      pagination: {
        maxPage: "",
        currentPage: "",
        pageNum: "",
      },
      status: "public",
      error: "",
      msg: "",
    };
  },
  methods: {
    getList(status = "public", page = 1) {
      const vm = this;
      const api = `/api/dashboard/archives?status=${status}&page=${page}`;
      this.isLoading = true;
      this.$http
        .get(api)
        .then((response) => {
          vm.categories = response.data.categories;
          vm.articles = response.data.articles;
          vm.status = response.data.status;
          //pagination
          vm.pagination = response.data.page;
          vm.pagination.maxPage = response.data.page.currentPage + 4;
          vm.pagination.pageNum = response.data.page.currentPage - 1;
          if (vm.pagination.maxPage > response.data.page.pageTotal) {
            vm.pagination.maxPage = response.data.page.pageTotal;
            vm.pagination.pageNum = vm.pagination.maxPage - 4;
            if (vm.pagination.pageNum <= 0) {
              vm.pagination.pageNum = 0;
            }
          }
          this.isLoading = false;
        })
        .catch((err) => {
          this.error = err.message;
        });
    },
    deleteArticle(id) {
      const vm = this;
      const api = `/api/dashboard/article/delete/${id}`;
      var enter = confirm("確認刪除此文章嗎?");
      if (enter) {
        this.isLoading = true;
        this.$http
          .post(api)
          .then((response) => {
            if (response.data.success) {
              this.getList(vm.status, vm.pagination.currentPage);
            }
          })
          .catch((error) => {
            this.error = err.message;
          });
      }
    },
  },
  async created() {
    this.getList();
  },
};
</script>

<style lang="sass">
.card-icon
  font-size: 15px
  display: inline-block
  vertical-align: middle
.card-edit
  height: 46px
  margin-bottom: 5px;
  overflow: hidden
  white-space: nowrap
  text-overflow: ellipsis
  display: -webkit-box
  -webkit-line-clamp: 2
  -webkit-box-orient: vertical
  white-space: normal
</style>
