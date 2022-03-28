<template>
  <section>
    <button
      type="button"
      class="button btn-danger"
      data-bs-toggle="modal"
      data-bs-target="#addDriverModal"
    >
     Create blog
    </button>

<div
    class="modal fade"
    id="addDriverModal"
    tabindex="1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Create A Blog</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="addBlog">

            <div class="form-input">
              <input
                type="text"
                class="form-control"
                v-model="title"
                placeholder="title of blog"
                required
              />
            </div>
            <div class="form-input">
              <input
                type="text"
                class="form-control"
                v-model="price"
                placeholder="price of item on blog"
                required
              />
            </div>
            <div class="form-input">
              <input
                type="text"
                class="form-control"
                v-model="content"
                placeholder="content of blog"
                required
              />
              <div class="form-input">
                <input
                  type="text"
                  class="form-control"
                  v-model="img"
                  placeholder="image link of blog"
                  required
                />
              </div>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
          <button type="submit" class="btn btn-primary" v-on:click="addBlog()">
            Save changes
          </button>
        </div>
      </div>
    </div>
  </div>

    <div class="carousel-inner">
      <div class="carousel-item active">
        <div class="row mb-2 bg-light" v-for="driver in drivers" :key="driver">
          <div class="col-lg-6">
            <img :src="driver.avatar" class="d-block w-100" alt="..." />
          </div>
          <div class="col-lg-6">
            <div class="d-flex flex-column justify-content-center my-5 px-3">
              <p class="review text-center">{{ driver.name }}</p>
              <div
                class="name d-flex align-items-center justify-content-center"
              >
                <span class="fas fa-minus pe-1"></span>
                <p class="m-0">{{ driver.content }}</p>
                <p>{{ driver.number }}</p>
                
                   <button
            type="button"
            class="button btn-danger"
            v-on:click="removeBlog(driver._id)"
          >
            Delete blog
          </button>
               <button
            type="button"
            class="button btn-danger"
             data-bs-toggle="modal"
             data-bs-target="#editDriverModal"
          >
            Update blog
          </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

 

</template>

<script>
export default {
// name: "Drivers",
// data() {
//   return { 
//     drivers: [],
//   };
computed: {
  drivers(){
    return this.$store.state.drivers;
  },
},
methods: {
   remove(id){
    console.log(this.drivers)
    return this.$store.dispatch('remove', id);
  }
},
  
mounted() {  
  // DISPATCH runs an ACTION
  this.$store.dispatch('getDrivers')
},
};
// };
</script>

<style>

</style>