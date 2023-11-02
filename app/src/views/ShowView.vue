<template>
  <Hero />
  <Strategies />
  <!-- <StrategiesModal /> -->
  <StrategyAccordion />
  <About />
  <Subscription />
  <ChooseUs />
  <Faqs />
  <ContactUs />
</template>
<script setup>
import Subscription from "../components/home-Page/Subscription.vue";
import About from "../components/home-Page/about.vue";
import ChooseUs from "../components/home-Page/chooseUs.vue";
import ContactUs from "../components/home-Page/contactsUs.vue";
import Faqs from "../components/home-Page/faqs.vue";
import Hero from "../components/home-Page/hero.vue";
import Strategies from "../components/home-Page/strategies/strategies.vue";
//import StrategiesModal from "../components/home-Page/strategies/strategiesModal.vue";
import StrategyAccordion from "../components/home-Page/strategies/strategiesAccordian.vue";
</script>
