<template>
  <div class="standing">
    {{ standing_pilotes_list.season }}
    <div v-for="driver in standing_pilotes_list.DriverStandings" :key="driver.id">
        {{ driver.Driver.givenName }}
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default { 

  data: () => ({
    api_url: "http://ergast.com/api/f1/",
    api_standing: "2022/driverStandings.json",
    standing_pilotes_list: [],
  }),
  mounted() {
    axios.get(this.api_url + this.api_standing).then((response) => {
      this.standing_pilotes_list = response.data.MRData.StandingsTable.StandingsLists[0]
    }); 
  },
}

</script>

