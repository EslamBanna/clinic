<template>
  <div class="reservations">
    <Nav />
    <div class="container">
      <table class="table table-dark table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Full Name</th>
            <th scope="col">Specialization</th>
            <th scope="col">Phone Number</th>
            <th scope="col">Date</th>
            <th scope="col">Room</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in customerReservations" v-bind:key="item.id">
            <th scope="row">{{item.id}}</th>
            <td>{{ item.dr }}</td>
            <td>{{ item.specialization }}</td>
            <td>{{ item.phone }}</td>
            <td>{{ item.date }}</td>
            <td>{{ item.room }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import Nav from "@/components/customer/customernavbar";
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
          dr: "amr",
          specialization: "Eyes",
          phone: "0123456789",
          date: "25-1-2020",
          room: "306",
        },
           {
            id: 2,
          dr: "Ali",
          specialization: "legs",
          phone: "0123456789",
          date: "25-1-2020",
          room: "800",
        },
           {
            id: 3,
          dr: "Eslam",
          specialization: "Eyes",
          phone: "0123456789",
          date: "25-1-2020",
          room: "145",
        },
           {
            id: 4,
          dr: "Hager",
          specialization: "Eyes",
          phone: "0123456789",
          date: "25-1-2020",
          room: "265",
        },
           {
            id: 5,
          dr: "Asmaa",
          specialization: "Eyes",
          phone: "0123456789",
          date: "25-1-2020",
          room: "510",
        },
           {
            id: 6,
          dr: "hussien",
          specialization: "Eyes",
          phone: "0123456789",
          date: "25-1-2020",
          room: "200",
        },
      
      ],
    };
  },
};
</script>
<style scoped>
.reservations {
  width: 100%;
  height: 100vh;
  background-image: url("../../img/chair-2584260_1920.jpg");
  background-size: 100% 100%;
}
table {
  position: absolute;
  top: 10%;
  width: 70%;
}
</style>
