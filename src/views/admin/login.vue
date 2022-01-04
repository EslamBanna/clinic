<template>
    <div class="login">
        <Loginform />
    </div>
</template>

<script>
import Loginform from "@/components/admin/loginform.vue";
export default {
    name: "login",
    components: {
        Loginform
    }
}
</script>


<style scoped>
.login{
    padding-top: 100px;
      background: url("../../img/stethoscope-2617701_1920.jpg");
      height: 100vh;
}
</style>