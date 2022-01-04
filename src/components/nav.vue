<template>
  <div class="Navbar">
      <div class="navbar">
          <div class="routers">
              <router-link to ="" tag="a"> Hospital</router-link>
              <router-link to ="/" tag="a"> Main Page</router-link>        
          </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Nav",
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
 
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
</style>
