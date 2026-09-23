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
    { days: "Monday – Saturday", time: "8:00 AM – 6:00 PM" },
    { days: "Sunday",            time: "Closed" }
  ],

  /* ---------- 5. Services & prices ----------
     Each category:  category (title), note (optional, small text under the title), items.
     Each item:      name, price, duration (optional), note (optional),
                     popular: true (optional, shows a "Popular" badge).
     price can be a number (8 → "$8") or text where the number gets the $ added
     ("from 0.50 per nail" → "from $0.50 per nail", "+2" → "+$2"). */
  currency: "$",
  services: [
    {
      category: "Manicure",
      items: [
        { name: "Regular Manicure",              price: 8,  duration: "30 min" },
        { name: "Manicure without Color",        price: 5,  duration: "30 min" },
        { name: "Gel Color",                     price: 15, duration: "50 min" },
        { name: "Pose Mains",                    price: 5,  duration: "20 min" }
      ]
    },
    {
      category: "Pedicure",
      items: [
        { name: "Regular Pedicure",              price: 10, duration: "45 min" },
        { name: "Pedicure without Color",        price: 8,  duration: "40 min" },
        { name: "Pedicure with Gel Color",       price: 30, duration: "80 min" },
        { name: "Pose Pieds",                    price: 5,  duration: "20 min" }
      ]
    },
    {
      category: "Liquid Builder",
      note: "Russian manicure included",
      items: [
        { name: "Liquid Builder Colored",        price: 20, duration: "60 min", popular: true },
        { name: "Liquid Builder + Regular Polish", price: 25, duration: "50 min" },
        { name: "Liquid Builder + Gel Color",    price: 30, duration: "60 min" }
      ]
    },
    {
      category: "Extensions",
      note: "Russian manicure included",
      items: [
        { name: "Full Set Gel Extensions, with gel color", price: 50, duration: "120 min" },
        { name: "GelX",                          price: 35, duration: "75 min" },
        { name: "Refill with Gel Color",         price: 30, duration: "90 min" },
        { name: "Refill with Regular Color",     price: 25, duration: "75 min" }
      ]
    },
    {
      category: "Extras",
      items: [
        { name: "Nail Designs",                  price: "from 0.50 per nail", note: "Depends on the design" },
        { name: "French",                        price: "+2" },
        { name: "Ombre / Cat Eye",               price: "+5" },
        { name: "Broken Nail Repair",            price: 1 }
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
