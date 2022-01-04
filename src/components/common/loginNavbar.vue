<template>
  <div class="navigation">
    <div class="routes">
      <router-link to="" class="links"> Contact Us </router-link>
      <router-link to="" class="links"> About Us </router-link>
    
    </div>
  </div>
</template>

<script>
export default {
  name: "Navigation",
};
</script>

<style scoped>
.routes{
    background-color: #333;
    line-height: 65px;
    padding-left: 100px;
}
.links{
        color: white;
    margin-right: 20px;
      font-size: 16px;
  padding: 14px 16px;
  text-decoration: none;
}
.navigation{
  margin-bottom: 50px;
}

</style>
