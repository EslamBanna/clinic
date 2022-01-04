<template>
  <div class="form">
    <form>
      <h1>DOCTOR <font-awesome-icon :icon="['fa', 'user-nurse']" /></h1>
      <select
        name="doctor-specialization-select"
        required="required"
        id="doctor-specialization-select"
        v-model="input.specialization"
      >
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
      <input
        class="form-control form-control-lg"
        type="email"
        v-model="input.email"
        placeholder="Enter Your Email"
        aria-label=".form-control-lg example"
      />

      <input
        class="form-control form-control-lg"
        type="password"
        v-model="input.password"
        placeholder="Enter Your Password"
        aria-label=".form-control-lg example"
      />

      <div class="routes">
        <router-link
          to="/maindoctor"
          class="btn btn-primary"
          v-on:click.native="mainn()"
        >
          Login
        </router-link>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "Loginform",
  data() {
    return {
      input: {
        specialization: "",
        email: "",
        password: "",
      },
    };
  },
  methods: {
    mainn() {
      this.$parent.$parent.dropdownContent = 1;
      this.$parent.$parent.authr = this.input.email;
    },
  },
};
</script>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

form h1 {
  display: flex;
  width: 500px;
  justify-content: center;
  font-size: 50px;
  margin: 0px 0px 10px;
  color: white;
  font-weight: bold;
}
form {
  margin: 50px 0px;
  width: 500px;
  background-color: rgba(0, 0, 0, 0.5);
  box-shadow: 0px 0px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px;
  border-radius: 30px;
}
form i {
  margin: 0px 20px;
  color: white;
}

form input {
  height: 40px;
  width: 300px;
  margin: 10px 0px;
  font-size: 18px;
  padding: 5px 15px;
  border: none;
}
select {
  display: inline-block;
  height: 40px;
  width: 300px;
  margin: 10px 0px;
  font-size: 17px;
  padding: 5px 15px;
  border: none;
}
.btn {
  margin-right: 15px;
}
</style>
