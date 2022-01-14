import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import * as firebase from "firebase/app";
import "firebase/firestore";
import "firebase/analytics";

Vue.config.productionTip = false
var firebaseConfig = {
  apiKey: "AIzaSyBgo6okEN3FThUd6vKiftAhWY8ZkAWi6yc",
  authDomain: "my-profile-49332.firebaseapp.com",
  databaseURL: "https://my-profile-49332.firebaseio.com",
  projectId: "my-profile-49332",
  storageBucket: "my-profile-49332.appspot.com",
  messagingSenderId: "287677774549",
  appId: "1:287677774549:web:b4862c22be93578ff7405c",
  measurementId: "G-E5XBX6YZ4Z"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
Vue.prototype.$analytics = firebase.analytics();
new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
