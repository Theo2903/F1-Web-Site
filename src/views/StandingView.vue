<template>
  <div class="standing">
    <div v-for="driver in standing_pilotes_list.DriverStandings" :key="driver.id">
      <div class=" ">
        <div class="flex">
            <img v-if='driver.position == 1' src='@/assets/Driver/Max_Verstappen_Driver.png'>
            <img v-if='driver.position == 2' src='@/assets/Driver/Sergio_Perez_Driver.png'>
            <img v-if='driver.position == 3' src='@/assets/Driver/Charles_Leclerc_Driver.png'>
            <img v-if='driver.position == 4' src='@/assets/Driver/George_Russell_Driver.png'>
            <img v-if='driver.position == 5' src='@/assets/Driver/Carlos_Sainz_Driver.png'>
            <img v-if='driver.position == 6' src='@/assets/Driver/Lewis_Hamilton_Driver.png'>
            <img v-if='driver.position == 7' src='@/assets/Driver/Lando_Norris_Driver.png'>
            <img v-if='driver.position == 8' src='@/assets/Driver/Esteban_Ocon_Driver.png'>
            <img v-if='driver.position == 9' src='@/assets/Driver/Fernando_Alonso_Driver.png'>
            <img v-if='driver.position == 10' src='@/assets/Driver/Valterri_Bottas_Driver.png'>
            <img v-if='driver.position == 11' src='@/assets/Driver/Sebastian_Vettel_Driver.png'>
            <img v-if='driver.position == 12' src='@/assets/Driver/Daniel_Ricciardo_Driver.png'>
            <img v-if='driver.position == 13' src='@/assets/Driver/Pierre_Gasly_Driver.png'>
            <img v-if='driver.position == 14' src='@/assets/Driver/Kevin_Magnussen_Driver.png'>
            <img v-if='driver.position == 15' src='@/assets/Driver/Lance_Stroll_Driver.png'>
            <img v-if='driver.position == 16' src='@/assets/Driver/Mick_Schumacher_Driver.png'>
            <img v-if='driver.position == 17' src='@/assets/Driver/Yuki_Tsunoda_Driver.png'>
            <img v-if='driver.position == 18' src='@/assets/Driver/Zhou_Guanyu_Driver.png'>
            <img v-if='driver.position == 19' src='@/assets/Driver/Alexander_Albon_Driver.png'>
            <img v-if='driver.position == 20' src='@/assets/Driver/Nicholas_Latifi_Driver.png'>
            <img v-if='driver.position == 21' src='@/assets/Driver/Nyck_De_Vries_Driver.png'>
            <img v-if='driver.position == 22' src='@/assets/Driver/Nico_Hulkenberg_Driver.png'>
          </div>
          <!-- {{ driver.position }}
          {{ driver.Driver.givenName }}
          {{ driver.Driver.familyName }}
          {{ driver.points}}
          {{ driver.Constructors[0].name }} -->
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {

  data: () => ({
    api_url: 'http://ergast.com/api/f1/',
    api_standing: '2022/driverStandings.json',
    standing_pilotes_list: []
  }),
  mounted () {
    axios.get(this.api_url + this.api_standing).then((response) => {
      this.standing_pilotes_list = response.data.MRData.StandingsTable.StandingsLists[0]
      console.log(this.standing_pilotes_list)
    })
  }
}

</script>
