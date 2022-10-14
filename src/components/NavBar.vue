<template>
  <div class="flex top-0 justify-center m-6 fixed text-white w-full pr-12 pt-2">
    <div>
      <router-link to="/drivers">
        <p class="">Drivers</p>
      </router-link>
    </div>
    <div class="pr-20 pl-20">
      <router-link to="/">
        <img class="h-8 w-18" src="@/assets/formula-1-logo.png" alt="">
      </router-link>
    </div>
    <div>
      <router-link to="/teams">
        <p class="">Teams</p>
      </router-link>
    </div>
  </div>
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
