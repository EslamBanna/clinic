<template>
  <div class="doctor">
   <Nav />
   <Doctormainbody />
  </div>
</template>
<script>
import Nav from "@/components/doctor/doctorNAVBAR";
import Doctormainbody from "@/components/doctor/doctormainbody";

export default {
  name: "Doctor",
  components: {
Nav,
Doctormainbody,
  }
};
</script>
