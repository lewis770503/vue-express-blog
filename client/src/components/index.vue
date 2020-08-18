<template>
  <div>
    <loading
      loader="spinner"
      :active.sync="isLoading"
      :can-cancel="false"
      :is-full-page="true"
      :background-color="loadingbgColor"
      :color="loadingColor"
    ></loading>
    <div class="container">
      <div class="row my-5 justify-content-center">
        <div class="col-12">
          <a
            href
            @click.prevent="getList('all')"
            class="btn btn-outline-info mr-2"
            :class="{ active: data.page_category == 'all' }"
          >All</a>
          <a
            href="javascript:;"
            class="btn btn-outline-info mr-2"
            v-for="(item, index) in data.categories"
            v-bind:index="index"
            v-bind:key="item.id"
            :class="{ active: data.page_category === index }"
            @click.prevent="getList(item.id)"
          >{{ item.name }}</a>
        </div>
        <div class="row my-5 justify-content-center col-12">
          <div class="col-md-12">
            <div
              class="card mb-3"
              v-for="(item, index) in data.articles"
              v-bind:index="index"
              v-bind:key="item.id"
            >
              <div class="card-body">
                <router-link :to="{ name: 'detail', params: { wordId: item.id } }">
                  <h2 class="text-primary">{{ item.title }}</h2>
                </router-link>
                <div class="d-flex flex-row text-secondary">
                  <div class="p-2 card-icon">
                    <i class="bi bi-person-fill"></i>
                    {{ item.user }}
                  </div>
                  <div class="p-2 card-icon">
                    <i class="bi bi-calendar3-fill"></i>
                    {{ item.update_time | moment("YYYY/MM/DD h:mm:ss") }}
                  </div>
                  <div class="p-2 card-icon">
                    <i class="bi bi-tag-fill" aria-hidden="true"></i>
                    <a
                      href="javascript:;"
                      class="text-info"
                      @click.prevent="getList(item.category)"
                    >{{ data.categories[item.category].name }}</a>
                  </div>
                </div>
                <!-- <div class="card-edit" v-html="item.content"></div> -->
              </div>
            </div>
            <div v-if="data.dataNull">
              <h2>目前暫無資料</h2>
            </div>
          </div>
        </div>
        <nav class="my-2 col-12" aria-label="Page navigation example" v-if="!data.dataNull">
          <ul class="pagination justify-content-center">
            <li class="page-item" :class="{ disabled: !pagination.hasPrev }">
              <a
                class="page-link"
                href
                tabindex="-1"
                @click.prevent="
                  getList(data.page_category, pagination.currentPage - 1)
                "
              >Previous</a>
            </li>
            <li
              class="page-item"
              v-for="item in pagination.maxPage"
              :class="{ active: item == pagination.currentPage }"
            >
              <a
                class="page-link"
                href
                @click.prevent="
                  getList(data.page_category, item + pagination.pageNum)
                "
              >{{ item + pagination.pageNum }}</a>
            </li>
            <li class="page-item" :class="{ disabled: !pagination.hasNext }">
              <a
                class="page-link"
                href
                @click.prevent="
                  getList(data.page_category, pagination.currentPage + 1)
                "
              >Next</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  metaInfo: {
    title: "首頁",
  },
  metaInfo() {
    return {
      title: this.title,
    };
  },
  data() {
    return {
      data: {},
      pagination: {},
      error: {},
      query: "all",
      title: "",
      isLoading: false,
      loadingbgColor: "#fff",
      loadingColor: "rgb(10, 119, 115)",
    };
  },
  methods: {
    getList(category = "all", page = 1) {
      const vm = this;
      const api = `/api?status=public&category=${category}&page=${page}`;
      this.isLoading = true;
      this.$http
        .get(api)
        .then((response) => {
          vm.data = response.data;
          //title
          let p = response.data.page_category;
          if (response.data.page_category == "all") {
            vm.title = "首頁";
          } else {
            vm.title =
              response.data.categories[response.data.page_category].name;
          }
          //article 是否有資料
          if (response.data.articles.length === 0) {
            vm.data.dataNull = true;
          }
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
  },
  async created() {
    this.query = this.$route.query.category;
    if (this.$route.query.category) {
      this.getList(this.query, 1);
    } else {
      this.getList();
    }
  },
};
</script>

<style lang="sass">
.card-icon i
  font-size: 15px
  display: inline-block
  vertical-align: middle
.card-edit
  height: 50px
  overflow: hidden
  white-space: nowrap
  text-overflow: ellipsis
  display: -webkit-box
  -webkit-line-clamp: 2
  -webkit-box-orient: vertical
  white-space: normal
  img
    max-width: 100%
</style>
