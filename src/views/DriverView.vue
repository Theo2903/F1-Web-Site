<template>
  <div class="schedule">
    <p class="hidden">{{ driver_id }}</p>
    <div>
      <vueper-slides class="mt-20"
      fixed-height="400px"
      :visible-slides="4"
      slide-multiple
      :gap="2"
      :slide-ratio="1 / 4"
      :dragging-distance="700"
      :breakpoints="{ 800: { visibleSlides: 2, slideMultiple: 2 } }">
        <vueper-slide v-for="(slide, i) in slides" :key="i" :image="slide.image" @click="show_race_informations(slide)">
        </vueper-slide>
      </vueper-slides>
    </div>
  </div>
  <div class="flex justify-center">
    <div v-for="race in schedule_info" :key="race.id">
      <img v-if="driver_id == 1" src="@\assets\Driver\Max_Verstappen_Driver.png">
      <img v-if="driver_id == 2" src="@\assets\Driver\Sergio_Perez_Driver.png">
      <img v-if="driver_id == 3" src="@\assets\Driver\Charles_Leclerc_Driver.png">
      <img v-if="driver_id == 4" src="@\assets\Driver\George_Russell_Driver.png">
      <img v-if="driver_id == 5" src="@\assets\Driver\Carlos_Sainz_Driver.png">
      <img v-if="driver_id == 6" src="@\assets\Driver\Lewis_Hamilton_Driver.png">
      <img v-if="driver_id == 7" src="@\assets\Driver\Lando_Norris_Driver.png">
      <img v-if="driver_id == 8" src="@\assets\Driver\Esteban_Ocon_Driver.png">
      <img v-if="driver_id == 9" src="@\assets\Driver\Fernando_Alonso_Driver.png">
      <img v-if="driver_id == 10" src="@\assets\Driver\Valterri_Bottas_Driver.png">
      <img v-if="driver_id == 11" src="@\assets\Driver\Sebastian_Vettel_Driver.png">
      <img v-if="driver_id == 12" src="@\assets\Driver\Daniel_Ricciardo_Driver.png">
      <img v-if="driver_id == 13" src="@\assets\Driver\Pierre_Gasly_Driver.png">
      <img v-if="driver_id == 14" src="@\assets\Driver\Kevin_Magnussen_Driver.png">
      <img v-if="driver_id == 15" src="@\assets\Driver\Lance_Stroll_Driver.png">
      <img v-if="driver_id == 16" src="@\assets\Driver\Mick_Schumacher_Driver.png">
      <img v-if="driver_id == 17" src="@\assets\Driver\Yuki_Tsunoda_Driver.png">
      <img v-if="driver_id == 18" src="@\assets\Driver\Zhou_Guanyu_Driver.png">
      <img v-if="driver_id == 19" src="@\assets\Driver\Nicholas_Latifi_Driver.png">
      <img v-if="driver_id == 20" src="@\assets\Driver\Nyck_De_Vries_Driver.png">
      <img v-if="driver_id == 21" src="@\assets\Driver\Nico_Hulkenberg_Driver.png">

        <!-- Info -->
        <a> Info race </a><br>
        <a>{{ race.raceName }}</a><br>
        <a>{{ race.round }}</a><br>
        <!-- Location -->
        <a>Location</a><br>
        <a>{{ race.Circuit.Location.lat }}</a><br>
        <a>{{ race.Circuit.Location.long }}</a><br>
        <a>{{ race.Circuit.Location.locality }}</a><br>
        <!-- First Practice -->
        <a>First Practice</a><br>
        <a>{{ race.FirstPractice.date }} &nbsp;</a>
        <a>{{ race.FirstPractice.time }}</a><br>
        <!-- Second Practice -->
        <a>Second Practice</a><br>
        <a>{{ race.SecondPractice.date }} &nbsp;</a>
        <a>{{ race.SecondPractice.time }}</a><br>
        <!-- Third Practice -->
        <a>Third Practice</a><br>
        <a>{{ race.ThirdPractice.date }} &nbsp;</a>
        <a>{{ race.ThirdPractice.time }}</a><br>
        <!-- Qualifying -->
        <a>Qualifying</a><br>
        <a>{{ race.Qualifying.date }} &nbsp;</a>
        <a>{{ race.Qualifying.time }}</a><br>
        <!-- Race -->
        <a>Race</a><br>
        <a>{{ race.date }} &nbsp;</a>
        <a>{{ race.time }}</a><br>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

export default {

  components: { 
    VueperSlides,
    VueperSlide
  },

  data: () => ({
    api_url: 'http://ergast.com/api/f1/',
    api_schedule: 'current.json',
    schedules_list: [],
    api_schedule2: 'current/',
    schedule_info: [],
    race_id: null,
 
  }),

  methods: {
    show_race_informations(slide) {
      this.race_id = slide.id
      axios.get(this.api_url + this.api_schedule2 + this.race_id  + '.json').then((response) => {
        this.schedule_info = response.data.MRData.RaceTable.Races
      })
    },

  },

  mounted () {
    axios.get(this.api_url + this.api_schedule).then((response) => {
      this.schedules_list = response.data.MRData.RaceTable.Races
    })
  }
}
</script>
