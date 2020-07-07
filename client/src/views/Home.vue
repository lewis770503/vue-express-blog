<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark" style="background-color: #0a7773;">
      <a class="navbar-brand" href="/">
        <i class="fa fa-address-book" aria-hidden="true"></i>
        部落格
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
    </nav>
    <div class="container">
      <Index/>
    </div>
    <footer class="bg-light text-muted py-5">
    <div class="container">
      <ul class="list-unstyled d-flex justify-content-between">
        <li class="">© Copright 2020 部落格</li>
        <li class="ml-auto"><a class="text-info mr-1" href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a> <a
            class="text-info mr-1" href="#"><i class="fa fa-facebook-square" aria-hidden="true"></i></a> <a href=""
            class="text-info"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
      </ul>
    </div>
  </footer>
  </div>
</template>

<script>
// @ is an alias to /src
import Index from '@/components/index.vue'

export default {
  name: 'Home',
  components: {
    Index
  }
}
</script>

<style scoped lang="sass">
.breadcrumb
  background-color: transparent

.text-primary
  color: #00cc99 !important

.post
  line-height: 1.8
</style>
