<template>
  <div class="reservations">
    <Nav />
    <div class="container">
      <table class="table table-dark table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Full Name</th>
            <th scope="col">Age</th>
            <th scope="col">Phone Number</th>
            <th scope="col">Date</th>
            <th scope="col">Address</th>
            <th scope="col">Email</th>
            <th scope="col">Services</th>

          </tr>
        </thead>
        <tbody>
          <tr v-for="item in customerReservations" v-bind:key="item.id">
            <th scope="row">{{ item.id }}</th>
            <td>{{ item.name }}</td>
            <td>{{ item.age }}</td>
            <td>{{ item.phone }}</td>
            <td>{{ item.date }}</td>
            <td>{{ item.address }}</td>
            <td>{{ item.email }}</td>
            <td>
              <router-link
                to="/rosheta"
                class="btn btn-success"
                v-on:click.native="mainn(item.email)"
                >Service</router-link
              >
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import Nav from "@/components/doctor/doctorNAVBAR";
export default {
  name: "Reservations",
  components: {
    Nav,
  },
  data() {
    return {
      customerReservations: [
        {
          id: 1,
          name: "amr",
          age: 20,
          phone: "0123456789",
          date: "25-1-2020",
          address:"tanta",
          email:"FCI@fci.com"
        },
        {
          id: 2,
          name: "eslam",
          age: 30,
          phone: "0123456789",
          date: "25-1-2020",
          address:"tanta",
          email:"FCI@fci.com"
        },
        {
          id: 3,
          name: "mohamed",
          age: 40,
          phone: "0123456789",
          date: "25-1-2020",
          address:"tanta",
          email:"FCI@fci.com"
        },
        {
          id: 4,
          name: "elsayed",
          age: 12,
          phone: "0123456789",
          date: "25-1-2020",
          address:"tanta",
          email:"FCI@fci.com"
        },
      ],
    };
  },
  methods:{
    mainn(patientEmail){
      this.$parent.patient = patientEmail ;
    }
  }
};
</script>
<style scoped>
.reservations {
  width: 100%;
  height: 100vh;
  background-image: url("../../img/medical-563427_1920.jpg");
  background-size: 100% 100%;
}
table {
  position: absolute;
  top: 10%;
  width: 70%;
}
</style>
