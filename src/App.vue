<template>
    <NavBar/>
  <router-view/>
</template>

<script>
import NavBar from '@/components/NavBar.vue'

export default {

  components: {
    NavBar
  },
}

</script>

<style>
@import url("https://use.fontawesome.com/releases/v5.9.0/css/all.css");
</style>
