/* =====================================================================
   config.js — ALL the salon's content lives here.
   Edit the values below and refresh the page to see your changes.
   Keep the quotes "..." and commas , exactly as they are.

   NOTE: The page title, Google description and link-preview text are
   also written at the top of index.html (Google and WhatsApp previews
   can't read this file). If you change the name or address here,
   update them there too.
   ===================================================================== */

window.SITE = {

  /* ---------- 1. Basics ---------- */
  name: "Snatched & Nailed",
  tagline: "Nails that scream confidence.",
  shortIntro: "Hygiene • Precision • Aesthetic. Manicures, pedicures and nail designs in Sin El Fil, Beirut.",
  // Big photo behind the top of the page. Leave empty ("") to use the soft pink gradient instead.
  heroImage: "images/hero.svg",

  /* ---------- 2. Contact ---------- */
  // Phone as people should SEE it:
  phoneDisplay: "+961XXXXXXXX",
  // WhatsApp number: country code + number, digits only (no +, no spaces, no leading 0)
  whatsappNumber: "961XXXXXXXX",
  // Message that appears pre-typed when someone taps ANY WhatsApp / Book button
  whatsappMessage: "Hi! I'd like to book an appointment.",
  instagramHandle: "snatchedandnailed",   // without the @

  /* ---------- 3. Location ---------- */
  // Address shown on the page. Add the street / building once known.
  address: "Sin El Fil, Beirut, Lebanon",
  // Exact spot for the embedded map: "latitude,longitude"
  // (in Google Maps, right-click the spot and click the numbers to copy them)
  mapQuery: "33.885397,35.537177",
  // Link for the "Get directions" button (Google Maps → Share → Copy link)
  mapLink: "https://maps.app.goo.gl/AjtG8dwewVQkqVx47",

  /* ---------- 4. Opening hours ---------- */
  hours: [
    { days: "Monday – Friday", time: "10:00 AM – 7:00 PM" },
    { days: "Saturday",        time: "10:00 AM – 5:00 PM" },
    { days: "Sunday",          time: "Closed" }
  ],

  /* ---------- 5. Services & prices ---------- */
  currency: "$",
  services: [
    {
      category: "Manicure",
      items: [
        { name: "Classic Manicure",        price: 12, note: "Shape, cuticles & regular polish" },
        { name: "Gel Manicure",            price: 20, note: "Long-lasting gel polish" },
        { name: "French Gel",              price: 25 },
        { name: "Gel Removal",             price: 5 }
      ]
    },
    {
      category: "Extensions",
      items: [
        { name: "Acrylic Full Set",        price: 35 },
        { name: "Gel Extensions (BIAB)",   price: 35 },
        { name: "Refill",                  price: 25, note: "Up to 3 weeks" },
        { name: "Polygel Full Set",        price: 38 }
      ]
    },
    {
      category: "Nail Art",
      items: [
        { name: "Simple Art (per nail)",   price: 2 },
        { name: "Chrome / Cat Eye",        price: 8, note: "Full set add-on" },
        { name: "Custom Design",           price: "from 15" }
      ]
    },
    {
      category: "Pedicure",
      items: [
        { name: "Classic Pedicure",        price: 18 },
        { name: "Gel Pedicure",            price: 25 },
        { name: "Spa Pedicure",            price: 30, note: "Scrub, mask & massage" }
      ]
    }
  ],

  /* ---------- 6. Gallery ----------
     Put photos in the /images folder and list them here. */
  gallery: [
    { src: "images/gallery-1.svg", alt: "Nude pink gel manicure" },
    { src: "images/gallery-2.svg", alt: "Burgundy almond nails" },
    { src: "images/gallery-3.svg", alt: "French tips with gold detail" },
    { src: "images/gallery-4.svg", alt: "Chrome nails" },
    { src: "images/gallery-5.svg", alt: "Floral nail art" },
    { src: "images/gallery-6.svg", alt: "Milky white acrylic set" }
  ],

  /* ---------- 7. About ---------- */
  aboutTitle: "Your all time fav nail tech",   // from her Instagram bio; could become "Hi, I'm <her name>"
  aboutText: [
    "Nails that scream confidence — that's what every appointment is about.",
    "Hygiene, precision and aesthetic come first: clean, sterilised tools, careful detail work, and designs made to suit you."
  ],
  aboutImage: "images/about.svg",

  /* ---------- 8. Colors ---------- */
  colors: {
    primary:    "#b76e79",   // rose gold — buttons, highlights
    primaryDark:"#8f4f5a",   // darker rose — button hover
    background: "#fdf8f6",   // soft blush white
    surface:    "#ffffff",   // cards
    text:       "#3a2e30",   // main text
    muted:      "#8a7a7c"    // secondary text
  }
};
