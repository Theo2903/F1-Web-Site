<template>
  <!-- Intro Video -->
    <video id="myVideo" autoplay loop muted class="brightness-50 right-0 bottom-0 min-w-full min-h-full" >
      <source src="../assets/F12022Opening.mp4" />
    </video>
    <div class="absolute fixed bottom-0 right-0 min-w-full min-h-full ">
      <NavBar/>
    </div>
  <div>
      <h1 class="flex justify-center font-bold text-5xl leading-normal mt-2 mb-2">Schedule of the 2022 Season</h1>
      <CircuitSlide/>
  </div>
</template>


<script>
import CircuitSlide from '@/components/CircuitSlide.vue'
import NavBar from '@/components/NavBar.vue'


export default {

  components: { 
    CircuitSlide,
    NavBar
  },

}
</script>
