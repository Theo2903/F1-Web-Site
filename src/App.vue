<template>
    <SideBar/>
  <router-view/>
</template>

<script>
import SideBar from '@/components/SideBar.vue'

export default {

  components: {
    SideBar
  },


  data:()=>({
    is_sidebar_open: false
  }),

  methods: {
    open_nav () {
      console.log('test')
      console.log(this.is_sidebar_open)
    }
  }
}

</script>

<style>
@import url("https://use.fontawesome.com/releases/v5.9.0/css/all.css");

</style>
