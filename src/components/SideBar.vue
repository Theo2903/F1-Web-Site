<template>
  <div class="flex top-0 justify-center m-2 fixed text-white w-full pr-10 pt-2">
    <img class="h-8 w-18" src="@/assets/formula-1-logo.png" alt="">
  </div>
  <div v-if="is_sidebar_open == false " class="flex top-0 justify-start m-6 fixed text-black w-full pr-12 pt-2">
      <i @mouseover="is_sidebar_open = true" class="fas fa-bars fa-2x"></i>
  </div>
  <aside id="view" v-if="is_sidebar_open == true">
      <div class="flex">
        <!-- <router-link to="/"> -->
          <img class="ml-6 mt-6 h-8 w-18" src="@/assets/formula-1-logo.png" alt="">
        <!-- </router-link> -->
        <div class="mt-6 ml-24">
          <ArrowLeftItem @close_sidebar="is_sidebar_open = false" />
        </div>
      </div>
    <div class="ml-6 mt-12">
      <div class="flex">
        <DriverItem class="mb-6 h-8 w-18"/> 
        <router-link to="/drivers">
          <p class="ml-10">Les pilotes</p>
        </router-link>
      </div>
      <div class="flex">
        <TeamItem class="mb-6 h-8 w-18"/>
        <router-link to="/team">
          <p class="ml-7">Les équipes</p>
        </router-link>
      </div>
      <div class="flex"> 
        <CalendarItem class="mb-6 h-8 w-18"/>
        <router-link to="/schedule">
          <p class="ml-10">Le programme</p>
        </router-link>
      </div> 
    </div>
  </aside>
</template>

<script>
import DriverItem from '@/components/Items/DriverItem.vue'
import TeamItem from '@/components/Items/TeamItem.vue'
import CalendarItem from '@/components/Items/CalendarItem.vue'
import ArrowLeftItem from '@/components/Items/ArrowLeftItem.vue'

export default {

  components: {
    DriverItem,
    TeamItem,
    CalendarItem,
    ArrowLeftItem
  },

  data:()=>({
    is_sidebar_open: false
  }),

  methods: {
    open_nav () {
      console.log("test")
      console.log(this.is_sidebar_open)

    }
  }
}

</script>