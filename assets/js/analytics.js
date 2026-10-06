(function () {
    var id = "G-KWK96N34RF";

    window.dataLayer = window.dataLayer || [];
    window.gtag = function () {
        window.dataLayer.push(arguments);
    };
    window.gtag("js", new Date());
    window.gtag("config", id, { anonymize_ip: true });

    var script = document.createElement("script");
    script.async = true;
    script.src = "https://www.googletagmanager.com/gtag/js?id=" + encodeURIComponent(id);
    document.head.appendChild(script);

    window.zoomTrack = function (name, params) {
        window.gtag("event", name, params || {});
    };

    document.addEventListener("click", function (event) {
        var target = event.target;
        if (!(target instanceof Element)) return;
        var link = target.closest("a");
        if (!link) return;
        var href = link.getAttribute("href") || "";
        if (href.indexOf("https://wa.me/") === 0) {
            window.zoomTrack("whatsapp_click", { link_url: href.split("?")[0] });
        } else if (href.indexOf("mailto:") === 0) {
            window.zoomTrack("email_click", { link_url: href.split("?")[0] });
        } else if (href.indexOf("tel:") === 0) {
            window.zoomTrack("phone_click", { link_url: href });
        }
    });
})();
