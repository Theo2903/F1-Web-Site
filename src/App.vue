<template>
  <NavBar/>
  <div class="flex top-0 justify-end m-2 fixed bg-transparent text-white w-full pr-10 pt-2">
    <i class="fas fa-bars fa-2x"></i>
  </div>
</template>

<script>
import NavBar from '@/components/NavbarComp.vue'

export default {
  components: {
    NavBar
  }
}

</script>

<style>
@import url("https://use.fontawesome.com/releases/v5.9.0/css/all.css");

</style>
