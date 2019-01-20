// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyBTbjIeQXV6B9WZh65PgHTnxRHJTHlS3Wc",
    authDomain: "cruzhacks-c5b78.firebaseapp.com",
    databaseURL: "https://cruzhacks-c5b78.firebaseio.com",
    projectId: "cruzhacks-c5b78",
    storageBucket: "cruzhacks-c5b78.appspot.com",
    messagingSenderId: "792887073956"
  },
  googleMaps: {
    api: 'AIzaSyB1j5rigdnPYDbqxS4zr5E0WyK-Np1Tghs',
    uri: 'https://maps.googleapis.com/maps/api/geocode/json'
  },
  newsAPI: {
    uri: 'https://newsapi.org/v2/everything',
    api: '70e7e15c2507424886d787925ed5e1b0',
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
