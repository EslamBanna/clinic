<template>
  <div class="admin">
    <Nav />
    <Adminmainbody />
  </div>
</template>
<script>
import Nav from "@/components/admin/adminNAVBAR";
import Adminmainbody from "@/components/admin/adminmainbody";

export default {
  name: "Admin",
  components: {
Nav,
Adminmainbody
  }
};
</script>
