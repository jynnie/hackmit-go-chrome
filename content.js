(function() {
  'use strict';

  findAndReplaceDOMText(document.body, {
    preset: 'prose',
    find: /\bgo\/([0-9a-z-]+)\b/,
    filterElements: function(elt) {
      // don't mess with existing links
      if (elt.tagName === 'A') {
        return false;
      } else {
        return true;
      }
    },
    replace: function(portion, match) {
      var a = document.createElement('a');
      a.href = 'http://link.jynnie.me/' + match[1];
      a.innerText = 'link/' + match[1];
      return a;
    }
  });
})();
