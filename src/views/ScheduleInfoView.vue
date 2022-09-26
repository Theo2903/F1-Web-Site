<template>
    <div v-for="race in schedule_info" :key="race.id">
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
</template>
<script>
import axios from 'axios'

export default {
  data: () => ({
    api_url: 'http://ergast.com/api/f1/',
    api_schedule: 'current/',
    schedule_info: []
  }),

  methods: {

    go_to_raceinfo (races) {
      this.$router.push({ path: 'schedule/' + races.round })
    }

  },

  mounted () {
    axios.get(this.api_url + this.api_schedule + this.$route.params.round + '.json').then((response) => {
      this.schedule_info = response.data.MRData.RaceTable.Races
    })
  }
}

</script>
