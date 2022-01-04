<template>
  <div class="dataform">
    <div class="card text-center">
      <div class="card-header">
        <font-awesome-icon class="awesome" :icon="['fa', 'folder-plus']" />
        Create New Account For Doctor
      </div>
      <form action="" method="">
        <div class="card-body">
          <div class="mb-3 row">
            <label class="col-sm-3 col-form-label">
              <font-awesome-icon
                class="awesome"
                :icon="['fa', 'file-signature']"
              />
              Name</label
            >
            <div class="col-sm-9">
              <input
                type="text"
                class="form-control"
                v-model="input.name"
                placeholder="Enter Your Name"
              />
            </div>

            <label class="col-sm-3 col-form-label"
              ><font-awesome-icon class="awesome" :icon="['fa', 'key']" />
              Password</label
            >
            <div class="col-sm-9">
              <input
                type="password"
                class="form-control"
                v-model="input.password"
                placeholder="Enter Password"
              />
            </div>

            <label class="col-sm-3 col-form-label"
              ><font-awesome-icon class="awesome" :icon="['fa', 'qrcode']" />
              Email</label
            >
            <div class="col-sm-9">
              <input
                type="email"
                class="form-control"
                v-model="input.email"
                placeholder="Enter Your Email"
              />
            </div>
            <label class="col-sm-3 col-form-label"
              ><font-awesome-icon
                class="awesome"
                :icon="['fa', 'map-marker-alt']"
              />
              Address</label
            >
            <div class="col-sm-9">
              <input
                type="text"
                class="form-control"
                v-model="input.address"
                placeholder="Enter Your Clinic Address"
              />
            </div>

            <label class="col-sm-3 col-form-label"
              ><font-awesome-icon class="awesome" :icon="['fa', 'phone']" />
              Phone</label
            >
            <div class="col-sm-9">
              <input
                type="text"
                class="form-control"
                v-model="input.phone"
                placeholder="Enter Your Phone"
              />
            </div>
            <label class="col-sm-3 col-form-label"
              ><font-awesome-icon
                class="awesome"
                :icon="['fa', 'sort-numeric-up-alt']"
              />
              Age</label
            >
            <div class="col-sm-9">
              <input
                type="text"
                class="form-control"
                v-model="input.age"
                placeholder="Enter Your Age"
              />
            </div>

            <label class="col-sm-3 col-form-label"
              ><font-awesome-icon class="awesome" :icon="['fa', 'clinic-medical']" />
              Room</label
            >
            <div class="col-sm-9">
              <input
                type="text"
                class="form-control"
                v-model="input.room"
                placeholder="Enter The Clinc Room"
              />
            </div>
            <label class="col-sm-4 col-form-label" style="margin-left:-30px;"
              ><font-awesome-icon class="awesome" :icon="['fa', 'user-md']" />
              Specialization</label
            >
            <select
              class="form-select form-select-sm"
              aria-label=".form-select-sm example"
              v-model="input.specialization"
            >
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
            <label class="col-sm-3 col-form-label"
              ><font-awesome-icon
                class="awesome"
                :icon="['fa', 'venus-mars']"
              />
              Gender</label
            >
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="gender"
                id="male"
                v-model="input.gender"
              />
              Male
            </div>

            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="gender"
                id="female"
                value="female"
                v-model="input.gender"
              />
              Female
            </div>
          </div>
          <router-link
            to="/adminmain"
            class="btn btn-primary"
            v-on:click.native="send()"
          >
            Add
          </router-link>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  name: "DataForm",
  data() {
    return {
      input: {
        name: "",
        password: "",
        email: "",
        address: "",
        phone: "",
        age: "",
        room:"",
        specialization: "",
        gender: "",
      },
    };
  },
  methods: {
    send() {
      alert("Added Successfully");
    },
  },
};
</script>
<style scoped>
.form-control,
select {
  margin-bottom: 10px;
}
select {
  margin-left: auto;
  margin-right: auto;
  width: 66%;
  height: 40px;
  border: 1px solid#bbbfc2;
}
#flexRadioDefault1 {
  margin-left: 100px;
}
.dataform {
  padding-top: 100px;
}
</style>
