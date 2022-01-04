<template>
    <div class="signup">
      <Nav />
        <div class="container">
      <DataForm />
      <FooterForm />
    </div>
    </div>
</template>
<script>
import DataForm from "@/components/doctor/signupform";
import FooterForm from "@/components/common/signupfooter";
import Nav from "@/components/admin/adminNAVBAR";

export default {
    name: "signup",
    components:{
      DataForm,
      FooterForm,
      Nav

    }
}
</script>
<style scoped>
.signup {
  width: 100%;
  background-image: url("../../img/stethoscope-2617701_1920.jpg");
  background-size: 100% 100%;
padding-bottom: 50px;
}
</style>