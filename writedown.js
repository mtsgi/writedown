"use strict";

document.querySelectorAll('*').forEach(node => {
  if (node.hasAttributes()) {
    for (const attr of node.attributes) {
      switch (attr.name[0]) {
        case '.':
          node.classList.add(...attr.name.slice(1).split('.'));
          node.removeAttribute(attr.name);
          break;
        case '#':
          node.id = attr.name.slice(1);
          node.removeAttribute(attr.name);
          break;
      }
    }
  }
});
