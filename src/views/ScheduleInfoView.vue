<template>
    <div>
        test 
    </div>    
</template>
  
<script>
    import axios from "axios";
    
    export default { 
    
      data: () => ({
        api_url: "http://ergast.com/api/f1/",
        api_schedule: "current.json",
        schedules_list: [],
      }),
    
      methods: {
    
        go_to_raceinfo(races){
          this.$router.push({ path: 'schedule/' + races.round})
        },
    
      },
    
      mounted() {
        axios.get(this.api_url + this.api_schedule).then((response) => {
          this.schedules_list = response.data.MRData.RaceTable.Races
        }); 
      },
    }
    
</script>