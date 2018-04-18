<template>
  <div id="app">
    <img src="./assets/logo.png">
    <transition mode="out-in">
    	<router-view/>
  	</transition>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  height: 100%;
  width: 100%;
  overflow-x: hidden;
  opacity: 0;
  -moz-animation: 1s fadeIn 0s ease both;
  -webkit-animation: 1s fadeIn 0s ease both;
  -ms-animation: 1s fadeIn 0s ease both;
  animation: 1s fadeIn 0s ease both;
  font-size: 0.24rem;
  
}
@-moz-keyframes fadeIn{
	from{opacity: 0;}
	to{opacity: 1;}
}
@-webkit-keyframes fadeIn{
	from{opacity: 0;}
	to{opacity: 1;}
}
@-ms-keyframes fadeIn{
	from{opacity: 0;}
	to{opacity: 1;}
}
@keyframes fadeIn{
	from{opacity: 0;}
	to{opacity: 1;}
}

.v-enter{
  opacity: 0;
}
.v-enter-active{
  transition: 0.3s;
}
.v-enter-to{
  opacity: 1;
}
.v-leave{
  opacity: 1;
}
.v-leave-to{
  opacity:0;
}
.v-leave-active{
  transition: 0.3s;
}
</style>
