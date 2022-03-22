<template>
  <div class="container">
    <div class="product" v-if="products">
      <div v-for="(product, index) of products" :key="index.id">
      <div class="product-card">
        <h2 class="name">{{ title }}</h2>
        <span class="price">{{ price }}</span>
        <a class="popup-btn" >Quick View</a>
        <img :src='product.img' class="product-img" alt="">
      </div>
      <div class="popup-view">
        <div class="popup-card">
          <a><i class="fas fa-times close-btn"></i></a>
          <div class="product-img">
            <img :src='product.img' alt="">
          </div>
          <div class="info">
            <h2>{{ title }}</h2>
            <p> {{ description }}</p>
            <span class="price">{{ price }}</span>
            <a href="#" class="add-cart-btn">Add to Cart</a>
            <a href="#" class="add-wish">Add to Wishlist</a>
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>