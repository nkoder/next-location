define(['lodash'], function (_) {

  function all() {
    return [{
      isDefault: true,
      id: 'grabki',
      idOfNext: 'hala',
      location: {
        name: 'Willa Grabkowo',
        wgs84Coordinate: 'N52°12\'05.328" E20°51\'53.388"',
        googleMapsCoordinate: {
          latitude: '52.20148',
          longitude: '20.86483'
        }
      },
      task: {
        question: 'Ile rombów jest widocznych na furtce?',
        correctAnswers: ['dwa', '2']
      }
    }, {
      id: 'hala',
      idOfNext: 'klatka',
      location: {
        name: 'Laser Tag',
        wgs84Coordinate: 'N52°12\'19" E20°52\'26"',
        googleMapsCoordinate: {
          latitude: '52.205278',
          longitude: '20.873889'
        }
      },
      task: {
        question: '???',
        correctAnswers: ['???', '??']
      }
    }, {
      id: 'klatka',
      idOfNext: 'brzozy',
      location: {
        name: 'Captivity',
        wgs84Coordinate: 'N52°13\'52"N 21°00\'49"E',
        googleMapsCoordinate: {
          latitude: '52.231111',
          longitude: '21.013611'
        }
      },
      task: {
        question: '???',
        correctAnswers: ['???', '??']
      }
    }, {
      id: 'brzozy',
      idOfNext: 'komunizm',
      location: {
        name: 'Brzozowski Family Palace',
        wgs84Coordinate: 'N52°13\'55.9" E21°01\'01.4"',
        googleMapsCoordinate: {
          latitude: '52.232194',
          longitude: '21.017056'
        }
      },
      task: {
        question: '???',
        correctAnswers: ['???', '??']
      }
    }, {
      id: 'komunizm',
      idOfNext: 'chaos',
      location: {
        name: 'Memoriał Wolnego Słowa',
        wgs84Coordinate: 'N52°13\'50.4" E21°01\'14.1"',
        googleMapsCoordinate: {
          latitude: '52.230667',
          longitude: '21.020583'
        }
      },
      task: {
        question: '???',
        correctAnswers: ['???', '??']
      }
    }, {
      id: 'chaos',
      location: {
        name: 'Zamieszanie',
        wgs84Coordinate: 'N52°13\'53.4" E21°01\'19.2"',
        googleMapsCoordinate: {
          latitude: '52.2315',
          longitude: '21.0220'
        }
      },
      task: {
        question: '???',
        correctAnswers: ['???', '??']
      }
    }
    ];
  }

  function defaultLocation() {
    return _.find(all(), function (location) {
      return !!location.isDefault;
    });
  }

  return {
    all: all,
    defaultLocation: defaultLocation
  }
});
