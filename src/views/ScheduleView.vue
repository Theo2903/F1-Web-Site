<template>
  <div class="schedule">
    <div v-for="races in schedules_list" :key="races.id">
      <a @click="go_to_raceinfo(races)"> {{ races.raceName }} </a>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {

  data: () => ({
    api_url: 'http://ergast.com/api/f1/',
    api_schedule: 'current.json',
    schedules_list: []
  }),

  methods: {

    go_to_raceinfo (races) {
      this.$router.push({ path: 'schedule/' + races.round })
    }

  },

  mounted () {
    axios.get(this.api_url + this.api_schedule).then((response) => {
      this.schedules_list = response.data.MRData.RaceTable.Races
    })
  }
}
</script>
