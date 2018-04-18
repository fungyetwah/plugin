<template>
  <div class="asd">
    <div v-for="item in msg">
    	{{item}}
    </div>
    <div>
    	{{$store.state.user.userName}}
    </div>
    <router-link to="/qwe">go to qwe</router-link>
  </div>
</template>

<script>
export default {
  name: 'asd',
  data () {
    return {
    	myTitle:"asd-title",
      msg: [
      	"111",
      	"222",
      	"333"
      ]
    }
  },
  created:function(){},
  mounted:function(){
  	
  },
  metaInfo: {
    title: this.myTitle,
    titleTemplate: '%s - by vue-meta asd'
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
