<template>
  <div class="flex justify-center items-center">
    <div
      class="tradingview-widget-container max-w-7xl p-4"
      style="height: 500px; width: 100%"
    >
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
</script>
