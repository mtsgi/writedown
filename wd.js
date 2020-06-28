export function init(param) {
  const el = param instanceof HTMLElement ? param : document.querySelector(param);
  el.querySelectorAll('*').forEach(node => {
    if (node.hasAttributes()) {
      let attrs = [], classes = [], id = null;
      for (const attr of node.attributes) {
        switch (attr.name[0]) {
          case '.':
            classes.push(...attr.name.substring(1).split('.'));
            attrs.push(attr.name);
            break;
          case '#':
            id = attr.name.substring(1);
            attrs.push(attr.name);
            break;
        }
      }
      for (const a of attrs) { node.removeAttribute(a) }
      if (classes.length) node.classList.add(...classes);
      if (id) node.id = id;
    }
  });
}
