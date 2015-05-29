define(['lodash'], function (_) {

  function all() {
    return [{
      isDefault: true,
      id: 'grabki',
      idOfNextLocation: 'hala',
      name: 'Grabki',
      wgs84Coordinate: {
        latitude: 'N52°12\'05.328"',
        longitude: 'E20°51\'53.388"'
      },
      googleMapsCoordinate: {
        latitude: '52.20148',
        longitude: '20.86483'

      },
      task: {
        question: 'Jakie dwie fajne figury znajdują się na furtce',
        correctAnswers: ['dwa', '2']
      },
      geocacheContentFile: 'geocache-grabki-content.mst'
    }, {
      idOfPreviousLocation: 'grabki',
      id: 'hala',
      idOfNextLocation: 'klatka',
      name: 'Hala',
      wgs84Coordinate: {
        latitude: 'N52°12\'19"',
        longitude: 'E20°52\'26"'
      },
      googleMapsCoordinate: {
        latitude: '52.205278',
        longitude: '20.873889'

      },
      task: {
        question: '???',
        correctAnswers: ['???', '??']
      }
    }, {
      idOfPreviousLocation: 'hala',
      id: 'klatka',
      idOfNextLocation: 'brzozy',
      name: 'Klatka',
      wgs84Coordinate: {
        latitude: 'N52°13\'52"',
        longitude: 'E21°00\'49"'
      },
      googleMapsCoordinate: {
        latitude: '52.231111',
        longitude: '21.013611'

      },
      task: {
        question: '???',
        correctAnswers: ['???', '??']
      }
    }, {
      idOfPreviousLocation: 'klatka',
      id: 'brzozy',
      idOfNextLocation: 'komunizm',
      name: 'Brzozy',
      wgs84Coordinate: {
        latitude: 'N52°13\'55.9"',
        longitude: 'E21°01\'01.4"'
      },
      googleMapsCoordinate: {
        latitude: '52.232194',
        longitude: '21.017056'

      },
      task: {
        question: '???',
        correctAnswers: ['???', '??']
      }
    }, {
      idOfPreviousLocation: 'brzozy',
      id: 'komunizm',
      idOfNextLocation: 'chaos',
      name: 'Komunizm',
      wgs84Coordinate: {
        latitude: 'N52°13\'50.4"',
        longitude: 'E21°01\'14.1"'
      },
      googleMapsCoordinate: {
        latitude: '52.230667',
        longitude: '21.020583'

      },
      task: {
        question: '???',
        correctAnswers: ['???', '??']
      }
    }, {
      idOfPreviousLocation: 'komunizm',
      id: 'chaos',
      name: 'Chaos',
      wgs84Coordinate: {
        latitude: 'N52°13\'53.4"',
        longitude: 'E21°01\'19.2"'
      },
      googleMapsCoordinate: {
        latitude: '52.2315',
        longitude: '21.0220'

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
