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
                <a class="nav-link" href="/about"><span class="nav-link-text">About us</span></a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/account"><span class="nav-link-text">Account</span></a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>

    <main>
      <div class="container container-main">
        <h1>My account</h1>
        <table class="container container-table">
          <tr>
              <td>Profile picture</td>
              <td>
                <div class="photo">
                  <!-- <input type="file" @change="onFileSelected"> -->
                  <!-- <div class="profile-picture">{{ $store.state.user.img }}</div> -->
                  <!-- <img src="{{ $store.state.user.img }}" class="profile-picture" alt="profile"> -->
                  <img src="../components/img/photo.png" class="profile-picture" alt="profile">
                  <div class="icon" type="button" @click="uploadImage"><i class="fa-solid fa-camera fa-2xl"></i></div>
                </div>
              </td>
          </tr>
          <tr>
            <td>First Name</td>
            <th>{{user.firstname }}</th>
          </tr>
          <tr>
            <td>Last Name</td>
            <th>{{ user.lastname }}</th>
          </tr>
          <tr>
            <td>Email</td>
            <td>{{ user.email }}</td>
          </tr>
          <tr>
            <td>Sex</td>
            <td>{{ user.gender }}</td>
          </tr>
          <tr>
            <td>Date of birth</td>
            <td>{{ new Date(user.date).toLocaleDateString() }}</td>
          </tr>
          <tr>
            <td>Registration date</td>
            <td>{{ new Date(user.date).toLocaleDateString() }}</td>
          </tr>
        </table>
        <button type="button" @click="logout" class="btn btn-danger">Exit</button>
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
import { mapState } from 'vuex';
import axios from 'axios';



export default{
  components: {
    
  },
  data(){
    return{
      selectedFile: null,
    }
  },
  computed: {
    ...mapState({
      user: state => state.user,
    }),
  },
  methods:{
    async logout(){
    
    await this.$store.dispatch('setToken', null)
    await this.$store.dispatch('setUser', null)
    await this.$store.dispatch('addTimer', null)
    await this.$store.dispatch('deleteTimer', null)
    await this.$store.dispatch('setHaveList', null)
    await this.$store.dispatch('setID', null)
    this.$router.push({
      name: 'main'
    })
  },
    //onFileSelected(event) {
    //   this.selectedFile = event.target.files[0];
    // },
    // // addImage() {
    // //     // Створити інпут типу "файл" для вибору зображення
    // //     const input = document.createElement('input')
    // //     input.type = 'file'

    // //     // Додати обробник події "onchange", який викличе метод uploadImage()
    // //     input.onchange = () => {
    // //       this.uploadImage(input.files[0])
    // //     }

    // //     // Симулювати натискання на інпут для виклику вікна вибору файлу
    // //     input.click()
    // // },
    // async uploadImage(image) {
    //   const fd = new FormData();
    //   fd.append('profileImage', this.selectedFile, this.selectedFile.name);
    //   fd.append('userId', this.user.email);

    //   axios.post('/upload-image', fd)
    //     .then(response => {
    //       console.log(response);
    //       // виконайте необхідні дії при успішному завантаженні
    //     })
    //     .catch(error => {
    //       console.log(error);
    //       // виконайте необхідні дії при помилці завантаження
    //     });
    // }
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

.account{
    visibility: hidden;
}

.nav-link-text{
    font-family: 'Mulish';
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 50px;
    cursor: pointer;
}

.container-fluid .modal-title{
    display: flex;
    justify-content: center;
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
}

/* account-style.css */

main img{
    background-color: white;
    border-radius: 100px;
}

.photo {
  position: relative;
  display: inline-block;
}

.icon{
  width: 50px;
  height: 50px;
  background-color: white;
  border-radius: 100px;
  border: 3px solid black;
  position: absolute;
  top: 80%;
  left: 88%;
  transform: translate(-50%, -50%);
}

.fa-camera {
  position: absolute;
  top: 48%;
  left: 14%;
}

table{
    margin: 20px 0;
}

th,td{
    padding: 5px 0;
}

main div button{
    margin-top: 10vh;
    width: 100px;
}

@media screen and (max-height: 800px)
{ 
    main .container{
        padding-top: 130px;
        overflow: scroll;
        height: 95vh;
    }
     main .container-table{
        height: 100%;
    } 

    main .container::-webkit-scrollbar {
        width: 10px;
      }
      
    main .container::-webkit-scrollbar-thumb {
        background-color: #a3c2fd;
        border-radius: 10px;
        padding-top: 100px;
      }
    
    main .container::-webkit-scrollbar-corner{
        visibility: hidden;
      }

    main div button{
        margin-top: 10px;
    }

    table{
        margin: 10px 0;
    }
    
}

</style>
