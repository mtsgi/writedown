# Writedown↓

[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat)](LICENSE)
![GitHub tag (latest by date)](https://img.shields.io/github/v/tag/mtsgi/writedown?color=green)
![npm](https://img.shields.io/npm/v/wdjs?style=flat)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/wdjs)

Writing html will be more fun!

![kaf.js](./logotype.png)

### [View actual sample](https://mtsgi.github.io/writedown/docs/)

### [View on GitHub](https://github.com/mtsgi/writedown)

### [View on npmjs.com](https://www.npmjs.com/package/wdjs)

## Example

```html
<body #root>
  <header>
    <a .header-logo>Writedown</a>
  </header>
  <div .message.green>
    This is example of
    <span #wd>writedown</span>!
  </div>
  <button .button #ok>
    OK
  </button>
</body>
```

↓

```html
<body id="root">
  <header>
    <a class="header-logo">Writedown</a>
  </header>
  <div class="message green">
    This is example of
    <span id="wd">writedown</span>!
  </div>
  <button class="button" id="ok">
    OK
  </button>
</body>
```

## Usage

There are two ways to initialize Writedown.

```html
<script src="https://cdn.jsdelivr.net/gh/mtsgi/writedown@master/writedown.js"></script>
```

or

```html
<script type="module">
  import * as wd from "../wd.js";
  wd.init('.wd');
  // You can init Writedown for the specific element in this way
  // This also works: wd.init(document.querySelector('.wd'))
</script>
```
