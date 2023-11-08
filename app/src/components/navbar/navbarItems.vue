<template>
  <nav
    :class="{ hidden: close, 'sm:max-lg:flex': open }"
    class="sm:max-lg:z-20 flex flex-col lg:flex lg:flex-row sm:max-lg:w-4/5 absolute lg:relative lg:top-auto top-20 right-0 left-40 h-screen md:h-auto bg-white max-lg:shadow-2xl"
    id="nav-content"
  >
    <ul class="flex flex-col lg:flex-row lg:mr-5 p-4">
      <li
        v-for="section in sections"
        :key="section.id"
        class="lg:mr-5 p-4 text-lg max-lg:border-b border-orange-700 cursor-pointer font-medium hover:text-blue-700"
      >
        <a
          @click="scrollToSection(section.id)"
          :class="{
            'text-red-500': currentSection === section.id,
          }"
          >{{ section.title }}
        </a>
      </li>
    </ul>
  </nav>
  <div
    class="flex items-center right-0 h-full pl-4 ml-6 border-l-0 lg:border-l border-orange-700"
  >
    <button
      data-collapse-toggle="navbar-sticky"
      type="button"
      class="text-sm pl-2 text-white rounded-lg lg:hidden focus:outline-none"
      aria-controls="navbar-sticky"
      aria-expanded="false"
      @click="toggleMenu"
    >
      <span class="sr-only">Open main menu</span>
      <h1 class="text-xl mr-4 text-gray-900 hover:text-blue-700">Menu</h1>
    </button>
  </div>
</template>

<script setup>
import { ref } from "vue";

const sections = ref([
  { id: "hero", title: "Home" },
  { id: "about", title: "About" },
  { id: "strategies", title: "Strategies" },
  { id: "contact", title: "Contact" },
]);

const close = ref(true);
const open = ref(false); // Set open to false initially

const toggleMenu = () => {
  const navContent = document.getElementById("nav-content");
  close.value = !close.value;
  open.value = !open.value;
};

const currentSection = ref(null);

const scrollToSection = (sectionId) => {
  currentSection.value = sectionId;
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};
</script>
