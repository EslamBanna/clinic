<template>
  <div class="deletedoctor">
    <Nav />
    <div class="container">
  <div class="form">
    <form>
      <h1><font-awesome-icon :icon="['fa', 'user-times']" /> Delete Doctor</h1>
<input class="form-control form-control-lg" type="email" v-model="input.email" placeholder="Enter The Email" aria-label=".form-control-lg example">
<input class="form-control form-control-lg" type="password" v-model="input.password" placeholder="Enter The Password" aria-label=".form-control-lg example">

      <div class="routes"> 
          <router-link to="/adminmain" class="btn btn-primary" v-on:click.native="mainn()"> Delete </router-link>
      </div>
 
    </form>
  </div>
    </div>
  </div>
</template>

<script>
import Nav from "@/components/admin/adminNAVBAR";
export default {
  name: "deletedoctor",
  components: {
    Nav
  },
  data() {
    return {
        input:{
            email:"",
            password:""
        }
    };
  },
  methods:{
      mainn(){
          alert('Deleted');
      }
  }
};
</script>
<style scoped>
.deletedoctor {
  width: 100%;
  height: 100vh;
 background: url("../../img/stethoscope-2617701_1920.jpg");
   background-size: 100% 100%;
}

.form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

form h1 {
  display: flex;
  width: 500px;
  justify-content: center;
  font-size: 50px;
  margin: 0px 0px 10px;
  color: white;
  font-weight: bold;
}
form {
  margin: 50px 0px;
  width: 500px;
  background-color: rgba(0, 0, 0, 0.5);
  box-shadow: 0px 0px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px;
  border-radius: 30px;
}
form i {
  margin: 0px 20px;
  color: white;
}

form input {
  height: 40px;
  width: 300px;
  margin: 10px 0px;
  font-size: 18px;
  padding: 5px 15px;
  border: none;
}
.btn{
  margin-right: 15px;
}
</style>
