<template>
  <NavBar/>
  <div class="flex top-0 justify-end m-2 fixed text-white w-full pr-10 pt-2">
    <i @click="open_nav()" class="fas fa-bars fa-2x"></i>
  </div>
  <div class="flex top-0 justify-center m-2 fixed text-white w-full pr-10 pt-2">
    <img class="h-8 w-18" src="@/assets/formula-1-logo.png" alt="">
  </div>
</template>

<script>
import NavBar from '@/components/SideBar.vue'

export default {

  components: {
    NavBar
  },
  methods: {
    open_nav () {
      console.log('gniaaa')
    }
  }
}

</script>

<style>
@import url("https://use.fontawesome.com/releases/v5.9.0/css/all.css");

</style>
