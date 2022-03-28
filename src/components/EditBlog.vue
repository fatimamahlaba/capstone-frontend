<template>
  <!-- edit blog -->
  <div
    class="modal fade"
    id="editBlogModal"
    tabindex="1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Modal title</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="editBlog">
            <p>Update your blog here.</p>

            <div class="form-input">
              <i class="fa fa-lock"></i>
              <input
                type="text"
                class="form-control"
                v-model="driver.name"
                placeholder="title of blog"
                required
              />
            </div>
            <div class="form-input">
              <i class="fa fa-lock"></i>
              <input
                type="text"
                class="form-control"
                v-model="driver.number"
                placeholder="price of item on blog"
                required
              />
            </div>
            <div class="form-input">
              <i class="fa fa-lock"></i>
              <input
                type="text"
                class="form-control"
                v-model="driver.content"
                placeholder="content of blog"
                required
              />
              <div class="form-input">
                <i class="fa fa-lock"></i>
                <input
                  type="text"
                  class="form-control"
                  v-model="driver.avatar"
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
            class="btn btn-danger"
            data-bs-dismiss="modal"
          >
            Close
          </button>
          <button
            type="submit"
            class="btn btn-danger"
            v-on:click="editBlog(id)"
          >
            Save changes
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["blog"],
    mounted(){
        console.log("This is the blog I want to edit: ", this.blog)
    },
  methods: {
    editBlog(_id) {
      fetch("http://capstone-final-backend.herokuapp.com/drivers" + _id, {
        method: "PATCH",
        body: JSON.stringify({
          name: this.name,
          avatar: this.avatar,
          number: this.number,
          content: this.content,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          alert("Blog edited successfully");
        })
        .catch((err) => {
          alert(err);
        });
    },
  },
};
</script>