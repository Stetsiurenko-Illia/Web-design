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
                <a class="nav-link" aria-current="page" href="/"><span class="nav-link-text">Timer</span></a>
              </li>
              <li class="nav-item">
                <a class="nav-link  active" href="/about"><span class="nav-link-text">About us</span></a>
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
          <p class="descr">
            Each team has separate tasks and one common goal.
            The more efficiently the work on the tasks goes, the faster the team approaches the goal and the fewer mistakes it makes on its way.
            <br><br>
            The lack of accounting for working hours is the main reason for the "lame" time management of the entire team.
            When a manager, project manager or client does not understand "why it is taking so long" or "what is working time spent on, if there is no result" - employee time accounting comes to the rescue.
            Usually, companies keep track of time using a time sheet and indicate the time spent on a task at the end of the working week in an Excel spreadsheet.
            This method of time accounting is a headache: the data is inaccurate, people forget to enter data or enter it very roughly, it is inconvenient to compile a report.
            <br><br>
            Employees can use our <a href="/main">time tracker</a> to track their time.
          </p>
          <div class="img-btn">
            <img src="./img/timer.png" class="logo-big" alt="logo">
            <p> Our timer will make you work.</p>
            <a class="btn btn-outline-warning" href="/main">Try now</a>
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


export default{
  components: {
    Datepicker,
  },
  data(){
    return{
      firstname: '',
      lastname: '',
      email: '',
      selectedDate: null,
      gender: '',
      password: '',
      error: null
    }
  },

  methods:{
    async register () {
      try{
        const response = await AuthenticationService.register({
        firstname:  this.firstname,
        lastname:  this.lastname,
        email: this.email,
        date: this.selectedDate,
        gender: this.gender,
        password: this.password
      })

      await this.$store.dispatch('setToken', response.data.token)
      await this.$store.dispatch('setUser', response.data.user)
      console.log(response.data)

      } catch(error){
        this.error = error.response.data.error;
      }
    },
    async login () {
      let response;
      try{
        response = await AuthenticationService.login({
        email: this.email,
        password: this.password
      })

      await this.$store.dispatch('setToken', response.data.token)
      await this.$store.dispatch('setUser', response.data.user)
      console.log(response.data)

      } catch(error){
        this.error = error.response.data.error;
      }
     
    }
  }

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
    padding-top: 22vh;
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

/* about-style.css */

main{
    display: flex;
}
main .container{
   
    display: flex;
    flex-direction: column;
    align-items: center;
    
}

main .img-btn{
    display: flex;
    flex-direction: column;
    align-items: center;
}

p{
    font-family: 'Mulish';
    font-style: medium;
    font-weight: 500;
    color: white;
    font-size: medium;
}

p a{
    color: yellow;
    text-decoration: none;
}

main img{
    margin: 40px 0 10px 0;
    height: 150px;
}

main .img-btn p{
    margin: 10px;
}


@media screen and (max-width: 450px)
{ 
    main .container{
        padding-top: 12vh;
        justify-content: space-around;
    }
    .descr{
        height: 300px;
        overflow: scroll;
    }
    .descr::-webkit-scrollbar {
        width: 5px;
      }
      
    .descr::-webkit-scrollbar-thumb {
        background-color: #a3c2fd;
        border-radius: 10px;
      }
    
    .descr::-webkit-scrollbar-corner{
        visibility: hidden;
      }
    main .img-btn img{
        margin-top: -50px;
    }
}

</style>
