<template>
    <div class="signup">
        <div class="container">
      <DataForm />
      <FooterForm />
    </div>
    </div>
</template>
<script>
import DataForm from "@/components/customer/signupform";
import FooterForm from "@/components/common/signupfooter";
export default {
    name: "signup",
    components:{
      DataForm,
      FooterForm,
    }
}
</script>
<style scoped>
.signup {
  width: 100%;
  background-image: url("../../img/chair-2584260_1920.jpg");
  background-size: 100% 100%;
  padding-top: 100px;
padding-bottom: 50px;
}
</style>