<template>
  <div id="app">
    <Nav />
     <router-view > </router-view> 
    <First v-if="switching" />
  </div>
</template>
<script>
import Nav from "./components/nav";
import First from "./views/first";
export default {
  name:"App",
  components:{
First,
Nav
  },
    data(){
      return{
         switching : 1 ,
         authr: "",
         patientEmail:""
            }
  }
}
</script>
<style>
* { margin: 0;}
</style>
