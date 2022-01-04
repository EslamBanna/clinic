<template>
  <div class="login">
    <Loginform />
  </div>
</template>

<script>
import Loginform from "@/components/customer/loginForm";
export default {
  name: "login",
  components: {
    Loginform,
  }
};
</script>

<style scoped>
.login {
  padding-top: 100px;
  background: url("../../img/chair-2584260_1920.jpg");
  height: 100vh;
}
</style>
