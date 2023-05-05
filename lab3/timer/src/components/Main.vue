<template>
<body>
    <header class="container-fluid">
      <nav class="navbar navbar-expand-xl ">
        <div class="container-fluid">
          <a class="navbar-brand" href="/"> 
            <img src="./img/stopwatch.svg" class="logo" alt="logo">
            <span class="navbar-text text-black">Time is money</span>
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
            <span class="navbar-toggler-icon"></span>
          </button>
          
          <div class="collapse navbar-collapse" id="mynavbar">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/"><span class="nav-link-text">Timer</span></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/about"><span class="nav-link-text">About us</span></a>
              </li>
              <li class="nav-item">
                <a v-if="!$store.state.isUserLoggedIn" class="nav-link singin" aria-current="page"  data-bs-toggle="modal" data-bs-target="#SingIn"><span class="nav-link-text">Sign In</span></a>
                <a v-if="$store.state.isUserLoggedIn" class="nav-link account" aria-current="page" href="/account"><span class="nav-link-text">Account</span></a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>

    <div class="modal fade" id="SingIn" tabindex="-1" aria-labelledby="ModalLabel1"  aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
              <div class="container-fluid">
                <h3 class="modal-title" id="ModalLabel1">Sing In</h3>
              </div>
              <button class="btn-close" data-bs-dismiss="modal" aria-label="close"></button>
            </div>
            <div class="modal-body">
              <div class="form-floating mb-4">
                <input type="email" class="form-control" v-model="email" placeholder="name@example.com">
                <label for="floatingInput">Email</label>
              </div>
              <div class="form-floating mb-4">
                <input type="password" class="form-control" v-model="password" placeholder="Password">
                <label for="floatingPassword">Password</label>
              </div>
              <a type="button mb-4" @click="login" class="btn btn-success">Sign In</a> 
              <!-- href="./account.html" -->
              <h4>Don't have an account yet? <button class="btn btn-link" data-bs-toggle="modal" data-bs-target="#SingUp">Sign up</button></h4>
            </div>
        </div>
      </div>
    </div>

    <div class="modal fade" id="SingUp" tabindex="-1" aria-labelledby="ModalLabel1"  aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
              <div class="container-fluid">
                <h3 class="modal-title" id="ModalLabel1">Registration</h3>
              </div>
              <button class="btn-close" data-bs-dismiss="modal" aria-label="close"></button>
            </div>
            <div class="modal-body">
              <div class="form-floating mb-4">
                <input type="name" class="form-control" id="floatingInput" v-model="firstname" placeholder="FirstName">
                <label for="floatingInput">First Name</label>
              </div>
              <div class="form-floating mb-4">
                <input type="name" class="form-control" id="floatingInput" v-model="lastname" placeholder="LastName">
                <label for="floatingInput">Last Name</label>
              </div>
              <div class="form-floating mb-4" >
                <input type="email" class="form-control" id="floatingInput"  v-model="email" placeholder="name@example.com">
                <label for="floatingInput">Email</label>
              </div>
              <div class="form-group mb-4" id="date">
                <datepicker v-model="selectedDate" type="text" class="form-control" id="date" placeholder="Date of birth" style="width: 100%; height: 58px;"/>
              </div>
              <div class="form-group mb-4 select form">
                <select class="selectpicker form-control" id="select" data-live-search="true" v-model="gender" required>
                  <option value="">Select gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
              <div class="form-floating mb-4">
                <input type="password" class="form-control" id="floatingPassword" v-model="password" placeholder="Password">
                <label for="floatingPassword">Password</label>
              </div>
              <div class="error mb-2" v-html="error" />
              <a  type="button mb-4"  @click="register" class="btn btn-success">Sign Up</a>
              <!-- href="./account.html" -->
              <h4>Are you already registered? <button class="btn btn-link" data-bs-toggle="modal" data-bs-target="#SingIn">Sign in</button></h4>
            </div>
        </div>
      </div>
    </div>

    <main>
      <div class="container">
        <h1>Track your time</h1>
        <div class="timer">
          <h2 class="time" id="currentTime">00:00</h2>
          <div class="bnts-timer">
            <button class="btn btn-success"  id="start-btn"><i class="fas fa-regular fa-play"></i></button>
            <button class="btn btn-warning"  id="resume-pause-btn"><i class="fas fa-regular fa-play"></i><i class="fas fa-solid fa-stop"></i></button>
            <button class="btn btn-danger" id="stop-btn"><i class="fas fa-solid fa-stop"></i></button>
          </div>
          <input class="form-control " type="text" placeholder="Name this timer" aria-label="t_name" id="timerName"> 
          <p v-if="!$store.state.isUserLoggedIn" style="color: red;"> You can save if you sing in </p>
          <button v-if="!$store.state.isUserLoggedIn" class="btn btn-outline-light centered disabled" id="save-btn">Save</button>
          <button v-if="$store.state.isUserLoggedIn" class="btn btn-outline-light centered" id="save-btn">Save</button>
          <!-- <button class="btn btn-outline-light centered" @click="loadData">load</button> -->
        </div>

        <div v-if="$store.state.timers" id="listItem">
            <div id="listItemCenter" class="col-11 col-sm-10 col-md-8 col-lg-6 col-xl-5 center ">
              <template v-for="timer in $store.state.timers" :key="timer.id">
              <p v-if="new Date(timer.startTime).toLocaleDateString() === new Date(timer.endTime).toLocaleDateString()">
                <div>
                  <b>{{ timer.name }}</b>
                  <!-- <button id="close" class="btn">
                  <i class="fas fa-times close-icon"></i>
                </button> -->
                  <span style="float:right;">
                    {{ timer.minutes.toString().padStart(2, '0') }}:{{ timer.seconds.toString().padStart(2, '0') }} {{ new Date(timer.startTime).toLocaleDateString() }} {{ new Date(timer.startTime).getHours().toString().padStart(2, '0') }}:{{ new Date(timer.startTime).getMinutes().toString().padStart(2, '0') }}:{{ new Date(timer.startTime).getSeconds().toString().padStart(2, '0') }} - {{ new Date(timer.endTime).getHours().toString().padStart(2, '0') }}:{{ new Date(timer.endTime).getMinutes().toString().padStart(2, '0') }}:{{ new Date(timer.endTime).getSeconds().toString().padStart(2, '0') }}
                  </span>
                </div>
              </p>
              <p v-else> 
                <div>
                  <b>{{ timer.name }}</b>
                  <!-- <button id="close" class="btn">
                  <i class="fas fa-times close-icon"></i>
                </button> -->
                  <span style="float:right;">
                    {{ timer.minutes.toString().padStart(2, '0') }}:{{ timer.seconds.toString().padStart(2, '0') }} {{ new Date(timer.startTime).toLocaleDateString() }} {{ new Date(timer.startTime).getHours().toString().padStart(2, '0') }}:{{ new Date(timer.startTime).getMinutes().toString().padStart(2, '0') }}:{{ new Date(timer.startTime).getSeconds().toString().padStart(2, '0') }} - {{ new Date(timer.endTime).toLocaleDateString() }} {{ new Date(timer.endTime).getHours().toString().padStart(2, '0') }}:{{ new Date(timer.endTime).getMinutes().toString().padStart(2, '0') }}:{{ new Date(timer.endTime).getSeconds().toString().padStart(2, '0') }}
                  </span>
                </div>
              </p>
            </template>
            </div>  
          </div>
      </div>     
    </main>
    
    <footer class="bg-dark text-white>">
         <div class="container text-white">
            © 2023 Made by Illia Stetsiurenko.
            <a class="text-white" href="https://github.com/Stetsiurenko-Illia/Web-design">Github repository</a>
        </div>
    </footer>

</body>
   
</template>


<script>
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';
import '@fortawesome/fontawesome-free/css/all.css';
import 'jquery';
import AuthenticationService from '@/services/AuthenticationService'
import Datepicker from 'vue3-datepicker';
import 'vue3-datepicker/dist/vue3-datepicker.css';
import Controller from "./scripts/controller/Controller";
import ListService from '@/services/ListService'
import axios from 'axios';
import store from '../store/store'




export default {
  components: {
    Datepicker,
  },

  data() {
    return {
      firstname: '',
      lastname: '',
      email: '',
      selectedDate: null,
      gender: '',
      password: '',
      error: null,
      timers: null,
      message: 'Are you sure you want to leave?'
    }
  },

  mounted() {
    const controller = new Controller();
    window.addEventListener('beforeunload', this.handleBeforeUnload);
    this.loadData();
  },


  beforeUnmount() {
    window.removeEventListener('beforeunload', this.handleBeforeUnload);
  },

  setup() {
    
  },

  methods: {
    async loadData() {
      try {
        console.log(store.state)
        const response = await ListService.index({email: store.state.user.email})
        this.$store.commit('updateTimers', response.data) // оновити дані у стані магазину
        console.log(response.data)
        console.log(store.state)
      } catch (error) {
        console.error(error)
      }
    },

    async handleBeforeUnload(event) {
      event.preventDefault();
      event.returnValue = this.message;
      console.log('save')
      try{
        const response = await ListService.postTimer({email: store.state.user.email, timers: store.state.timers})
        console.log(response.data)
      }
     catch (error) {
        console.error(error)
      }      
    },

    async register() {
      try {
        const response = await AuthenticationService.register({
          firstname: this.firstname,
          lastname: this.lastname,
          email: this.email,
          date: this.selectedDate,
          gender: this.gender,
          password: this.password,
        })

        await this.$store.dispatch('setToken', response.data.token)
        await this.$store.dispatch('setUser', response.data.user)
        console.log(response.data)
        this.$router.push({
          name: 'account'
        })

      } catch (error) {
        this.error = error.response.data.error;
      }
    },
    async login() {
      let response;
      try {
        response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        })

        await this.$store.dispatch('setToken', response.data.token)
        await this.$store.dispatch('setUser', response.data.user)
        console.log(response.data)
        this.$router.push({
          name: 'account'
        })

      } catch (error) {
        this.error = error.response.data.error;
      }
    }
  },

  

}


</script>

<style scoped>

/* style.css */
html,body{
    height: 100vh;
    width: 100vw;
    padding:0;
    margin:0;
}

header{
    position: absolute;
    z-index: 1;
    background-color: white;
}

.navbar{
    height: 100%;
}

.navbar .container-fluid{
    display: flex;
    align-items:center ;
}

.navbar-brand{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-right: 10vw ;
}

.logo{
    width: 85px;
    height: 85px;
    margin: 0px 60px;
}

.navbar-text{
    padding: 0;
    font-family: 'PT Sans';
    font-style: italic;
    font-weight: 700;
    font-size: 40px;
    line-height: 50px;
}

.nav-item{
    margin: 0 20px;
    display: flex;
}

/* .singin{
    visibility: hidden;
} */

/* .account{
    visibility: hidden;
} */

.nav-link-text{
    font-family: 'Mulish';
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 50px;
    cursor: pointer;
}

.modal-body{
    display: flex;
    flex-direction: column;
    align-items: center;
}

.form-control {
    width: 400px;
}

.container-fluid .modal-title{
    display: flex;
    justify-content: center;
}
.modal h3{
    font-family: 'PT Sans';
    font-style: italic;
    font-weight: 700;
    font-size: 25px;
    line-height: 32px;
 
}

.modal h4{
    font-family: 'PT Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 21px;

    display: flex;
    align-items: center;
}

.modal #date{
  width: 400px;
  height: 58px;
}

.modal #select{
  height: 58px;
}

.modal .error{
  color: red;
}

.modal h4 button{
    text-decoration: none;
}

main{
    background: linear-gradient(89.97deg, #BDD4FF 0.02%, #002366 99.98%);
    height: 95%;
} 

main .container{
    padding-top: 18vh;
}

footer{
    height: 5vh;
    display: flex;
    align-items: center;
    justify-content: center;
}

@media screen and (max-width: 1199px) { 
    .navbar .container-fluid {justify-content: space-around;} 
    .navbar-collapse{
        display: flex;
        align-items: center ;
        justify-content: center;
        margin: 0;
        border-top: solid 1px;
    }
}

@media screen and (max-width: 630px)
{ 
    .navbar-text {display: none;}
    .logo {margin: auto 30px;}
    footer div{font-size: 15px;}
    .modal input{width: 80vw;}
    .modal #select{width: 80vw;}
    .modal #date{width: 80vw;}
}

@media screen and (max-height: 800px)
{ 
    main .container{
        padding-top: 130px;
        overflow: scroll;
        height: 95vh;
    }

    main .container::-webkit-scrollbar {
        width: 10px;
      }
      
    main .container::-webkit-scrollbar-thumb {
        background-color: #a3c2fd;
        border-radius: 10px;
      }
    
    main .container::-webkit-scrollbar-corner{
        visibility: hidden;
      }

}

/* timer.css */



main h1{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-family: 'PT Sans';
    font-style: italic;
    font-weight: 400;
    font-size: 48px;
    line-height: 62px;
    color: white;
}

.timer{
    width: fit-content;
    height: fit-content;
    margin: 40px auto;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid;
    border-radius: 10px;
}

.time{
    font-family: 'Mulish';
    font-style: normal;
    font-weight: 400;
    font-size: 50px;
    line-height: 62px;
    margin: 16px 0;
    color: white;
}

.bnts-timer .btn{
    margin: 0px 10px;
}

.bnts-timer i{
    color: white;
}

.bnts-timer .btn-warning i{
    margin: 0 2px;
}

.timer input{
    margin: 28px 0;
}

#listItem{
  display: flex;
  overflow: scroll;
  height: 25vh;
  color: white;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: center;
}
 
  #listItem::-webkit-scrollbar {
    width: 10px;
  }
  
  #listItem::-webkit-scrollbar-thumb {
    background-color: #a3c2fd;
    border-radius: 10px;
  }

  #listItem::-webkit-scrollbar-corner{
    visibility: hidden;
  }

  #listItem #close{
    float:right;
    background-color: transparent;
    border: none;
    margin-left: 30px;
    padding: 0 ;
  }

  .close-icon{
    /* width:25px;
    height:25px; */
    cursor: pointer;
    color: black;   
  }
  
  .close-icon:hover{
    color: #a3c2fd;
  }

  .fake-btn{
    display: none;
  }
@media screen and (max-width: 450px)
{ 
    .timer{ width: 90vw;}
    .timer input{width: 87vw;}
    main h1{font-size: 36px;}
    #listItem #close{
      margin-left: 10px;
      display: flex;
    }
    #listItem div{
      font-size: small;
    }
}

@media screen and (max-height: 900px)
{ 
  #listItem{
    height: 17vh;
  }
  .timer{
    margin-bottom: 10px;
  }

}

</style>
