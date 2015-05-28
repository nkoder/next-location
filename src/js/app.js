(function () {
  "use strict";

  var DEFAULT_ROUTE = 'grabki';

  var template = document.querySelector('#t');

  template.pages = [{
    location: {
      name: 'Willa Grabkowo',
      wgs84Coordinate: 'N 52° 12\' 05.328\" E 20° 51\' 53.388\"'
    },
    hash: 'grabki',
    nextHash: 'hala'
  }, {
    location: {
      name: 'Laser Tag',
      wgs84Coordinate: '???'
    },
    hash: 'hala',
    nextHash: 'klatka'
  }, {
    location: {
      name: 'Captivity',
      wgs84Coordinate: '???'
    },
    hash: 'klatka',
    nextHash: 'brzozy'
  }, {
    location: {
      name: 'Brzozowski Family Palace',
      wgs84Coordinate: 'N 52° 13.931 E 021° 01.023'
    },
    hash: 'brzozy',
    nextHash: 'komunizm'
  }, {
    location: {
      name: 'Memoriał Wolnego Słowa',
      wgs84Coordinate: 'N 52° 13.840 E 021° 01.235'
    },
    hash: 'komunizm',
    nextHash: 'chaos'
  }, {
    location: {
      name: 'Zamieszanie',
      wgs84Coordinate: '???'
    },
    hash: 'chaos'
  }
  ];
  template.addEventListener('template-bound', function (e) {
    var keys = document.querySelector('#keys');

    // Allow selecting pages by num keypad. Dynamically add
    // [1, template.pages.length] to key mappings.
    var keysToAdd = Array.apply(null, template.pages).map(function (x, i) {
      return i + 1;
    }).reduce(function (x, y) {
      return x + ' ' + y;
    });
    keys.keys += ' ' + keysToAdd;

    this.route = this.route || DEFAULT_ROUTE; // Select initial route.
  });

  template.keyHandler = function (e, detail, sender) {
    var pages = document.querySelector('#pages');

    // Select page by num key.
    var num = parseInt(detail.key);
    if (!isNaN(num) && num <= this.pages.length) {
      pages.selectIndex(num - 1);
      return;
    }

    switch (detail.key) {
      case 'left':
      case 'up':
        pages.selectPrevious();
        break;
      case 'right':
      case 'down':
        pages.selectNext();
        break;
      case 'space':
        detail.shift ? pages.selectPrevious() : pages.selectNext();
        break;
    }
  };

  template.cyclePages = function (e, detail, sender) {
    // Click clicks should navigate and not cycle pages.
    if (e.path[0].localName == 'a') {
      return;
    }

    e.shiftKey ? sender.selectPrevious(true) : sender.selectNext(true);
  };

  template.menuItemSelected = function (e, detail, sender) {
    if (detail.isSelected) {
      document.querySelector('#scaffold').closeDrawer();
    }
  };
})();
