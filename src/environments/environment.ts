// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  url: 'http://localhost:5000/game-of-the-year-1ce4f/us-central1',
  firebase: {
    apiKey: "AIzaSyCDF7etnVK2hxhfuB8ShbGyLds14zlOcKU",
    authDomain: "game-of-the-year-1ce4f.firebaseapp.com",
    databaseURL: "https://game-of-the-year-1ce4f.firebaseio.com",
    projectId: "game-of-the-year-1ce4f",
    storageBucket: "game-of-the-year-1ce4f.appspot.com",
    messagingSenderId: "511068299525",
    appId: "1:511068299525:web:4659f9e9e352de51ecd76c"
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
