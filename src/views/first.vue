<template>
  <div class="body">
    <div class="layout">
      <!-- Start Heading -->
      <article class="cont">
        <blockquote><strong>Welcome</strong> to <em>Hospital</em></blockquote>
        <b>services !</b>
      </article>
      <!-- Start button -->
   
        <div class="maindiv2">
          <router-link to="/logindoctor" class="btn btn-1" v-on:click.native="login()">
            <span class="txt">Sign As Doctor</span>
            <span class="round"
              ><font-awesome-icon :icon="['fa', 'chevron-right']"
            /></span>
          </router-link>
        </div>

   <div class="type-1">
        <div class="maindiv1">
          <router-link to="/logincustomer" class="btn btn-1"  v-on:click.native="login()">
            <span class="txt">Sign As Client</span>

            <span class="round"
              ><font-awesome-icon :icon="['fa', 'chevron-right']" />
            </span>
          </router-link>
        </div>


        <div class="maindiv3">
          <router-link to="/adminlogin" class="btn btn-1" v-on:click.native="login()">
            <span class="txt">Sign As Administrator</span>
            <span class="round"
              ><font-awesome-icon :icon="['fa', 'chevron-right']"
            /></span>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "first",
  methods:{
      login(){
          this.$parent.switching = 0;
      }
  }
};
</script>
<style scoped>
.body {
  font-family: "Hind", sans-serif;
  background: url("../img/doctor-563428_1920.jpg") no-repeat center center / cover;
  height: 100vh;
}
.body .layout {
  background-color: rgba(0, 0, 0, 0.6);
  width: 100%;
  height: 80%;
}
/* button */
body > div {
  width: 40%;
  float: left;
}
body > div > div {
  margin-bottom: 15px;
}

.btn-1 {
  background-color: #f27935;
}
.btn-1 .round {
  background-color: #f59965;
}

a {
  text-decoration: none;
  -moz-border-radius: 30px;
  -webkit-border-radius: 30px;
  border-radius: 30px;
  padding: 12px 53px 12px 23px;
  color: #fff;
  text-transform: uppercase;
  font-family: sans-serif;
  font-weight: bold;
  position: relative;
  -moz-transition: all 0.3s;
  -o-transition: all 0.3s;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  display: inline-block;
}
a span {
  position: relative;
  z-index: 3;
}
a .round {
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  border-radius: 50%;
  width: 38px;
  height: 38px;
  position: absolute;
  right: 3px;
  top: 3px;
  -moz-transition: all 0.3s ease-out;
  -o-transition: all 0.3s ease-out;
  -webkit-transition: all 0.3s ease-out;
  transition: all 0.3s ease-out;
  z-index: 2;
}
a .round .chevron-right {
  position: absolute;
  top: 50%;
  margin-top: -6px;
  left: 50%;
  margin-left: -4px;
  -moz-transition: all 0.3s;
  -o-transition: all 0.3s;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
}

.txt {
  font-size: 14px;
  line-height: 1.45;
}

.type-1 a:hover {
  padding-left: 48px;
  padding-right: 28px;
}
.type-1 a:hover .round {
  width: calc(100% - 6px);
  -moz-border-radius: 30px;
  -webkit-border-radius: 30px;
  border-radius: 30px;
}
.type-1 a:hover .round i {
  left: 12%;
}
.maindiv2 {
  padding: 10px;
  position: absolute;
  top: 58%;
  left:30%;
}
.maindiv1 {
  position: absolute;
  top: 61%;
left: 45%;
}
.maindiv3 {
  position: absolute;
  top: 59%;
  left: 60%;
}
.btn-1 {
  width: 195px;
}
.maindiv3 .btn-1 {
  background-color: #dd4b39;
}
.cont {
  width: 590px;
  margin: 0px auto;
  position: relative;
  padding-top: 100px;
}

blockquote {
  width: 565px;
  font: 2.65em CallunaRegular;
  letter-spacing: 0.075em;
  float: left;
  padding: 45px 0 30px 25px;
  margin: 0;
  border-top: 2px dotted #858585;
  border-bottom: 2px dotted #858585;
  -webkit-transform: rotate(-3deg);
  -moz-transform: rotate(-3deg);
}

.cont:before {
  content: "“";
  font-size: 13em;
  position: absolute;
  left: -100px;
  color: #666;
}

.cont:after {
  content: "”";
  font-size: 13em;
  position: absolute;
  right: -100px;
  top: 150px;
  color: #666;
}

blockquote:first-line {
  font: 1.85em "Sketch Block";
  color: #fff79e;
}

blockquote:first-letter {
  font-size: 2.9em;
  text-transform: lowercase;
  float: left;
  line-height: 0.52em;
  margin-right: -18px;
  position: relative;
  z-index: 1;
}

blockquote strong:first-child {
  margin-left: 8px;
  letter-spacing: 0;
}

blockquote strong:last-child {
  font: 2em "Museo 700";
  text-transform: uppercase;
  letter-spacing: 0;
}

blockquote em {
  border-bottom: 2px dotted #858585;
}

blockquote + b {
  float: right;
  margin-top: 10px;
  font: 1.6em CallunaRegular;
  letter-spacing: 0.15em;
}

blockquote + b:first-letter {
  color: #fff79e;
  font-size: 1.3em;
  font-style: italic;
  letter-spacing: 0.25em;
}
</style>
