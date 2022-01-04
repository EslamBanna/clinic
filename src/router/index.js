import Vue from "vue";
import VueRouter from "vue-router";
import Maincustomer from "../views/customer/main.vue";
import Maindoctor from "../views/doctor/main.vue";
import Adddoctor from "../views/doctor/signup.vue";
import Signupcustomer from "../views/customer/signup.vue";
import Reservations from "../views/doctor/reservations.vue";
import Logindoctor from "../views/doctor/login.vue";
import Logincustomer from "../views/customer/login.vue";
import Adminlogin from "../views/admin/login.vue";
import Adminmain from "../views/admin/main.vue";
import Admindelete from "../views/admin/deletdoctor.vue";
import App from "@/App.vue";
import Myreservations from "../views/customer/myreservations.vue";
import Rosheta from "../views/doctor/rosheta.vue";
import ClinicReservation from "../views/customer/clinicReservation.vue";
import MedicinalPrescriptions from "../components/customer/medicinalPrescriptions.vue";
import Customerdelete from "../views/customer/deletecustomer.vue";


Vue.use(VueRouter);

const routes = [
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/",
    name:"home",
    component: App

  },
  {
    path: "/maincustomer",
    name: "maincustomer",
    component: Maincustomer
  },
  {
    path: "/maindoctor",
    name: "maindoctor",
    component: Maindoctor
  },
  {
    path:"/adddoctor",
    name:"adddoctor",
    component: Adddoctor
  },
  {
    path: "/signupcustomer",
    name: "signupcustomer",
    component: Signupcustomer
  },
  {
    path: "/reservations",
    name: "reservations",
    component: Reservations
  },
  {
    path: "/logincustomer",
    name: "logincustomer",
    component: Logincustomer
  },
  {
    path: "/logindoctor",
    name: "logindoctor",
    component: Logindoctor
  },
  {
    path: "/adminlogin",
    name: "adminlogin",
    component: Adminlogin

  },
  {
    path: "/adminmain",
    name: "adminmain",
    component: Adminmain

  },
  {
    path:"/myreservations",
    name: "myreservations",
    component: Myreservations
  },
  {
    path: "/rosheta",
    name: "rosheta",
    component: Rosheta
  },
  {
    path: "/clinicreservation",
    name: "clinicreservation",
    component: ClinicReservation
  },
  {
    path: "/medicinalprescriptions",
    name: "medicinalprescriptions",
    component: MedicinalPrescriptions
  },
  {
    path: "/doctordelete",
    name: "doctordelete",
    component: Admindelete
  },
  {
    path: "/customerdelete",
    name: "customerdelete",
    component: Customerdelete
  }

  
];
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
