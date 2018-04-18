<template>
  <div class="qwe">
    <div v-for="item in msg">
    	{{item}}
    </div>
    <router-link to="/">to index!!!</router-link>
  </div>
</template>

<script>
export default {
  name: 'qwe',
  data () {
    return {
    	myTitle:"asd-title",
      msg: [
      	"dfgs",
      	"ertq",
      	"yuia"
      ]
    }
  },
  metaInfo: {
    title: this.myTitle,
    titleTemplate: '%s - by vue-meta qwe'
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
