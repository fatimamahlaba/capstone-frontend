<template>
  <section>
    <button
      type="button"
      class="button btn-primary"
      data-bs-toggle="modal"
      data-bs-target="#addDriverModal"
    >
     Create blog
    </button>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <div class="row mb-2 bg-light" v-for="driver in drivers" :key="driver">
          <button
            type="button"
            class="button btn-primary"
             data-bs-toggle="modal"
             data-bs-target="#editDriverModal"
          >
            Update blog
          </button>
   <button
            type="button"
            class="button btn-primary"
            v-on:click="removeDriver(driver._id)"
          >
            Delete blog
          </button>
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
  data() {
    return {
      blogs: [],
      name: "",
      number: "",
      avatar: "",
      content: "",
    };
  },
  methods: {
   
    removeBlog(id) {
      console.log(id);
      fetch("http://capstone-final-backend.herokuapp.com/drivers" + id, {
        method: "DELETE",
      })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        alert("Blog deleted successfully");
      })
      .catch((err) => {
        alert(err);
      });
    },
       },
  mounted() {
    fetch("http://capstone-final-backend.herokuapp.com/drivers")
      .then((res) => res.json())
      .then((data) => {
        this.blogs = data;
        console.log(data, this.blogs);
      });
  },
};
</script>

<style>

</style>