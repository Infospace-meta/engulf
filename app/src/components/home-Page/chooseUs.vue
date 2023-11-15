<template>
  <div class="flex flex-col mx-auto px-4 items-center justify-center">
    <div class="flex flex-col justify-center gap-5 max-w-7xl">
      <h1 class="justify-center flex font-semibold text-xl">
        Why Choose Pro Forex Investments
      </h1>
      <p class="text-slate-500">
        At Pro Forex Investments, we understand that your financial goals are
        paramount. That's why we stand out as your trusted partner for
        investment growth through cryptocurrency
      </p>
      <div class="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div
          v-for="reason in reasons"
          :key="reason.id"
          :reason="reason"
          class="border border-green-600 p-6 rounded-lg"
        >
          <h1 class="font-semibold">{{ reason.title }}</h1>
          <p class="text-slate-500">{{ reason.paragraph }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const reasons = ref([
  {
    title: "Transparent Governance",
    paragraph:
      "We regularly evaluate and enhance our processes to protect the interests of all our stakeholders.",
  },
  {
    title: "Strategic Focus - Investment Services",
    paragraph:
      "Our primary focus is on providing top-notch investment services. With ProForex, you can trust that your investments are in capable hands.",
  },
  {
    title: "Dedicated Audit Committee ",
    paragraph:
      "To maintain transparency and accountability, we have an Audit Committee in place.",
  },
  {
    title: "Technology-Driven Approach ",
    paragraph:
      "We leverage cutting-edge technologies to provide you with a seamless investment experience.",
  },
  {
    title: "Proactive Risk and Governance Committee",
    paragraph:
      "Our Risk and Governance Committee actively monitors and assesses potential risks in the cryptocurrency marke",
  },
  {
    title: "24/7 Availability ",
    paragraph:
      "We understand that the cryptocurrency market never sleeps. Our support team is available round the clock to assist you with any queries or concerns.",
  },
]);
</script>
