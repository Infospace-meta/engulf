<!-- <template>
  <div class="flex justify-center items-center">
    <div class="tradingview-widget-container  max-w-7xl" style="height: 500px; width: 100%">
      <div :id="widgetId" style="height: calc(100% - 32px); width: 100%"></div>
      <div class="tradingview-widget-copyright">
        <a
          href="https://www.tradingview.com/"
          rel="noopener nofollow"
          target="_blank"
        >
          <span class="blue-text">Track all markets on TradingView</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";

let tvScriptLoadingPromise;

export default {
  setup() {
    const widgetId = ref("tradingview_23647");

    const createWidget = () => {
      if (document.getElementById(widgetId.value) && "TradingView" in window) {
        new window.TradingView.widget({
          autosize: true,
          symbol: "NASDAQ:AAPL",
          interval: "D",
          timezone: "Etc/UTC",
          theme: "light",
          style: "1",
          locale: "en",
          enable_publishing: false,
          allow_symbol_change: true,
          container_id: widgetId.value,
        });
      }
    };

    const onLoadScript = () => {
      createWidget();
    };

    onMounted(() => {
      if (!tvScriptLoadingPromise) {
        tvScriptLoadingPromise = new Promise((resolve) => {
          const script = document.createElement("script");
          script.id = "tradingview-widget-loading-script";
          script.src = "https://s3.tradingview.com/tv.js";
          script.type = "text/javascript";
          script.onload = resolve;

          document.head.appendChild(script);
        });
      }

      tvScriptLoadingPromise.then(onLoadScript);
    });

    return {
      widgetId,
    };
  },
};
</script> -->
<template>
  <div
    class="tradingview-widget-container max-w-7xl"
    style="height: 100px; width: 100%"
  >
    <div :id="widgetId" class="tradingview-widget-container__widget"></div>
    <div class="tradingview-widget-copyright">
      <a
        href="https://www.tradingview.com/"
        rel="noopener nofollow"
        target="_blank"
      >
        <span class="blue-text">Track all markets on TradingView</span>
      </a>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const widgetId = ref("tradingview-ticker-tape");
const widgetScriptSrc = ref(
  "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js"
);

const createWidget = () => {
  if (window.TradingView) {
    new window.TradingView.widget({
      symbols: [
        { proName: "FOREXCOM:SPXUSD", title: "S&P 500" },
        { proName: "FOREXCOM:NSXUSD", title: "US 100" },
        { proName: "FX_IDC:EURUSD", title: "EUR to USD" },
        { proName: "BITSTAMP:BTCUSD", title: "Bitcoin" },
        { proName: "BITSTAMP:ETHUSD", title: "Ethereum" },
        { description: "Gold commodity", proName: "OANDA:XAUUSD" },
      ],
      showSymbolLogo: true,
      colorTheme: "light",
      isTransparent: true,
      displayMode: "adaptive",
      locale: "en",
      container_id: widgetId.value,
    });
  } else {
    console.error("TradingView object is not available.");
  }
};

const onLoadScript = () => {
  createWidget();
};

onMounted(() => {
  loadTradingViewScript().then(onLoadScript);
});

const loadTradingViewScript = () => {
  if (!window.TradingView) {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.id = "tradingview-widget-ticker-tape-script";
      script.src = widgetScriptSrc.value;
      script.type = "text/javascript";
      script.onload = resolve;

      document.head.appendChild(script);
    });
  } else {
    return Promise.resolve();
  }
};
</script>
