export default defineNuxtPlugin(() => {
  if (document.getElementById("site-traffic-loader")) return;
  const script = document.createElement("script");
  script.id = "site-traffic-loader";
  script.src = "/traffic.js";
  script.defer = true;
  document.head.appendChild(script);
});
