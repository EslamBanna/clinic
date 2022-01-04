<template>
  <div class="customer">
    <Nav />
    <Customermainbody />
  </div>
</template>
<script>
import Nav from "@/components/customer/customernavbar";
import Customermainbody from "@/components/customer/customermainbody";

export default {
  name: "Customer",
  components: {
Nav,
Customermainbody
  }
};
</script>
