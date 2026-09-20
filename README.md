````markdown
# 🎨 Color Scheme Generator

A responsive **Color Scheme Generator** built using **HTML, CSS, and JavaScript**.

The application uses **The Color API** to generate color palettes based on a selected base color and color scheme mode.

## ✨ Features

- Select a custom base color
- Generate 8-color palettes
- Multiple color scheme modes:
  - Monochrome
  - Monochrome Dark
  - Monochrome Light
  - Analogic
  - Complement
  - Analogic Complement
  - Triad
  - Quad
- Displays HEX values and color names
- Click a color or HEX code to copy it
- Clipboard confirmation toast
- Automatic palette update when color or mode changes
- Responsive layout for desktop, tablet, and mobile
- Error handling for failed API requests

## 🛠️ Tech Stack

- HTML5
- CSS3
- JavaScript
- Fetch API
- Clipboard API
- The Color API

## 🌍 Live Demo

https://git-jagmohan.github.io/Color-Scheme-Generator/

## 🌐 API Used

This project uses **The Color API** to generate color schemes.

API endpoint:

```text
https://www.thecolorapi.com/scheme
````

Example request:

```text
https://www.thecolorapi.com/scheme?hex=ff5733&mode=analogic&count=8
```

### Query Parameters

| Parameter | Purpose                   |
| --------- | ------------------------- |
| `hex`     | Base color without `#`    |
| `mode`    | Selected color scheme     |
| `count`   | Number of colors returned |

## 📂 Project Structure

```text
Color-Scheme-Generator/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

## ⚙️ How It Works

The user selects a base color and a color scheme mode.

JavaScript creates the API request using those values:

```javascript
const url = API_BASE + '/scheme?hex=' + baseColor.value.slice(1) +
            '&mode=' + mode.value + '&count=8';
```

The application then fetches the palette:

```javascript
fetch(url)
  .then(function (res) {
    if (!res.ok) throw new Error('Failed to fetch scheme');
    return res.json();
  })
  .then(function (data) {
    renderPalette(data.colors);
  });
```

The returned colors are dynamically rendered as cards containing:

* Color swatch
* HEX value
* Color name

## 📋 Copy to Clipboard

Clicking a color swatch or HEX value copies the color using the Clipboard API:

```javascript
navigator.clipboard.writeText(value);
```

A temporary toast notification confirms that the value was copied.

## 🚀 Run Locally

Clone the repository:

```bash
git clone https://github.com/git-jagmohan/Color-Scheme-Generator.git
```

Move into the project folder:

```bash
cd Color-Scheme-Generator
```

Then open:

```text
index.html
```

in your browser.

No backend or package installation is required.



## 👨‍💻 Author

**Jagmohan Singh**

GitHub: [git-jagmohan](https://github.com/git-jagmohan)

## 📄 License

This project was created for learning and portfolio purposes.

```
```
