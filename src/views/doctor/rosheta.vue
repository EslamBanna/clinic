<template>
  <div class="rosheta">
    <Nav />
    <div class="container">
      <form>
        <div class="row">
          <div class="col">
            <input type="text" class="form-control" disabled :value="input.dr" />
          </div>
          <div class="col">
            <input type="text" class="form-control" disabled :value="input.patientEmail" />
          </div>
        </div>
      <textarea autofocus placeholder="Enter The Medicinal prescription">
      </textarea>
      <router-link
        to="/maindoctor"
        class="btn btn-primary"
        v-on:click.native="send()"
        >Done</router-link
      >
       </form>
    </div>
  </div>
</template>
<script>
import Nav from "@/components/doctor/doctorNAVBAR";
export default {
  name: "rosheta",
  components: {
    Nav,
  },
  data(){
      return{
          input:{
          medicinalPrescription:"",
          patientEmail:"Mr/ " +  this.$parent.patient,
          dr:"Dr/ " +  this.$parent.authr
      }
      }
  },
  methods: {
    send() {
      alert("Done Successfully");
    },
  },
};
</script>
<style scoped>
.rosheta {
  width: 100%;
  height: 100vh;
  background-image: url("../../img/medical-563427_1920.jpg");
  background-size: 100% 100%;
}
.container{
    padding-top: 100px;
}
textarea {
  width: 100%;
  height: 600px;
  padding: 25px;
  resize: none;
  background-color: rgba(0, 0, 0, 0.5);
  border: 0;
  color: white;
  font-size: 20px;
}
.btn-primary {
  margin-left: 48%;
}
</style>
