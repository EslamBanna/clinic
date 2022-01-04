<template>
  <div class="Navbar">
      <div class="navbar">
          <div class="routers">
              <router-link to ="" > Hospital</router-link>
              <router-link to ="" v-if="this.$parent.$parent.authr" > <font-awesome-icon class="fontawe" :icon="['fas', 'female']" />
          {{this.$parent.$parent.authr}}</router-link>
        
          </div>
        <div class="dropdown">
          <button class="dropbtn">
            Control Center
            <font-awesome-icon class="fontawe" :icon="['fa', 'caret-down']" />
          </button>
          <div class="dropdown-content">
            <router-link to = "/adddoctor" > <font-awesome-icon :icon="['fa', 'user-plus']" v-on:click.native="mainn()" /> Add Doctor</router-link>
            <router-link to = "/doctordelete" > <font-awesome-icon :icon="['fa', 'user-times']" /> Delete Doctor</router-link>
            <router-link to = "/" > <font-awesome-icon :icon="['fa', 'lock']" /> LogOut!</router-link>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Nav",
   methods:{
    mainn(){
this.$parent.$parent.$parent.authr = this.input.code;
},
  }
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
 
}
i {
  margin-left: 5px;
  margin-right: 5px;
}

/* Navbar container */
.navbar {
  background-color: #333;
  font-family: Arial;
  margin: 0px;
  position: absolute;
  z-index: 5;
  width: 100%;
}

/* Links inside the navbar */
a {
  float: left;
  font-size: 16px;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

/* The dropdown container */
.dropdown {
  float: right;
}

/* Dropdown button */
.dropdown .dropbtn {
  font-size: 16px;
  border: none;
  outline: none;
  color: white;
  padding: 14px 16px;
  background-color: black;
  font-family: inherit; /* Important for vertical align on mobile phones */
  width: 230px;
  margin: 0; /* Important for vertical align on mobile phones */
  transition: all 0.5s ease-in-out;
}

/* Add a red background color to navbar links on hover */
.navbar a:hover,
.dropdown:hover .dropbtn {
  background-color: red;
}

/* Dropdown content (hidden by default) */
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 230px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

/* Links inside the dropdown */
.dropdown-content a {
  float: none;
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
}

/* Add a grey background color to dropdown links on hover */
.dropdown-content a:hover {
  background-color: #ddd;
}

/* Show the dropdown menu on hover */
.dropdown:hover .dropdown-content {
  display: block;
}
.fontawe {
  color: white;
}
.dropbtn{
  overflow: auto;
}
</style>
