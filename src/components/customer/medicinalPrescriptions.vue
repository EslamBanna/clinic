<template>
  <div class="Medicinal-prescriptions">
    <Nav />
    <div class="container">
      <div class="loop" v-for="item in prescriptions" v-bind:key="item.id">
        <div class="card text-center">
          <div class="card-header">
              {{item.date}}
          </div>
            <div class="card-body">
              <div class="mb-3 row">
                     <div class="row">
          <div class="col">
            <input type="text" class="form-control" disabled :value="'Dr: ' + item.dr" />
          </div>
          <div class="col">
            <input type="text" class="form-control" disabled :value="'phone: ' +item.phone" />
          </div>
             <div class="col">
            <input type="text" class="form-control" disabled :value="'Specialization: ' +item.specialization" />
          </div>
          <br>
          <textarea v-text="item.obj"></textarea>
        </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Nav from "@/components/customer/customernavbar";
export default {
  components: { Nav },
  name: "medicinalPrescriptions",
  data() {
    return {
      prescriptions: [
        {
          id: Math.random * 100,
          dr: "Eslam",
          date: "25-1-2020",
          obj:
            "1)aaaaaaaaa 2)bbbbbbbbbbbbbbbbbbb 3)ccccccccccccccccccc 4)ddddddd",
          phone: "0123456789",
          specialization: "eyes",
        },
        {
          id: Math.random * 100,
          dr: "Eslam",
          date: "25-1-2020",
          obj:
            "1)aaaaaaaaa 2)bbbbbbbbbbbbbbbbbbb 3)ccccccccccccccccccc 4)ddddddd",
          phone: "0123456789",
          specialization: "eyes",
        },
        {
          id: Math.random * 100,
          dr: "Eslam",
          date: "25-1-2020",
          obj:
            "1)aaaaaaaaa 2)bbbbbbbbbbbbbbbbbbb 3)ccccccccccccccccccc 4)ddddddd",
          phone: "0123456789",
          specialization: "eyes",
        },
        {
          id: Math.random * 100,
          dr: "Eslam",
          date: "25-1-2020",
          obj:
            "1)aaaaaaaaa 2)bbbbbbbbbbbbbbbbbbb 3)ccccccccccccccccccc 4)ddddddd",
          phone: "0123456789",
          specialization: "eyes",
        },
        {
          id: Math.random * 100,
          dr: "Eslam",
          date: "25-1-2020",
          obj:
            "1)aaaaaaaaa 2)bbbbbbbbbbbbbbbbbbb 3)ccccccccccccccccccc 4)ddddddd",
          phone: "0123456789",
          specialization: "eyes",
        },
      ],
    };
  },
};
</script>

<style scoped>
.Medicinal-prescriptions {
  width: 100%;
  background-image: url("../../img/chair-2584260_1920.jpg");
  background-size: 100% 100%;
  padding-bottom: 50px;
}
.container {
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  padding-top: 100px;
    padding-bottom: 50px;
}
.loop {
  margin-bottom: 20px;
}
textarea{
    width: 100%;
    resize: none;
    margin-left: 25px;
    margin-top: 15px;
    padding:20px;
    font-size: 20px;
    background-color: #CED8E2;
    border: 0;
}
</style>
