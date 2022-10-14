<template>
  <div class="schedule">
    <p class="hidden">{{ race_id }}</p>
    <div>
      <vueper-slides class="mt-20" fixed-height="400px" :visible-slides="4" slide-multiple :gap="2" :slide-ratio="1 / 4" :dragging-distance="700" :breakpoints="{ 800: { visibleSlides: 2, slideMultiple: 2 } }">
        <vueper-slide v-for="(slide, i) in slides" :key="i" :image="slide.image" @click="show_race_informations(slide)">
        </vueper-slide>
      </vueper-slides>
    </div>
  </div>
  <div class="flex justify-center">
    <div v-for="race in schedule_info" :key="race.id">
      <a class="font-bold text-3xl">{{ race.raceName }}</a>
      <div class="flex p-4">
        <img v-if="race_id == 1" src="@/assets/Circuit/CircuitInfo/Bahrain_info_circuit.png">
        <img v-if="race_id == 2" src="@/assets/Circuit/CircuitInfo/Jeddah_info_circuit.png">
        <img v-if="race_id == 3" src="@/assets/Circuit/CircuitInfo/Albert_Park_info_circuit.png">
        <img v-if="race_id == 4" src="@/assets/Circuit/CircuitInfo/Autodromo_Enzo_e_Dino_Ferrari_info_circuit.png">
        <img v-if="race_id == 5" src="@/assets/Circuit/CircuitInfo/Miami_International_info_circuit.png">
        <img v-if="race_id == 6" src="@/assets/Circuit/CircuitInfo/Barcelona_info_circuit.png">
        <img v-if="race_id == 7" src="@/assets/Circuit/CircuitInfo/Monaco_info_circuit.png">
        <img v-if="race_id == 8" src="@/assets/Circuit/CircuitInfo/Baku_info_circuit.png">
        <img v-if="race_id == 9" src="@/assets/Circuit/CircuitInfo/Gilles_Villeneuve_info_circuit.png">
        <img v-if="race_id == 10" src="@/assets/Circuit/CircuitInfo/Silverstone_info_circuit.png">
        <img v-if="race_id == 11" src="@/assets/Circuit/CircuitInfo/RedBull_Ring_info_circuit.png">
        <img v-if="race_id == 12" src="@/assets/Circuit/CircuitInfo/Paul_Ricard_info_circuit.png">
        <img v-if="race_id == 13" src="@/assets/Circuit/CircuitInfo/Hungaroring_info_circuit.png">
        <img v-if="race_id == 14" src="@/assets/Circuit/CircuitInfo/Spa_info_circuit.png">
        <img v-if="race_id == 15" src="@/assets/Circuit/CircuitInfo/Zandvoort_info_circuit.png">
        <img v-if="race_id == 16" src="@/assets/Circuit/CircuitInfo/Monza_info_circuit.png">
        <img v-if="race_id == 17" src="@/assets/Circuit/CircuitInfo/Marina_Bay_info_circuit.png">
        <img v-if="race_id == 18" src="@/assets/Circuit/CircuitInfo/Suzuka_info_circuit.png">
        <img v-if="race_id == 19" src="@/assets/Circuit/CircuitInfo/America_info_circuit.png">
        <img v-if="race_id == 20" src="@/assets/Circuit/CircuitInfo/Autodromo_info_circuit.png">
        <img v-if="race_id == 21" src="@/assets/Circuit/CircuitInfo/Autodromo_josé_info_circuit.png">
        <img v-if="race_id == 22" src="@/assets/Circuit/CircuitInfo/Yas_marina_info_circuit.png">
        <!-- Location -->
        <div class="flex">
          <div>
            <p>Circuit</p>
            <p class="border-gray-300 text-3xl pb-2 pr-8 border-solid border-b-2 border-r-2 font-bold rounded">{{ race.Circuit.Location.locality }}</p> <br>
            <p class="font-bold text-lg">Qualifying</p> <br>
            <p>Date</p>
            <p class="border-gray-300 text-3xl pb-2 pr-8 border-solid border-b-2 border-r-2 font-bold rounded">{{ race.Qualifying.date }}</p> 
            <p class="mt-4 font-bold text-lg">Race</p> <br>
            <p>Date</p>
            <p class="border-gray-300 text-3xl pb-2 pr-8 border-solid border-b-2 border-r-2 font-bold rounded">{{ race.date }}</p> <br>     
          </div>
          <div class="ml-12">
            <p>Circuit Latitude</p>
            <p class="border-gray-300 text-3xl pb-2 pr-8 border-solid border-b-2 border-r-2 font-bold rounded">{{ race.Circuit.Location.lat }}m</p> <br>
            <p class="mt-12">Time</p>
            <p class="border-gray-300 text-3xl pb-2 pr-8 border-solid border-b-2 border-r-2 font-bold rounded">{{ race.Qualifying.time }}</p>
            <p class="mt-16">Time</p>
            <p class="border-gray-300 text-3xl pb-2 pr-8 border-solid border-b-2 border-r-2 font-bold rounded">{{ race.time }}</p>
          </div>
          <div class="ml-12">
            <p>Circuit Length</p>
            <p class="border-gray-300 text-3xl pb-2 pr-8 border-solid border-b-2 border-r-2 font-bold rounded">{{ race.Circuit.Location.long }}m</p> <br>
          </div>
        </div>
      </div>
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
    slides: [
    {
      id: 1,
      image: require('@/assets/Circuit/Bahrain_Grand_Prix.png')
    },
    {
      id: 2,
      image: require('@/assets/Circuit/Saudi_Arabian_Grand_Prix.png')
    },
    {
      id: 3,
      image: require('@/assets/Circuit/Australian_Grand_Prix.png')
    },
    {
      id: 4,
      image: require('@/assets/Circuit/Italian_Grand_Prix.png')
    },
    {
      id: 5,
      image: require('@/assets/Circuit/Miami_Grand_Prix.png')
    },
    {
      id: 6,
      image: require('@/assets/Circuit/Spanish_Grand_Prix.png')
    },
    {
      id: 7,
      image: require('@/assets/Circuit/Monaco_Grand_Prix.png')
    },
    {
      id: 8,
      image: require('@/assets/Circuit/Azerbaijan_Grand_Prix.png')
    },
    {
      id: 9,
      image: require('@/assets/Circuit/Canada_Grand_Prix.png')
    },
    {
      id: 10,
      image: require('@/assets/Circuit/British_Grand_Prix.png')
    },
    {
      id: 11,
      image: require('@/assets/Circuit/Austraian_Grand_Prix.png')
    },
    {
      id: 12,
      image: require('@/assets/Circuit/French_Grand_Prix.png')
    },
    {
      id: 13,
      image: require('@/assets/Circuit/Hungarian_Grand_Prix.png')
    },
    {
      id: 14,
      image: require('@/assets/Circuit/Belgian_Grand_Prix.png')
    },
    {
      id: 15,
      image: require('@/assets/Circuit/Dutch_Grand_Prix.png')
    },
    {
      id: 16,
      image: require('@/assets/Circuit/Italian_Grand_Prix.png')
    },
    {
      id: 17,
      image: require('@/assets/Circuit/Singapore_Grand_Prix.png')
    },
    {
      id: 18,
      image: require('@/assets/Circuit/Japan_Grand_Prix.png')
    },
    {
      id: 19,
      image: require('@/assets/Circuit/United_States_Grand_Prix.png')
    },
    {
      id: 20,
      image: require('@/assets/Circuit/Mexican_Grand_Prix.png')
    },
    {
      id: 21,
      image: require('@/assets/Circuit/São_Paulo_Grand_Prix.png')
    },
    {
      id: 22,
      image: require('@/assets/Circuit/Abu_Dhabi_Grand_Prix.png')
    },
  ]
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
