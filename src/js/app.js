(function () {
  "use strict";

  var DEFAULT_ROUTE = 'grabki';

  var template = document.querySelector('#t');

  template.pages = [{
    location: {
      name: 'Willa Grabkowo',
      wgs84Coordinate: 'N52°12\'05.328" E20°51\'53.388"',
      googleMapsCoordinate: {
        latitude: '52.20148',
        longitude: '20.86483'
      }
    },
    hash: 'grabki',
    nextHash: 'hala'
  }, {
    location: {
      name: 'Laser Tag',
      wgs84Coordinate: 'N52°12\'19" E20°52\'26"',
      googleMapsCoordinate: {
        latitude: '52.205278',
        longitude: '20.873889'
      }
    },
    hash: 'hala',
    nextHash: 'klatka'
  }, {
    location: {
      name: 'Captivity',
      wgs84Coordinate: 'N52°13\'52"N 21°00\'49"E',
      googleMapsCoordinate: {
        latitude: '52.231111',
        longitude: '21.013611'
      }
    },
    hash: 'klatka',
    nextHash: 'brzozy'
  }, {
    location: {
      name: 'Brzozowski Family Palace',
      wgs84Coordinate: 'N52°13\'55.9" E21°01\'01.4"',
      googleMapsCoordinate: {
        latitude: '52.232194',
        longitude: '21.017056'
      }
    },
    hash: 'brzozy',
    nextHash: 'komunizm'
  }, {
    location: {
      name: 'Memoriał Wolnego Słowa',
      wgs84Coordinate: 'N52°13\'50.4" E21°01\'14.1"',
      googleMapsCoordinate: {
        latitude: '52.230667',
        longitude: '21.020583'
      }
    },
    hash: 'komunizm',
    nextHash: 'chaos'
  }, {
    location: {
      name: 'Zamieszanie',
      wgs84Coordinate: 'N52°13\'53.4" E21°01\'19.2"',
      googleMapsCoordinate: {
        latitude: '52.2315',
        longitude: '21.0220'
      }
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
