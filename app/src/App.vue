<template>
  <div class="min-h-screen bg-white">
    <Header />
    <div class="mt-4">
      <RouterView />
    </div>
    <Footer />
  </div>
</template>

<script setup>
import { RouterView } from "vue-router";
import Header from "./components/header.vue"
import Footer from "./components/footer.vue"
</script>

<style scoped></style>
