<template>
  <div class="footerSignUp">
    <div class="container">
      <h3 class="text-center" style="font-weight:bold"> <font-awesome-icon class="awesome" :icon="['fa', 'user-check']" /> 
 Why Choice Us </h3>
      <div class="row">
        <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xs-12 boxs">
          <font-awesome-icon class="awesome" :icon="['fa', 'baby']" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
            dolorem vero non aperiam nesciunt optio, enim harum sed laborum
            maxime doloribus ad,
          </p>
        </div>
        <hr class="d-xl-none d-lg-none d-md-none d-sm-block d-xs-block">
        <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xs-12 boxs">
          <font-awesome-icon class="awesome" :icon="['fab', 'accessible-icon']" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
            dolorem vero non aperiam nesciunt optio, enim harum sed laborum
            maxime doloribus ad,
          </p>
        </div>
        <hr class="d-xl-none d-lg-none d-md-block d-sm-block d-xs-block">
        <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xs-12 boxs">
          <font-awesome-icon class="awesome" :icon="['fa', 'address-card']" />

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
            dolorem vero non aperiam nesciunt optio, enim harum sed laborum
            maxime doloribus ad
          </p>
        </div>
                <hr class="d-xl-none d-lg-none d-md-block d-sm-block d-xs-block">
        <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xs-12 boxs">
          <font-awesome-icon class="awesome" :icon="['fa', 'ambulance']" />

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
            dolorem vero non aperiam nesciunt optio, enim harum sed laborum
            maxime doloribus ad,
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "FooterForm",
};
</script>
<style scoped>
.footerSignUp {
  background-color: #333;
  margin-top: 50px;
  border-radius: 3px;
  color: white;
}
.boxs{
    padding: 30px;
    text-align: center;
}
.awesome {
  font-size: 50px;
}
.container{
  padding-top: 20px;
}
hr{
  width: 100%;
  background-color: white;
}
.boxs .awesome{
  margin-bottom: 15px;
}
</style>
