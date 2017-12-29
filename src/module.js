'use strict';
document.write('<h2>module.js loadded</h2>');
console.log('here comes module.js');

let mod = (foo) => {
  document.write('<h3>module execetued! ' + foo + '</h3>');
  console.log('mod.js');
}

export {mod}
