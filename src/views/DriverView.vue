<template>
  <div class="drivers">
    <div v-for="drivers in drivers_list" :key="drivers.id">
        {{ drivers.givenName }}
        {{ drivers.familyName }}
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default { 

  data: () => ({
    api_url: "http://ergast.com/api/f1/",
    api_driver: "2022/drivers.json",
    drivers_list: [],
  }),
  mounted() {
    axios.get(this.api_url + this.api_driver).then((response) => {
      this.drivers_list = response.data.MRData.DriverTable.Drivers
    }); 
  },
}

</script>