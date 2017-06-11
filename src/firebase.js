import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBUt9_f1uPCyYxr7dz0ifXVS75Thdot8Bk",
    authDomain: "goalcoach-d2bdf.firebaseapp.com",
    databaseURL: "https://goalcoach-d2bdf.firebaseio.com",
    projectId: "goalcoach-d2bdf",
    storageBucket: "goalcoach-d2bdf.appspot.com",
    messagingSenderId: "985428915229"
  };

export const firebaseApp = firebase.initializeApp(config);
export const goalRef = firebase.database().ref('goals');
export const completeGoalRef = firebase.database().ref('completeGoals');
