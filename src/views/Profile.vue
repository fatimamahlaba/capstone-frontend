<template>
  <!-- <div id="id01" class="w3-modal">
    <div class="w3-modal-content w3-card-4 w3-animate-zoom" style="max-width:600px">

      

      

      <div class="w3-container w3-border-top w3-padding-16 w3-light-grey">
        <button onclick="document.getElementById('id01').style.display='none'" type="button" class="w3-button w3-red">Cancel</button>
        <span class="w3-right w3-padding w3-hide-small">Forgot <a href="#">password?</a></span>
      </div>

    </div>
  </div> -->

<div id="app" class="modal-vue">
<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Edit Profile</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>

      <div class="modal-body">
        <div class="img-center"><br>
        <img src="../assets/Logo.png" alt="Avatar" style="width:30%" class="avatar">
      </div>
      <form class="container">
        <div class="section">
          <label><b>Username</b></label>
          <input class="input border margin-bottom" type="text" placeholder="Enter Username" name="usrname" required>
          <label><b>Password</b></label>
          <input class="input border" type="password" placeholder="Enter Password" name="pass" required>
          <button class="button block green section padding" type="submit">Login</button>
          <input class="check margin-top" type="checkbox" checked="checked"> Remember me
        </div>
      </form>
      </div>

      
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
  
  <!-- overlay -->
  <div class="overlay" v-if="showModal" @click="showModal = false"></div>
  
  <!-- modal -->
  <div class="modal" v-if="showModal">
    <button class="close" @click="showModal = false">x</button>
    <h3>Title</h3>
    <p>Description</p>
  </div>
  
</div>
</template>

<script>
export default {
}
</script>

<style>

</style>