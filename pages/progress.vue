<template>
  <div>
    <h1 class="statement">Progress Report</h1>
    <p></p>
    <p class="bodytext">
      
    </p>
    <nuxt-link to="/" class="callToAction">Go back</nuxt-link>
  </div>
</template>

<script>
const axios = require('axios'); 
export default {
  asyncData ({ params }) {
    return axios.get('http://localhost:3000/status.json')
    .then((res) => {
      return {
        statusUpdate: res.data.statusUpdate,
        statusDate: res.data.statusDate
      }
    })
  }
}
</script>

<style>
</style>