<template>
     <!-- add blog -->
  <div
    class="modal fade"
    id="addBlogModal"
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
          <form @submit.prevent="addBlog">
            <div class="form-input">
              <input
                type="text"
                class="form-control"
                v-model="name"
                placeholder="name of blog"
                required
              />
            </div>
            <div class="form-input">
              <input
                type="text"
                class="form-control"
                v-model="number"
                placeholder="number of blog poster"
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
                  v-model="avatar"
                  placeholder="avatar link of blog"
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
</template>
<script>
export default {
    data() {
        return {
     drivers: [],
      name: "",
      number: "",
      avatar: "",
      content: "",
        }
    },
    methods: {
         addBlog() {
      fetch("https://blogs-lilly.herokuapp.com/blogs", {
        method: "POST",
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
          alert("Blog added");
        })
        .catch((err) => {
          alert(err);
        });
    },
    },
}
</script>