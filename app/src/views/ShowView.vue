<template>
  <div id="hero" class="scroll-target">
    <Hero />
  </div>
  <div id="strategy" class="scroll-target">
    <Strategies />
  </div>
  <div id="strategies" class="scroll-target">
    <StrategyAccordion />
  </div>
  <div id="about" class="scroll-target">
    <About />
  </div>
  <div id="subscription" class="scroll-target">
    <Subscription />
  </div>
  <div id="subscription" class="scroll-target">
    <Testimonials />
  </div>
  <div id="chooseus" class="scroll-target">
    <ChooseUs />
  </div>
  <div id="faqs" class="scroll-target">
    <Faqs />
  </div>
  <div id="contact" class="scroll-target">
    <ContactUs />
  </div>

  <!-- <StrategiesModal /> -->
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
import Testimonials from "../components/home-Page/testimonials.vue";
</script>
