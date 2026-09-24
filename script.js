/* =====================================================================
   script.js — reads the salon content from config.js (window.SITE)
   and puts it into the page. You normally don't need to edit this file;
   change config.js instead.
   ===================================================================== */

var site = window.SITE;

/* Small helper: find an element by its id */
function byId(id) {
  return document.getElementById(id);
}

/* ---------- Colors: copy config colors into CSS variables ---------- */
/* Left: the name in config.js → colors.  Right: the CSS variable it sets in style.css.
   Any color missing from config.js keeps its default from the top of style.css. */
var colorVariables = {
  primary:     "--primary",
  primaryDark: "--primary-dark",
  onPrimary:   "--on-primary",
  accent:      "--accent",
  background:  "--bg",
  surface:     "--surface",
  text:        "--text",
  muted:       "--muted",
  line:        "--line",
  heroFrom:    "--hero-from",
  heroTo:      "--hero-to",
  footerBg:    "--footer-bg",
  footerText:  "--footer-text",
  whatsapp:    "--whatsapp",
  instagram:   "--instagram"
};
var root = document.documentElement.style;
Object.keys(colorVariables).forEach(function (name) {
  if (site.colors[name]) {
    root.setProperty(colorVariables[name], site.colors[name]);
  }
});

/* ---------- 1. Hero ---------- */
/* Salon name: if it contains "&", split it into two lines on phones,
   keeping the "&" with the second part: "Snatched" / "& Nailed".
   (style.css shows each .title-line on its own line on small screens.) */
var title = byId("salon-name");
var ampIndex = site.name.indexOf("&");
if (ampIndex > 0) {
  var line1 = document.createElement("span");
  var line2 = document.createElement("span");
  line1.className = line2.className = "title-line";
  line1.textContent = site.name.slice(0, ampIndex).trim();
  line2.textContent = site.name.slice(ampIndex).trim();
  title.replaceChildren(line1, " ", line2);
} else {
  title.textContent = site.name;
}

byId("tagline").textContent = site.tagline;
byId("intro").textContent = site.shortIntro;

/* Hero photo: only if heroImage is set in config.js.
   Otherwise the hero keeps its gradient (heroFrom / heroTo colors in config.js). */
if (site.heroImage) {
  var hero = byId("hero");
  hero.style.backgroundImage = 'url("' + site.heroImage + '")';
  hero.classList.add("has-photo");
}

/* Logo (top of the page + footer): only shown if logo is set in config.js */
if (site.logo) {
  ["hero-logo", "footer-logo"].forEach(function (id) {
    var img = byId(id);
    img.src = site.logo;
    img.alt = site.name + " logo";
    img.hidden = false;
  });
}

/* Every element with class "js-whatsapp" becomes a WhatsApp link.
   wa.me opens WhatsApp (app on phone, web on desktop) with the message pre-typed. */
var whatsappUrl = "https://wa.me/" + site.whatsappNumber +
                  "?text=" + encodeURIComponent(site.whatsappMessage);
document.querySelectorAll(".js-whatsapp").forEach(function (link) {
  link.href = whatsappUrl;
});

/* Floating WhatsApp button: hide it while the big "Book on WhatsApp"
   button in the hero is on screen (no need for two buttons at once). */
var floatButton = byId("whatsapp-float");
if ("IntersectionObserver" in window) {
  var watcher = new IntersectionObserver(function (entries) {
    var heroButtonVisible = entries[0].isIntersecting;
    floatButton.classList.toggle("is-hidden", heroButtonVisible);
  }, { rootMargin: "-60px 0px 0px 0px" });   // ignore the strip hidden behind the top menu
  watcher.observe(byId("hero-book"));
} else {
  floatButton.classList.remove("is-hidden");   // very old browsers: always show it
}

/* ---------- 2. Services & prices ---------- */
/* Turns a price into text: 20 -> "$20", "from 15" -> "from $15" */
function formatPrice(price) {
  if (typeof price === "number") {
    return site.currency + price;
  }
  // Text prices like "from 0.50 per nail" or "+2": put the currency before the first number
  // (a function is used so a "$" currency isn't mistaken for a special replace code)
  return String(price).replace(/\d/, function (firstDigit) {
    return site.currency + firstDigit;
  });
}

var servicesHtml = "";
site.services.forEach(function (group) {
  servicesHtml += '<div class="card service-group">';
  servicesHtml += "<h3>" + group.category + "</h3>";
  // Optional small note under the category title, e.g. "Russian manicure included"
  if (group.note) {
    servicesHtml += '<p class="category-note">' + group.note + "</p>";
  }
  servicesHtml += "<ul>";
  group.items.forEach(function (item) {
    servicesHtml += "<li>" +
      '<div class="service-row">' +
        '<span class="service-name">' + item.name +
          (item.popular ? ' <span class="badge">Popular</span>' : "") +
        "</span>" +
        '<span class="service-dots"></span>' +
        '<span class="service-price">' + formatPrice(item.price) + "</span>" +
      "</div>" +
      (item.duration ? '<p class="service-duration">' + item.duration + "</p>" : "") +
      (item.note ? '<p class="service-note">' + item.note + "</p>" : "") +
    "</li>";
  });
  servicesHtml += "</ul></div>";
});
byId("services-list").innerHTML = servicesHtml;

/* ---------- 3. Gallery ---------- */
var galleryHtml = "";
site.gallery.forEach(function (photo) {
  galleryHtml += '<button class="gallery-item" type="button">' +
                 '<img src="' + photo.src + '" alt="' + photo.alt + '" loading="lazy">' +
                 "</button>";
});
byId("gallery-grid").innerHTML = galleryHtml;

/* Lightbox: tap a photo to open it big, tap anywhere / press Esc to close */
var lightbox = byId("lightbox");
var lightboxImg = byId("lightbox-img");

function openLightbox(src, alt) {
  lightboxImg.src = src;
  lightboxImg.alt = alt;
  lightbox.hidden = false;
  document.body.style.overflow = "hidden"; // stop the page scrolling behind it
}

function closeLightbox() {
  lightbox.hidden = true;
  document.body.style.overflow = "";
}

document.querySelectorAll(".gallery-item").forEach(function (button) {
  button.addEventListener("click", function () {
    var img = button.querySelector("img");
    openLightbox(img.src, img.alt);
  });
});
lightbox.addEventListener("click", closeLightbox);
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") closeLightbox();
});

/* ---------- 4. About ---------- */
byId("about-title").textContent = site.aboutTitle;
byId("about-image").src = site.aboutImage;
byId("about-image").alt = site.aboutTitle;
byId("about-text").innerHTML = site.aboutText.map(function (paragraph) {
  return "<p>" + paragraph + "</p>";
}).join("");

/* ---------- 5. Location ---------- */
byId("address").textContent = site.address;
byId("map-link").href = site.mapLink;
// Google Maps embed that works without an API key (z=17 = street-level zoom)
byId("map").src = "https://www.google.com/maps?q=" +
                  encodeURIComponent(site.mapQuery) + "&z=17&output=embed";

byId("hours").innerHTML = site.hours.map(function (row) {
  var closedClass = row.time.toLowerCase() === "closed" ? ' class="closed"' : "";
  return "<tr><td>" + row.days + "</td><td" + closedClass + ">" + row.time + "</td></tr>";
}).join("");

/* ---------- 6. Contact ---------- */
document.querySelectorAll(".js-phone").forEach(function (el) {
  el.textContent = site.phoneDisplay;
});
byId("phone-link").href = "tel:+" + site.whatsappNumber;
byId("instagram-link").href = "https://www.instagram.com/" + site.instagramHandle;
byId("instagram-handle").textContent = "@" + site.instagramHandle;

/* ---------- 7. Footer ---------- */
byId("footer-name").textContent = site.name;
byId("year").textContent = new Date().getFullYear();
