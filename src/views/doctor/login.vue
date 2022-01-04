<template>
  <div class="login">
    <Loginform />
  </div>
</template>

<script>
import Loginform from "@/components/doctor/loginForm";
export default {
  name: "login",
  components: {
      Loginform
  }
};
</script>

<style scoped>
.login {
  width: 100%;
  height: 100vh;
  background-image: url("../../img/medical-563427_1920.jpg");
  background-size: 100% 100%;
 padding-top: 100px;
}
</style>
