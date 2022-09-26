<template>
  <div class="teams">
    <div v-for="constructor in standing_constructor" :key="constructor.id">
        {{ constructor.name }}
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {

  data: () => ({
    api_url: 'http://ergast.com/api/f1/',
    api_standing: '2022/constructors.json',
    standing_constructor: []
  }),
  mounted () {
    axios.get(this.api_url + this.api_standing).then((response) => {
      this.standing_constructor = response.data.MRData.ConstructorTable.Constructors
    })
  }
}

</script>
