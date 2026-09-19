const API_BASE = 'https://www.thecolorapi.com';

const baseColor = document.getElementById('baseColor');
const mode = document.getElementById('mode');
const generateBtn = document.getElementById('generate');
const paletteEl = document.getElementById('palette');
const errorEl = document.getElementById('error');
const toast = document.getElementById('toast');
let toastTimer;

function generateScheme() {
  errorEl.textContent = '';
  paletteEl.innerHTML = '';

  const url = API_BASE + '/scheme?hex=' + baseColor.value.slice(1) +
              '&mode=' + mode.value + '&count=8';

  fetch(url)
    .then(function (res) {
      if (!res.ok) throw new Error('Failed to fetch scheme');
      return res.json();
    })
    .then(function (data) {
      renderPalette(data.colors);
    })
    .catch(function () {
      errorEl.textContent = 'Something went wrong. Please try again.';
    });
}

function renderPalette(colors) {
  paletteEl.innerHTML = '';
  colors.forEach(function (c) {
    const card = document.createElement('div');
    card.className = 'color-card';

    const swatch = document.createElement('div');
    swatch.className = 'swatch';
    swatch.style.background = c.hex.value;
    swatch.title = 'Click to copy';
    swatch.addEventListener('click', function () { copyHex(c.hex.value); });

    const info = document.createElement('div');
    info.className = 'info';

    const hex = document.createElement('span');
    hex.className = 'hex';
    hex.textContent = c.hex.value;
    hex.addEventListener('click', function () { copyHex(c.hex.value); });

    const name = document.createElement('div');
    name.className = 'name';
    name.textContent = c.name.value || '';

    info.appendChild(hex);
    info.appendChild(name);
    card.appendChild(swatch);
    card.appendChild(info);
    paletteEl.appendChild(card);
  });
}

function copyHex(value) {
  navigator.clipboard.writeText(value).then(function () {
    showToast(value);
  });
}

function showToast(value) {
  toast.textContent = 'Copied ' + value + '!';
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(function () {
    toast.classList.remove('show');
  }, 1500);
}

generateBtn.addEventListener('click', generateScheme);
baseColor.addEventListener('change', generateScheme);
mode.addEventListener('change', generateScheme);

generateScheme();