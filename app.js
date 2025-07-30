let quotes = [];
let fallbacks = [{
      "hour": 11,
      "slot": 0,
      "type": "poetry",
      "urdu": "وقت رہتا نہیں کہیں ٹک کر\nعادت اس کی بھی آدمی سی ہے",
      "transliteration": "Waqt rehta nahi kahin tik kar\nAadat is ki bhi aadmi si hai",
      "source": "Gulzar",
      "source_urdu": "گلزار",
      "book": "",
      "book_urdu": ""
    },
    {
      "hour": 0,
      "slot": 0,
      "type": "poetry",
      "urdu": "اک سال گیا اک سال نیا ہے آنے کو\nپر وقت کا اب بھی ہوش نہیں دیوانے کو",
      "transliteration": "Ek saal gaya ek saal naya hai anay ko\nPar waqt ka ab bhi hosh nahi deewanay ko",
      "source": "Ibn-e-Insha",
      "source_urdu": "ابنِ انشا",
      "book": "",
      "book_urdu": ""
    },
	{
      "hour": 3,
      "slot": 0,
      "type": "poetry",
      "urdu": "سفر پیچھے کی جانب ہے قدم آگے ہے میرا\nمیں بوڑھا ہوتا جاتا ہوں جواں ہونے کی خاطر",
      "transliteration": "Safar peechhay ki janib hai qadam aagay hai mera\nMain boodha hota jata hoon jawan honay ki khatir",
      "source": "Zafar Iqbal",
      "source_urdu": "ظفر اقبال",
      "book": "",
      "book_urdu": ""
    },
    {
      "hour": 12,
      "slot": 3,
      "type": "poetry",
      "urdu": "یہ صبح کی سفیدیاں یہ دوپہر کی زردیاں\nاب آئنے میں دیکھتا ہوں میں کہاں چلا گیا",
      "transliteration": "Yeh subah ki safeediyan yeh dopehar ki zardiyan\nAb aaine mein dekhta hoon main kahan chala gaya",
      "source": "Nasir Kazmi",
      "source_urdu": "ناصر کاظمی",
      "book": "",
      "book_urdu": ""
    },
    {
      "hour": 10,
      "slot": 3,
      "type": "prose",
      "urdu": "دونوں اس وقت اس شان سے بیٹھے ہوئے پوریاں کھا رہے تھے جیسے جنگل میں کوئی شیر اپنا شکار اڑا رہا ہو، نہ جواب دہی کا خوف تھا نہ بدنامی کی فکر۔ ضعف کے ان مراحل کو انہوں نے بہت پہلے طے کر لیا تھا۔",
      "transliteration": "Dono us waqt is shaan se baithe hue puriyan kha rahe thay jaise jungle mein koi sher apna shikaar uda raha ho, na jawab-dehi ka khauf tha na badnami ki fikr. Zu'af ke un marahil ko unhon ne bohot pehle tay kar liya tha.",
      "source": "Premchand",
      "source_urdu": "پریم چند",
      "book": "Kafan",
      "book_urdu": "کفن"
  },
  {
    "hour": null,
    "slot": 0,
    "type": "prose",
    "urdu": "میں نے کہا جی یہ ہر وقت جیب میں ہاتھ ڈال کر کچھ ٹٹولتا رہتا ہے۔ کہنے لگے جی یہ اللہ والا آدمی ہے اور خدا کے اصل بندے جو ہیں وہ ہر وقت جیبوں کی تلاشی لیتے رہتے ہیں کہ اس میں کوئی چیز تو نہیں پڑی جو اللہ کو نا پسند ہو۔",
    "transliteration": "Main ne kaha ji yeh har waqt jeeb mein haath daal kar kuch tatolta rehta hai. Kehne lage ji yeh Allah wala aadmi hai aur Khuda ke asal banday jo hain woh har waqt jeebon ki talashi lete rehte hain ke is mein koi cheez to nahi pari jo Allah ko na pasand ho.",
    "source": "Ashfaq Ahmad",
    "source_urdu": "اشفاق احمد",
    "book": "Pani Ki Ladaai Aur Sandeelay Ki Tawaifain",
    "book_urdu": "پانی کی لڑائی اور سندیلے کی طوائفیں"
  },
  {
    "hour": 12,
    "slot": 0,
    "type": "prose",
    "urdu": "یہاں سے لوگ دوپہر کے وقت بھی نہ گزرتے تھے کیونکہ پرانے زمانے میں یہاں ایک شہر غرق ہو ا تھا۔",
    "transliteration": "Yahan se log dopehar ke waqt bhi na guzarte thay kyun ke purane zamane mein yahan ek sheher gharq hua tha.",
    "source": "Ashfaq Ahmad",
    "source_urdu": "اشفاق احمد",
    "book": "Gudariya",
    "book_urdu": "گڈریا"
  },
  {
    "hour": 20,
    "slot": 0,
    "type": "prose",
    "urdu": "وقت مقررہ پر جب میں کم کافی بار میں داخل ہوا تو نیم تاریک کافی بار کے ایک کونے میں نیشنل کالج آف آرٹس کا ایک جوڑا سر جوڑے آرٹ کے بارے میں گفتگو نہیں کر رہے تھے۔ دوسرے کونے میں ایک بگلا میز پر پھیلے ہوئے لاہور کے نقشے پر جھکا تھا۔۔۔ یہی ہو سکتا ہے۔",
    "transliteration": "Waqt muqarrara par jab main Kum Coffee Bar mein daakhil hua to neem tareek coffee bar ke aik konay mein National College of Arts ka aik jora sar jore art ke baare mein guftagu nahi kar rahe thay. Dosray konay mein aik bagla maiz par phailay huay Lahore ke naqshay par jhuka tha… yahi ho sakta hai.",
    "source": "Mustansar Hussain Tarar",
    "source_urdu": "مستنصر حسین تارڑ",
    "book": "Aadhi Raat Ka Sooraj",
    "book_urdu": "آدھی رات کا سورج"
  },
  {
    "hour": 23,
    "slot": 3,
    "type": "poetry",
    "urdu": "کب ٹھہرے گا درد اے دل کب رات بسر ہوگی\nسنتے تھے وہ آئیں گے سنتے تھے سحر ہوگی",
    "transliteration": "Kab thehre ga dard ae dil kab raat basar hogi\nSunte the woh aayenge sunte the sehar hogi",
    "source": "Faiz Ahmed Faiz",
    "source_urdu": "فیض احمد فیض",
    "book": "",
    "book_urdu": ""
  }];

// ---- SETTINGS ----
let darkMode = localStorage.getItem("darkMode") === "true";
let showRoman = localStorage.getItem("showRoman") === "true";
let timeFormat = localStorage.getItem("timeFormat") || "24H";
let colorTheme = localStorage.getItem("colorTheme") || "default"; // default black/white
let lastQuoteBucket = -1;
let lastQuoteHour = -1;

// ---- ELEMENTS ----
const timeEl = document.getElementById("time");
const urduEl = document.getElementById("urdu-quote");
const romanEl = document.getElementById("roman-quote");
const menuEl = document.getElementById("menu");
const footerEl = document.getElementById("footer");
const themeBtn = document.getElementById("toggle-theme");
const romanBtn = document.getElementById("toggle-roman");
const formatBtn = document.getElementById("toggle-format");
const colorCircles = document.querySelectorAll(".color-circle");

// ---- APPLY SAVED SETTINGS ----
document.body.classList.add(`theme-${colorTheme}`);
menuEl.classList.add(`theme-${colorTheme}`);
footerEl.classList.add(`theme-${colorTheme}`);
document.body.classList.toggle("dark", darkMode);
menuEl.classList.toggle("dark", darkMode);
footerEl.classList.toggle("dark", darkMode);
themeBtn.textContent = darkMode ? "☀️" : "🌙";
romanBtn.textContent = showRoman ? "Hide Roman Urdu" : "Show Roman Urdu";
romanEl.style.display = showRoman ? "block" : "none";
formatBtn.textContent = timeFormat;
const selectedCircle = document.querySelector(`.color-circle[data-theme="${colorTheme}"]`);
if (selectedCircle) selectedCircle.classList.add("selected");

// ---- FUNCTIONS ----
function updateThemeColors() {
  document.body.classList.toggle("dark", darkMode);
  menuEl.classList.toggle("dark", darkMode);
  footerEl.classList.toggle("dark", darkMode);
}

function getCurrentDate() {
  return new Date();
}

function formatTime() {
  const now = getCurrentDate();
  let h = now.getHours();
  const m = now.getMinutes().toString().padStart(2, "0");

  if (timeFormat === "12H") {
    const ampm = h >= 12 ? "PM" : "AM";
    h = h % 12 || 12;
    return `${h}:${m} ${ampm}`;
  }
  return `${h.toString().padStart(2, "0")}:${m}`;
}

function getSlot(minute) {
  if (minute >= 45) return 3;
  if (minute >= 30) return 2;
  if (minute >= 15) return 1;
  return 0;
}

// ---- QUOTE SEARCH WITH RANDOMIZATION ----
function findQuote(hour, slot) {
  let candidates = quotes.filter(q => q.hour === hour && q.slot === slot);
  while (candidates.length === 0 && slot > 0) {
    slot--;
    candidates = quotes.filter(q => q.hour === hour && q.slot === slot);
  }
  if (candidates.length === 0) {
    return fallbacks[Math.floor(Math.random() * fallbacks.length)] || 
           { urdu: "کوئی اقتباس نہیں ملا!", transliteration: "koi iqtibaas nahin mila!" };
  }
  return candidates[Math.floor(Math.random() * candidates.length)];
}

// ---- HIGHLIGHT FUNCTION ----
function highlightText(text, highlight) {
  if (!text) return "";          // gracefully handle missing fields
  if (!highlight) return text;
  const regex = new RegExp(`(${highlight})`, "gi");
  return text.replace(regex, `<span class="highlighted">$1</span>`);
}

// ---- UPDATE CLOCK DISPLAY ----
function updateClock(forceQuote = false) {
  const now = getCurrentDate();
  const hour = now.getHours();
  const minute = now.getMinutes();
  const slot = getSlot(minute);

  timeEl.textContent = formatTime();

  const bucket = Math.floor(minute / 5);
  if (forceQuote || bucket !== lastQuoteBucket || hour !== lastQuoteHour) {
    lastQuoteBucket = bucket;
    lastQuoteHour = hour;

    const quote = findQuote(hour, slot);

    const urduHighlighted = highlightText(quote.urdu, quote.highlight).replace(/\(ل\)/g, "<br>");
    const romanHighlighted = highlightText(quote.transliteration || "", quote.highlight).replace(/\(ل\)/g, "<br>");

    urduEl.innerHTML = urduHighlighted
      .split("\n")
      .map(line => `<p>${line}</p>`)
      .join("");
    romanEl.innerHTML = showRoman ? romanHighlighted : "";

    let metaHTML = "";
    if (showRoman) {
      if (quote.source) metaHTML += `<div><em>${quote.source}</em></div>`;
      if (quote.book) metaHTML += `<div><small>${quote.book}</small></div>`;
    } else {
      if (quote.source_urdu) metaHTML += `<div class="font-naskh">${quote.source_urdu}</div>`;
      if (quote.book_urdu) metaHTML += `<div class="font-naskh"><small>${quote.book_urdu}</small></div>`;
    }

    const existingMeta = document.querySelector(".meta-info");
    if (existingMeta) existingMeta.remove();
    const metaDiv = document.createElement("div");
    metaDiv.className = "meta-info";
    metaDiv.innerHTML = metaHTML;
    romanEl.insertAdjacentElement("afterend", metaDiv);

    const quoteContainer = document.querySelector(".quote-container");
    adjustFontSize(quoteContainer, urduEl, romanEl, metaDiv);
  }
}

// ---- EVENT LISTENERS ----
themeBtn.addEventListener("click", () => {
  darkMode = !darkMode;
  localStorage.setItem("darkMode", darkMode);
  updateThemeColors();
  themeBtn.textContent = darkMode ? "☀️" : "🌙";
});

romanBtn.onclick = () => {
  showRoman = !showRoman;
  localStorage.setItem("showRoman", showRoman);
  romanBtn.textContent = showRoman ? "Hide Roman" : "Show Roman";
  updateClock(true); // ✅ Refresh the quote rendering
};

formatBtn.onclick = () => {
  timeFormat = timeFormat === "24H" ? "12H" : "24H";
  localStorage.setItem("timeFormat", timeFormat);
  formatBtn.textContent = timeFormat;
  updateClock(true);
};

// Re-adjust font size dynamically when the window is resized
window.addEventListener("resize", () => {
  const quoteContainer = document.querySelector(".quote-container");
  const metaDiv = document.querySelector(".meta-info");
  const urduEl = document.getElementById("urdu-quote");
  const romanEl = document.getElementById("roman-quote");

  adjustFontSize(quoteContainer, urduEl, romanEl, metaDiv);
});

// ---- COLOR THEME CIRCLES ----
function applyColorTheme(theme) {
  document.body.classList.remove(`theme-${colorTheme}`);
  menuEl.classList.remove(`theme-${colorTheme}`);
  footerEl.classList.remove(`theme-${colorTheme}`);
  colorTheme = theme;
  document.body.classList.add(`theme-${colorTheme}`);
  menuEl.classList.add(`theme-${colorTheme}`);
  footerEl.classList.add(`theme-${colorTheme}`);
  localStorage.setItem("colorTheme", colorTheme);
}

colorCircles.forEach((circle) => {
  circle.addEventListener("click", () => {
    colorCircles.forEach((c) => c.classList.remove("selected"));
    circle.classList.add("selected");
    applyColorTheme(circle.dataset.theme);
  });
});

function adjustFontSize(quoteContainer, urduEl, romanEl, metaEl) {
  // Reset text sizes
  urduEl.style.fontSize = "";
  romanEl.style.fontSize = "";

  // Calculate available height (exclude meta)
  const availableHeight = quoteContainer.clientHeight - (metaEl?.offsetHeight || 0);
  let scale = 1.0;
  const baseUrdu = parseFloat(getComputedStyle(urduEl).fontSize);
  const baseRoman = parseFloat(getComputedStyle(romanEl).fontSize);

  // Reduce font size until text fits the available space
  while (quoteContainer.scrollHeight > availableHeight && scale > 0.8) {
    scale -= 0.05;
    urduEl.style.fontSize = (baseUrdu * scale) + "px";
    romanEl.style.fontSize = (baseRoman * scale) + "px";
  }
}





// ---- INIT ----
async function init() {
  try {
    quotes = await (await fetch("quotes.json")).json();
  } catch (err) {
    console.error("Error loading quotes:", err);
    urduEl.textContent = "Quotes could not be loaded.";
    return; // can't continue without main quotes
  }

  try {
    const resp = await fetch("fallbacks.json");
    if (resp.ok) {
      fallbacks = await resp.json();
    } else {
      console.warn("fallbacks.json not found, using defaults");
    }
  } catch (err) {
    console.warn("Error loading fallbacks.json, using defaults:", err);
  }

  updateClock(true);
  setInterval(updateClock, 59_000);
}

init();
