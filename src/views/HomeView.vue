<template>
  <div class="relative flex items-center justify-center h-screen mb-12 overflow-hidden">
    <video id="myVideo" autoplay loop muted class="brightness-50 right-0 bottom-0 min-w-full min-h-full" >
      <source src="../assets/F12022Opening.mp4" />
    </video>
  </div>
  <div>
    <CircuitSlide/>
  </div>
</template>


<script>
import axios from 'axios'
import CircuitSlide from '@/components/CircuitSlide.vue'

export default {

  components: { 
    CircuitSlide
  },

  data: () => ({

  }),

  methods: {


  },

  mounted () {

  }
}
</script>

