<template>
  <div class="dataform">
    <div class="card text-center">
      <div class="card-header">
       <font-awesome-icon class="awesome" :icon="['fa', 'folder-plus']" /> Create New Account For Client
      </div>
      <form action="" method="">
        <div class="card-body">
          <div class="mb-3 row">
            <label class="col-sm-3 col-form-label"> <font-awesome-icon class="awesome" :icon="['fa', 'file-signature']" /> Name</label>
            <div class="col-sm-9">
              <input type="text" class="form-control" v-model="input.name" placeholder="Enter Your Name" />
            </div>

            <label class="col-sm-3 col-form-label"><font-awesome-icon class="awesome" :icon="['fa', 'key']" /> Password</label>
            <div class="col-sm-9">
              <input type="password" class="form-control" v-model="input.password" placeholder="Enter Password" />
            </div>

            <label class="col-sm-3 col-form-label"><font-awesome-icon class="awesome" :icon="['fa', 'qrcode']" /> Email</label>
            <div class="col-sm-9">
              <input type="email" class="form-control" v-model="input.email" placeholder="Enter Your Email" />
            </div>
            <label class="col-sm-3 col-form-label"><font-awesome-icon class="awesome" :icon="['fa', 'map-marker-alt']" /> Address</label>
            <div class="col-sm-9">
              <input type="text" class="form-control" v-model="input.address" placeholder="Enter Your Clinic Address" />
            </div>

            <label class="col-sm-3 col-form-label"><font-awesome-icon class="awesome" :icon="['fa', 'phone']" /> Phone</label>
            <div class="col-sm-9">
              <input type="text" class="form-control" v-model="input.phone" placeholder="Enter Your Phone" />
            </div>
            <label class="col-sm-3 col-form-label"><font-awesome-icon class="awesome" :icon="['fa', 'sort-numeric-up-alt']" /> Age</label>
            <div class="col-sm-9">
              <input type="text" class="form-control" v-model="input.age" placeholder="Enter Your Age" />
            </div>
            <label class="col-sm-3 col-form-label"><font-awesome-icon class="awesome" :icon="['fa', 'venus-mars']" /> Gender</label>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="male"
                id="flexRadioDefault1"
              /> Male
            </div>
        
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="female"
                id="flexRadioDefault2"
                checked
              /> Female
            </div>

          </div>
            <router-link to ="/maincustomer" class="btn btn-primary" v-on:click.native="signup()" > Done </router-link>            
        </div>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  name: "DataForm",
  data(){
    return{
    input:{
      name: "",
      password: "",
      email: "",
      address: "",
      phone: "",
      age: "",
      gender: ""
    }
    }
  },
  methods:{
    signup(){
      this.$parent.$parent.authr = this.input.name;
    }
  }
};
</script>
<style scoped>
.form-control,select {
  margin-bottom: 10px;
}
select {
  margin-left: auto;
  margin-right: auto;
  width: 66%;
  height: 40px;
  border: 1px solid#bbbfc2;
}
#flexRadioDefault1{
    margin-left: 100px;
}
</style>
