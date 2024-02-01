<template>
  <meta
    http-equiv="Content-Security-Policy"
    content="script-src 'self' 'unsafe-inline' 'unsafe-eval' https://s3.tradingview.com;"
  />

  <div
    class="flex max-md:justify-center max-md:items-center max-md:text-center lg:flex-row lg:justify-center lg:items-center h-screen pattern-plus-red-50/100"
  >
    <div class="">
      <h1 class="text-5xl font-semibold">
        It's time to elevate <br />your<span class="text-red-500">
          financial future</span
        >
      </h1>
      <p class="py-5 text-lg">
        Discover a world of financial opportunities with Pro Forex Investments.
      </p>
      <div class="flex gap-5">
        <router-link
          :to="{ name: 'home' }"
          class="bg-slate-400 text-white p-2 rounded-md"
          >Enroll with Us</router-link
        >
        <router-link
          :to="{ name: 'home' }"
          class="bg-red-500 text-white p-2 rounded-md"
          >Contact</router-link
        >
      </div>
    </div>
    <div class="flex justify-center items-center">
      <!-- <img
        src="src/assets/images/heroImage.jpg"

        alt="heroImage"
        class="h-76 lg:h-96"
      /> -->
      <div
        class="tradingview-widget-container max-md:hidden"
        ref="widgetContainer"
      ></div>
    </div>
  </div>
</template>

<script setup>
// Import necessary Vue features
import { ref, onMounted } from "vue";

// Create a reference to the widget container
const widgetContainer = ref(null);

onMounted(() => {
  const script = document.createElement("script");
  script.type = "text/javascript";
  script.src =
    "https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js";
  script.async = true;

  // Simplified widget configurations for illustration
  const widgetConfig = {
    colorTheme: "light",
    dateRange: "1D",
    showChart: true,
    locale: "en",
    largeChartUrl: "",
    isTransparent: true,
    showSymbolLogo: true,
    showFloatingTooltip: false,
    width: "500",
    height: "500",
    plotLineColorGrowing: "rgba(106, 168, 79, 1)",
    plotLineColorFalling: "rgba(255, 0, 0, 1)",
    gridLineColor: "rgba(240, 243, 250, 0)",
    scaleFontColor: "rgba(106, 109, 120, 1)",
    belowLineFillColorGrowing: "rgba(106, 168, 79, 0.12)",
    belowLineFillColorFalling: "rgba(255, 0, 0, 0.12)",
    belowLineFillColorGrowingBottom: "rgba(41, 98, 255, 0)",
    belowLineFillColorFallingBottom: "rgba(255, 0, 0, 0)",
    symbolActiveColor: "rgba(182, 182, 182, 0.12)",
    tabs: [
      {
        title: "Indices",
        symbols: [
          { s: "OANDA:XAUUSD", d: "GOLD" },
          { s: "FX:EURUSD", d: "US/EURO" },
          { s: "FX:USDJPY", d: "US DOLLAR / YEN" },
        ],
        originalTitle: "Indices",
      },
      {
        title: "Futures",
        symbols: [
          { s: "CME_MINI:ES1!", d: "S&P 500" },
          { s: "CME:6E1!", d: "Euro" },
          { s: "COMEX:GC1!", d: "Gold" },
          { s: "NYMEX:CL1!", d: "WTI Crude Oil" },
          { s: "NYMEX:NG1!", d: "Gas" },
          { s: "CBOT:ZC1!", d: "Corn" },
        ],
        originalTitle: "Futures",
      },
      {
        title: "Bonds",
        symbols: [
          { s: "CBOT:ZB1!", d: "T-Bond" },
          { s: "CBOT:UB1!", d: "Ultra T-Bond" },
          { s: "EUREX:FGBL1!", d: "Euro Bund" },
          { s: "EUREX:FBTP1!", d: "Euro BTP" },
          { s: "EUREX:FGBM1!", d: "Euro BOBL" },
        ],
        originalTitle: "Bonds",
      },
      {
        title: "Forex",
        symbols: [
          { s: "FX:EURUSD", d: "EUR to USD" },
          { s: "FX:GBPUSD", d: "GBP to USD" },
          { s: "FX:USDJPY", d: "USD to JPY" },
          { s: "FX:USDCHF", d: "USD to CHF" },
          { s: "FX:AUDUSD", d: "AUD to USD" },
          { s: "FX:USDCAD", d: "USD to CAD" },
        ],
        originalTitle: "Forex",
      },
    ],
  };

  script.text = `new TradingView.MarketWidget(${JSON.stringify(widgetConfig)})`;

  widgetContainer.value.appendChild(script);
});
</script>
