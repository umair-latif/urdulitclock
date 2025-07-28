Brief:
Urdu Literary Clock is a web-based clock that displays time alongside beautifully curated Urdu literary quotes, including poetry and prose.
It supports multiple color themes, dark/light mode, Roman Urdu toggle, and highlighted text for important phrases.
The quotes are dynamically loaded from quotes.json and fallbacks.json, making it easy to update the content without changing the code.

🌐 Live Demo
Live Demo on Netlify 


# 🕰️ Urdu Literary Clock

A **beautiful literary clock** that displays the current time alongside Urdu quotes from prose and poetry.  
Perfect for literature lovers who appreciate an elegant reading experience with dynamic themes and smooth UI.

---

## ✨ Features
- 🕰️ **Live Clock** – updates every minute with a new quote every quarter
- 📖 **Urdu Literary Quotes** – sourced from `quotes.json`
- 🔀 **Random Quote Selection** – with intelligent fallback logic
- 🎨 **Multiple Color Themes** – Black/White, Blue/Violet, Maroon/Pink, Green/Teal
- 🌙 **Dark/Light Mode** – works with all themes
- 🔠 **Roman Urdu Toggle** – show or hide transliteration (if available)
- 🔍 **Highlight Support** – highlights important text in quotes
- 🖋️ **Poetry Formatting** – `(ل)` in quotes is rendered as a line break
- 📜 **Metadata Display** – source and book information displayed elegantly
- 🖋️ **Custom Fonts** – Urdu text uses local `Noto Nastaliq Urdu`, Roman text uses a literary serif font

---

## 📂 Project Structure
literary-clock/
├── index.html # Main HTML
├── styles.css # Styles with themes
├── app.js # JavaScript logic
├── quotes.json # Urdu literary quotes
├── fallbacks.json # Fallback quotes
└── fonts/ # Custom fonts (.ttf)

🎨 Customization
Themes can be modified in styles.css

Fonts can be replaced by adding .ttf files in fonts/ and updating CSS.

Quotes can be updated by editing quotes.json.

🛠️ Technologies Used
HTML5 / CSS3 / Vanilla JavaScript

Custom Web Fonts (Noto Nastaliq Urdu)

JSON for data storage

Each entry in quotes.json follows this format:
  {
    "hour": 10,
    "slot": 3.1,
    "type": "prose",
    "urdu": "صبح آنکھ کھلی تو کمرے میں دھوپ لہریں مار رہی تھی۔ گھڑی کو دیکھا تو پونے گیارہ بجے تھے۔ ہاتھ بڑھا کر میز پر سے ایک سگریٹ اٹھایا اور سلگا کر طشتری میں رکھ دیا اور پھر اونگھنے لگا۔",
    "transliteration": "Subah āñkh khulī to kamray mein dhoop lehrēñ mār rahī thī. Ghaṛī ko dekhā to poné gyārah bajé the. Hāth baṛhā kar mēz par se ek sigret uṭhāyā aur sulgā kar ṭashtari mein rakh diyā aur phir ūnghnē lagā.",
    "source": "Ahmed Shah Patras Bokhari",
    "source_urdu": "احمد شاہ پطرس بخاری",
    "book": "Main Ek Mian Hoon",
    "book_urdu": "میں ایک میاں ہوں",
    "highlight": "پونے گیارہ بجے"
  }

  hour= 0-23
  slot= 0-3 (for each quarter) with multiple entries numbered with a ".", for example: 3.1, 3.2, 3.3 .... one of these three would be picked randomly for this slot.
  urdu= (ل) or \n → renders as a line break in Urdu and Roman text
  highlight= the text to be highlighted in the quote. 
  

  the rest of the fields are self-explanatory.

📜 License
This project is licensed under the MIT License.
Feel free to fork and improve!

💡 Contribute
Pull requests are welcome!
If you’d like to add more literary quotes or features, feel free to open an issue or PR.
