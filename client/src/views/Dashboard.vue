<template>
  <div>
    <nav class="navbar navbar-expand-md navbar-dark bg-dark">
      <a class="navbar-brand" href="/auth/login">Blog 控制台</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <router-link :to="{ name: 'Categories' }" class="nav-item nav-link"
            >管理文章分類
          </router-link>
          <router-link :to="{ name: 'Archives' }" class="nav-item nav-link">
            文章列表
          </router-link>
          <a href="/auth/signup" class="nav-item nav-link">註冊新管理者</a>
          <a class="nav-link" href="/auth/signout">登出</a>
        </div>
      </div>
    </nav>
    <div class="main container-fluid my-4">
      <router-view></router-view>
    </div>
    <footer class="mt-5 py-3 bg-light text-secondary text-center">
      後台管理系統
    </footer>
  </div>
</template>

<script>
export default {
  name: "Deshboard",
};
</script>
