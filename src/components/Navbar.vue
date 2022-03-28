<template>
    <!-- <header>
        <div class="toggle">
            <i class="fas fa-bars"></i>
        </div>
        <h3>Dashboard</h3>
        <a href="#">
            <i class="fas fa-sign-out-alt"></i>
        </a>
    </header>
    <nav>
        <ul>
            <li>
                <a class="toggle">
                    <span class="icon"><i class="fas fa-bars"></i></span>
                    <span class="title">Menu</span>
                </a>
            </li>
            <li>
                <a href="#">
                    <span class="icon"><i class="fas fa-home"></i></span>
                    <span class="title">Home</span>
                </a>
            </li>
            <li>
                <a href="#">
                    <span class="icon"><i class="fas fa-user"></i></span>
                    <span class="title">Profile</span>
                </a>
            </li>
            <li>
                <a href="#">
                    <span class="icon"><i class="fas fa-envelope"></i></span>
                    <span class="title">Messages</span>
                </a>
            </li>
            <li>
                <a href="#">
                    <span class="icon"><i class="fas fa-info"></i></span>
                    <span class="title">Help</span>
                </a>
            </li>
            <li>
                <a href="#">
                    <span class="icon"><i class="fas fa-cog"></i></span>
                    <span class="title">Setting</span>
                </a>
            </li>
            <li>
                <a href="#">
                    <span class="icon"><i class="fas fa-lock"></i></span>
                    <span class="title">Password</span>
                </a>
            </li>
            <li>
                <a href="#">
                    <span class="icon"><i class="fas fa-sign-out-alt"></i></span>
                    <span class="title">Sign Out</span>
                </a>
            </li>
        </ul>
    </nav> -->
    <header class="p-3 border-bottom">
    <div class="container">
      <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-dark text-decoration-none">
          <svg class="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"><use xlink:href="#bootstrap"/></svg>
        </a>

        <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li><router-link to="/" class="home">Home</router-link></li>
          <li><router-link to="/allblogs" class="blogs">All Posts</router-link></li>
          <li><router-link to="/drivers" class="drivers">Drivers/Learners</router-link></li>
          <!-- <li><a href="#" class="nav-link px-2 link-dark">Products</a></li> -->
        <div class="dropdown">
          <button class="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
            Universities
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
             <li><a class="dropdown-item" href="https://www.uct.ac.za/">UCT</a></li>
             <li><a class="dropdown-item" href="https://www.cput.ac.za/">CPUT</a></li>
             <li><a class="dropdown-item" href="https://www.uwc.ac.za/">UWC</a></li>
             <li><a class="dropdown-item" href="https://www.sun.ac.za/english">STELLIES</a></li>
            </ul>
        </div>
        </ul>

        <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
          <input type="search" class="form-control" placeholder="Search..." aria-label="Search">
        </form>

        <div class="dropdown text-end">
          <a href="#" class="d-block link-dark text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
            <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" class="rounded-circle">
          </a>
          <ul class="dropdown-menu text-small" aria-labelledby="dropdownUser1">
            <router-link to="/profile" class="profile" data-bs-toggle="modal" data-bs-target="#exampleModal">Profile</router-link>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Sign out</a></li>
          </ul>
        </div>
      </div>
    </div>
  </header>
 
</template>

<script>
// export default {
//     setup() {
//      let getSidebar = document.querySelector('nav');
//      let getToggle = document.getElementsByClassName('toggle');
//      for (let i = 0; i <= getToggle.length; i++) {
//      getToggle[i].addEventListener('click', function () {
//      getSidebar.classList.toggle('active');
//     });
// }
//     }
// }

</script>

<style scoped>
/* @font-face {
    font-family: 'robotoregular';
    src: url(../fonts/roboto-regular-webfont.woff) format('woff');
    font-weight: normal;
    font-style: normal;
} */
a{
    color: black;
    text-decoration: none;
    padding: 10px;
}
.active:hover,a.router-link-active{
  border-bottom: 2px solid red;
  padding: 0px ;
  text-decoration: none;
  box-shadow: none;
}
</style>