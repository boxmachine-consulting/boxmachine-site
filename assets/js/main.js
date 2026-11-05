(function () {
  var nav = document.getElementById("nav"), hc = document.getElementById("hc"),
      nl = document.getElementById("nl"), mb = document.getElementById("mb");
  var calm = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  function onScroll() {
    var y = window.scrollY, h = window.innerHeight;
    nav.classList.toggle("on", y > h * 0.55);
    if (!calm) { hc.style.opacity = Math.max(0, 1 - y / (h * 0.55)); hc.style.transform = "translateY(" + (y * 0.25) + "px)"; }
  }
  window.addEventListener("scroll", onScroll, { passive: true }); onScroll();
  mb.addEventListener("click", function () { var o = nl.classList.toggle("open"); mb.setAttribute("aria-expanded", o); });
  nl.addEventListener("click", function () { nl.classList.remove("open"); mb.setAttribute("aria-expanded", "false"); });
  document.addEventListener("click", function (e) {
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    var a = e.target.closest && e.target.closest('a[href^="#"]');
    if (!a) return;
    var t = document.getElementById(a.getAttribute("href").slice(1));
    if (!t) return;
    e.preventDefault();
    t.scrollIntoView({ behavior: calm ? "auto" : "smooth", block: "start" });
    if (!t.hasAttribute("tabindex")) t.setAttribute("tabindex", "-1");
    t.focus({ preventScroll: true });
  });
  if (location.hash && history.replaceState) {
    window.addEventListener("load", function () { history.replaceState(null, "", location.pathname + location.search); });
  }
})();
