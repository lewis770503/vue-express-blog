<template>
  <div>
    <nav class="navbar navbar-expand-md navbar-dark bg-dark">
      <router-link :to="{ name: 'Login' }" class="navbar-brand">Blog 控制台</router-link>
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
          <router-link :to="{ name: 'Index' }" class="nav-item nav-link">回前台</router-link>
          <router-link :to="{ name: 'Categories' }" class="nav-item nav-link">管理文章分類</router-link>
          <router-link :to="{ name: 'Archives' }" class="nav-item nav-link">文章列表</router-link>

          <!-- <a href="/auth/signup" class="nav-item nav-link">註冊新管理者</a> -->
          <router-link :to="{ name: 'Logout' }" class="nav-item nav-link">登出</router-link>
        </div>
      </div>
    </nav>
    <div class="main container-fluid my-4">
      <router-view></router-view>
    </div>
    <footer class="mt-5 py-3 bg-light text-secondary text-center">後台管理系統</footer>
  </div>
</template>

<script>
export default {
  name: "Deshboard",
};
</script>
