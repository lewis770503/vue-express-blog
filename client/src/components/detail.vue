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
    <nav class="breadcrumb p-3">
      <router-link :to="{ name: 'Index' }" class="breadcrumb-item text-primary"
        >Home</router-link
      >
      <router-link
        class="breadcrumb-item text-primary"
        :to="{ name: 'Index', query: { category: article.category } }"
      >
        {{ categories.name }}
      </router-link>
      <span class="breadcrumb-item active">
        {{ article.title }}
      </span>
    </nav>
    <div class="container">
      <div class="hex-blog">
        <div class="row justify-content-center">
          <div class="col-md-9">
            <h1 class="text-primary">
              {{ article.title }}
            </h1>
            <div class="d-flex flex-row text-secondary">
              <div class="p-2 card-icon">
                <i class="bi bi-person-fill" aria-hidden="true"></i>
                {{ article.user }}
              </div>
              <div class="p-2 card-icon">
                <i class="bi bi-calendar3-fill"></i>
                {{ article.update_time | moment("YYYY/MM/DD h:mm:ss") }}
              </div>
              <div class="p-2 card-icon">
                <i class="bi bi-tag-fill" aria-hidden="true"></i>
                <router-link
                  :to="{ name: 'Index', query: { category: article.category } }"
                  class="text-info"
                >
                  {{ categories.name }}
                </router-link>
              </div>
            </div>
            <article class="text-dark post mb-4">
              <div v-html="article.content"></div>
            </article>
            <div class="pt-3 pb-5 text-center">
              <a
                class="btn btn-primary"
                href=""
                @click.prevent="goBack()"
                role="button"
                >回上一頁</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  metaInfo: {
    title: "內容頁",
  },
  metaInfo() {
    return {
      title: this.title,
    };
  },
  data() {
    return {
      categories: {},
      article: {},
      error: {},
      wordId: "",
      title: "",
      isLoading: false,
      loadingbgColor: "#fff",
      loadingColor: "rgb(10, 119, 115)",
    };
  },
  methods: {
    getData(id) {
      const vm = this;
      const api = `/api/post/${id}`;
      this.isLoading = true;
      this.$http
        .get(api)
        .then((response) => {
          vm.article = response.data.article;
          vm.categories.name =
            response.data.categories[response.data.article.category].name;
          vm.title = response.data.article.title;
          this.isLoading = false;
        })
        .catch((err) => {
          this.error = err.message;
        });
    },
    goBack() {
      this.$router.go(-1);
    },
  },
  async created() {
    this.wordId = this.$route.params.wordId;
    this.getData(this.wordId);
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
</style>
